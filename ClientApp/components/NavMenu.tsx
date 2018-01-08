import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { History } from 'history';

export class NavMenu extends React.Component<{ LoginOrLogout:JSX.Element }, {}> {
    public render() {
        return <div className='main-nav'>
            <div className='navbar navbar-inverse navbar-fixed-top'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#menu-navbar'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    { this.props.LoginOrLogout }
                    <Link className='navbar-brand' to={ '/' }>Rulette</Link>
                </div>
                <div className='clearfix'></div>
            </div>
            <div className='navbar-link navbar-collapse collapse' id='menu-navbar'>
                <ul className='nav navbar-nav'>
                    <li>
                        <NavLink exact to={ '/' } activeClassName='active'>
                            <span className='glyphicon glyphicon-home'></span> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={ '/dota2' } activeClassName='active'>
                            <span className='glyphicon glyphicon-play'></span> dota2
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={ '/csgo' } activeClassName='active'>
                            <span className='glyphicon glyphicon-play'></span> csgo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to={ '/rules' } activeClassName='active'>
                            <span className='glyphicon glyphicon-info-sign'></span> rules
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to={ '/faq' } activeClassName='active'>
                            <span className='glyphicon glyphicon-question-sign'></span> faq
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>;
    }
}
