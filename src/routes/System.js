import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from '../components/System/Header/Header';
import UserManage from '../components/System/UserManage';
import ProductManage from '../components/System/ProductManage';
import RegisterPackageGroupOrAcc from '../components/System/RegisterPackageGroupOrAcc';

class System extends Component {
    render() {
        console.log('Herer');
        const { systemMenuPath, isLoggedIn } = this.props;
        console.log(systemMenuPath);
        let linkToRedirect = isLoggedIn ? '/system/user-manage' : '/login';

        //return <Redirect to={linkToRedirect} />;
        return (
            <>
                {isLoggedIn && <Header />}
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            <Route
                                path="/system/user-manage"
                                component={UserManage}
                            />
                            <Route
                                path="/system/product-manage"
                                component={ProductManage}
                            />
                            <Route
                                path="/system/register-package-group-or-account"
                                component={RegisterPackageGroupOrAcc}
                            />
                            <Route
                                component={() => {
                                    return <Redirect to={systemMenuPath} />;
                                }}
                            />
                        </Switch>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.admin.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
