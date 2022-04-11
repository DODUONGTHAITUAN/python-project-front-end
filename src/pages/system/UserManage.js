import { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import { types } from '../../utils/constant';
import userService from '../../services/userService';
import Loading from '../../components/Customs/Loading';

const getStyle = (width) => {
    return {
        width: `${width}%`,
        textAlign: 'center',
    };
};

const UserManage = (props) => {
    const [data, setData] = useState({ users: [] });
    const { users, total_pages, current_page } = data;

    const { history, match } = props;

    const handleGetAllUsers = async (page = 1, per_page = 10) => {
        const data = {
            page: page,
            per_page: per_page,
        };
        const res = await userService.getAllUsers(data);
        if (res.data?.code === 0) {
            setData(res.data.data);
        }
    };

    // Handle get all user from db
    useEffect(() => {
        const timer = setTimeout(() => handleGetAllUsers(1, 1), 3000);
        // Clean up function the same with component_will_unmount
        return () => clearTimeout(timer);
    }, []);

    const handleActionsDetailUser = (id, type) => {
        const URL = match?.path
            ? `${match.path}/profile/${type}/${id}`
            : '/system/user-manage';
        history?.push && history.push(URL);
    };

    const handleDeleteUser = async (id) => {
        try {
            const response = await userService.deleteUser(id);
            if (response.data?.code === 0) {
                handleGetAllUsers(1, 1);
            }
        } catch (e) {
            console.log(e);
        }
    };

    // View
    return (
        <>
            {users?.length === 0 ? (
                <Loading width={'10%'} height={'10%'} color={'#0071ba'} />
            ) : (
                <div className='um'>
                    <div className='um__container container'>
                        <div className='um__top'>
                            <table className='table table-bordered table-striped table-hover'>
                                <thead>
                                    <tr>
                                        <th scope='col' style={getStyle(5)}>
                                            ID
                                        </th>
                                        <th scope='col' style={getStyle(25)}>
                                            FullName
                                        </th>
                                        <th scope='col' style={getStyle(30)}>
                                            Email
                                        </th>
                                        <th scope='col' style={getStyle(15)}>
                                            Role
                                        </th>
                                        <th scope='col' style={getStyle(20)}>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users?.length > 0 &&
                                        users.map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <th scope='row'>
                                                        {item.id}
                                                    </th>
                                                    <td>{item.fullName}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.role_value}</td>
                                                    <td className='um__table__actions'>
                                                        <i
                                                            className='far fa-user'
                                                            onClick={() =>
                                                                handleActionsDetailUser(
                                                                    item.id,
                                                                    types.VIEW
                                                                )
                                                            }
                                                        ></i>
                                                        <i
                                                            className='far fa-edit'
                                                            onClick={() =>
                                                                handleActionsDetailUser(
                                                                    item.id,
                                                                    types.EDIT
                                                                )
                                                            }
                                                        ></i>
                                                        <i
                                                            className='far fa-trash-alt'
                                                            onClick={() =>
                                                                handleDeleteUser(
                                                                    item.id
                                                                )
                                                            }
                                                        ></i>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    <tr>
                                        <th scope='row'>?</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className='um__table__actions'>
                                            <i
                                                className='fas fa-user-plus'
                                                onClick={() =>
                                                    handleActionsDetailUser(
                                                        -1,
                                                        types.NEW
                                                    )
                                                }
                                            ></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='um__bottom'>
                            <nav aria-label='Page navigation'>
                                <ul className='pagination justify-content-center um__pages'>
                                    <li className='page-item disabled um__pages__prev'>
                                        <span
                                            className='page-link'
                                            tabIndex={-1}
                                            aria-disabled='true'
                                        >
                                            Previous
                                        </span>
                                    </li>
                                    {total_pages &&
                                        total_pages <= 5 &&
                                        [...Array(total_pages).keys()].map(
                                            (item) => (
                                                <li
                                                    className={`page-item ${
                                                        current_page &&
                                                        current_page ===
                                                            item + 1
                                                            ? 'active'
                                                            : ''
                                                    }`}
                                                    key={item}
                                                    onClick={() =>
                                                        handleGetAllUsers(
                                                            item + 1,
                                                            1
                                                        )
                                                    }
                                                >
                                                    <span className='page-link'>
                                                        {item + 1}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    <li className='page-item um__pages__next'>
                                        <span className='page-link'>Next</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default withRouter(UserManage);
