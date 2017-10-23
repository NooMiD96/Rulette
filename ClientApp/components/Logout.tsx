import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Logout extends React.Component<{userName:string, logoutHandler:any}, {}> {
    public render() {
        return <a className="logout-userName navbar-brand"
            href='/api/auth/signout'
            onClick={() => this.props.logoutHandler()}>
            {this.props.userName}
        </a>;
    }
}
