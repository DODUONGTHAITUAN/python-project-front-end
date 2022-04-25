import { useState } from 'react';
import { withRouter } from 'react-router';

const ul = [
    {
        id: 1,
        title: 'Update General Product',
    },
    {
        id: 2,
        title: 'Update Detail Product',
    },
    {
        id: 3,
        title: 'Update Options',
    },
    {
        id: 4,
        title: 'View',
    },
];

const DropdownOption = (props) => {
    const { history, match, id } = props;
    const handleUpdateProduct = () => {
        const url = match?.url ? `${match.url}/detail-product/${id}` : '';
        history?.push && history.push(url);
    };

    const handlUpdateOptions = () => {
        const url = match?.url ? `${match.url}/update-options/${id}` : '';
        history?.push && history.push(url);
    };

    const handleGetActions = (id) => {
        switch (id) {
            case 2:
                handleUpdateProduct();
                break;
            case 3:
                handlUpdateOptions();
                break;
            default:
                break;
        }
    };
    // handleUpdateProduct();
    return (
        <div className='dropdown-container' tabIndex={-1}>
            <div className='fas fa-ellipsis-v three-dots'></div>
            <div className='dropdown'>
                {ul.map((item) => (
                    <span
                        key={item.id}
                        onClick={() => handleGetActions(item.id)}
                    >
                        <div>{item.title}</div>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default withRouter(DropdownOption);
