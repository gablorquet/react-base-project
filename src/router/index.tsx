import React from 'react';
import { Switch, Route } from 'react-router-dom';

//#region Props/State
type RouterProps = {
}
//#endregion

const Placeholder = React.lazy(() => import('@src/pages/placeholder.page'));

export default function RouterComponent(props: RouterProps) {

    return (
        <Switch>
            <Route>
                <Placeholder />
            </Route>
        </Switch>
    )
}
