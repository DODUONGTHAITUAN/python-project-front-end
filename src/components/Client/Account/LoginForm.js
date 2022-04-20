import { MDBInput } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { connect } from 'react-redux';

import userService from '../../../services/userService';
import { account } from '../../../utils/constant';
import Icons from './Icons';
import {
    userLoginSuccess,
    userLoginFail,
} from '../../../store/actions/userActions';
import { withRouter } from 'react-router';

const inputs = [
    {
        id: 1,
        key: 'email',
        label: 'Email',
        type: 'email',
    },
    {
        id: 2,
        key: 'password',
        label: 'Password',
        type: 'password',
    },
];

const LoginForm = (props) => {
    console.log(props);
    const { active, setTab, userLoginSuccess, userLoginFail, history } = props;

    const [info, setInfo] = useState(() => ({
        email: '',
        password: '',
    }));

    const handleSetInfo = (value, key) => {
        setInfo({
            ...info,
            [key]: value,
        });
    };

    const handleSubmitInfo = async () => {
        if (info.email && info.password) {
            const res = await userService.getUserByEmail(info);
            if (res.data?.code === 0) {
                userLoginSuccess(res.data.user);
                history?.push('/');
            } else {
                userLoginFail();
            }
        }
        return;
    };
    return (
        <div className={`tab-pane ${active === account.LOGIN ? 'active' : ''}`}>
            <div>
                <Icons active={active} />
                <p className='text-center'>or:</p>
                {inputs.map((item) => (
                    <div className='form-outline mb-4' key={item.id}>
                        <MDBInput
                            type={item.type}
                            label={item.label}
                            className='py-2'
                            value={info[item.key]}
                            onChange={(e) =>
                                handleSetInfo(e.target.value, item.key)
                            }
                        />
                    </div>
                ))}
                {/* 2 column grid layout */}
                <div className='row mb-4'>
                    <div className='col-md-6'>
                        {/* Checkbox */}
                        <div className='form-check mb-3 mb-md-0'>
                            <input
                                className='form-check-input'
                                type='checkbox'
                                defaultValue
                                id='loginCheck'
                                defaultChecked
                            />
                            <label
                                className='form-check-label'
                                htmlFor='loginCheck'
                            >
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div
                        className='col-md-6'
                        style={{
                            display: 'flex',
                            justifyContent: 'end',
                        }}
                    >
                        {/* Simple link */}
                        <span style={{ cursor: 'pointer', color: '#0d6efd' }}>
                            Forgot password?
                        </span>
                    </div>
                </div>
                {/* Submit button */}
                <button
                    onClick={() => handleSubmitInfo()}
                    className='btn btn-primary btn-block mb-4'
                    style={{ height: 35 }}
                >
                    Login
                </button>
                {/* Register buttons */}
                <div className='text-center'>
                    <p>
                        Not a member?{' '}
                        <span
                            style={{ cursor: 'pointer', color: '#0d6efd' }}
                            onClick={() => setTab(account.REGISTER)}
                        >
                            Register
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => {
    return {
        userLoginSuccess: (userInfo) => {
            console.log(userInfo);
            return dispatch(userLoginSuccess(userInfo));
        },
        userLoginFail: () => dispatch(userLoginFail()),
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);
