import { useState } from 'react';
import { withRouter } from 'react-router';
import { MDBInput } from 'mdb-react-ui-kit';

import CommonUtils from '../../../utils/CommonUtils';
import { account } from '../../../utils/constant';
import Icons from './Icons';
import userService from '../../../services/userService';

const inputs = [
    {
        id: 1,
        key: 'fullName',
        label: 'Name',
    },
    {
        id: 4,
        key: 'phonenumber',
        label: 'Phonenumber',
    },
    {
        id: 2,
        key: 'email',
        label: 'Email',
        type: 'email',
    },
    {
        id: 3,
        key: 'password',
        label: 'Password',
        type: 'password',
    },
    {
        id: 5,
        key: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
    },
];

const Register = (props) => {
    const { setTab } = props;
    const [info, setInfo] = useState(() => {
        return {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phonenumber: '',
            address: 'Hanoi',
            genderID: 'GEN1',
            roleID: 'RO2',
        };
    });

    const handleSetInfo = (value, key) => {
        setInfo({
            ...info,
            [key]: value,
        });
    };

    const handleSubmitInfo = async () => {
        const isValid = CommonUtils.handleValidateInfoUser(info);
        console.log(isValid);
        if (isValid.code === 0) {
            const res = await userService.createNewUser(info);
            console.log(res);
            if (res.data?.code === 0) {
                setTab(account.LOGIN);
            }
        }
    };

    const { active } = props;
    return (
        <div
            className={`tab-pane ${
                active === account.REGISTER ? 'active' : ''
            }`}
        >
            <div>
                <Icons active={active} />
                <p className='text-center'>or:</p>
                {inputs.map((item) => (
                    <div className='form-outline mb-4' key={item.id}>
                        <MDBInput
                            type={item.type || 'text'}
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
                <div className='form-check d-flex justify-content-start mb-4'>
                    <input
                        className='form-check-input me-2'
                        type='checkbox'
                        id='registerCheck'
                        defaultChecked
                    />
                    <label className='form-check-label' htmlFor='registerCheck'>
                        I have read and agree to the terms
                    </label>
                </div>
                {/* Submit button */}
                <button
                    onClick={() => handleSubmitInfo()}
                    className='btn btn-primary btn-block mb-4 '
                    style={{ height: 35 }}
                >
                    Register
                </button>
                {/* Register buttons */}
                <div className='text-center'>
                    <p>
                        Do you have an account?
                        <span
                            onClick={() => setTab(account.LOGIN)}
                            style={{
                                cursor: 'pointer',
                                color: '#0d6efd',
                            }}
                        >
                            {' '}
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Register);
