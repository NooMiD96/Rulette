import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

export default class Login extends React.Component<{}, {}> {
    public render() {
        return <div className='login-container'>
            <a href='/api/auth/signin'>
                <img src="http://community.edgecast.steamstatic.com/public/images/signinthroughsteam/sits_01.png" 
                    title="Click to login"/>
            </a>
        </div>
    }
}
