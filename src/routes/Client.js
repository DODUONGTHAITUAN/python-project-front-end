import { Switch, Route } from 'react-router';

import HomePage from '../pages/client/HomePage';
import DetailProduct from '../pages/client/DetailProduct';

const Client = () => {
    return (
        <Switch>
            <Route
                path="/detail-product"
                component={DetailProduct}
                exact={true}
            />
            <Route path="/" component={HomePage} exact />
        </Switch>
    );
};

export default Client;
