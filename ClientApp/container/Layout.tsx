import * as React from 'react';
import { Link, RouteComponentProps, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { routerReducer } from 'react-router-redux';
import { NavMenu } from '../components/NavMenu';
import Login from '../components/Login';
import Warning from '../components/Warning';
import Logout from '../components/Logout';
import { ApplicationState } from '../store';
import * as UserState from '../store/User';
import * as ModalState from '../store/Modal';
import Chat from '../components/Chat';

interface IStateProps {
    user:       UserState.UserState,
    routing:    typeof routerReducer,
    children:   Element[],
}
interface IDispatchProps {
    getUserInfo:        () => any,
    deleteUserInfo:     () => any,
    closeModal:         () => any,
    showModal:          (text: string, canClose: boolean) => any,
}

type UserProps =
    //UserState.UserState                 // ... state we've requested from the Redux store
    //& typeof UserState.actionCreators   // ... plus action creators we've requested
    //& typeof ModalState.actionCreators
    IStateProps
    & IDispatchProps
    & RouteComponentProps<{}>;          // ... plus incoming routing parameters   

class Layout extends React.Component<UserProps | any, {}> {
    // readonly warningComponent = new Warning();
    // if user not login, render login component
    LoginOrLogout: any;
    // check auth of user
    userIsAuthPromise: () => Promise<boolean | null | void> = () => {
        return fetch(`/api/get/UserIsAuth`, {
                method: 'GET',
                credentials: "same-origin"
            }).then(response => {
                if (response.status !== 200) return undefined;
                return response.json();
            }).then(data => {
                return data as boolean;
            }).catch(err => {
                console.log('Error :-S in user', err);
            });
    }
    // if user login, get his data from steam
    // and render wait component
    componentDidMount() {
        const props = this.props;

        this.userIsAuthPromise().then(data => {
            if(data === true) {
                props.getUserInfo();
                // props.showModal('Please wait getting data from server', false);
            } else if(data === false) {
                this.TroubleLogin('Trouble when logining from Steam\nPlease retry login');
            } else if(data === undefined) {
                this.TroubleLogin('Trouble with connection\nPlease retry login');
            } else { 
                this.LoginOrLogout = <Login />;
                this.forceUpdate();
            }
        }).catch(err => {
            console.log('Error :-S in layout-componentDidMount', err);            
        });
    }
    // when data is gotten, render his user name
    // and logout component
    componentWillReceiveProps(nextProps: UserProps) {
        if (nextProps.user.getServerData != this.props.user.getServerData
                && nextProps.user.getServerData == true) {
            if(nextProps.user.userInfo != null) {
                this.LoginOrLogout = <Logout userName={nextProps.user.userInfo.personaname} 
                    logoutHandler={ this.props.deleteUserInfo } 
                />;
                // this.props.closeModal();
            } else {
                this.TroubleLogin('Trouble when getting data from Steam\nPlease retry login');
            }
        }
    }

    public render() {
        return <div className='container-fluid'>
            <div className='row contant-container'>
                <div className='row col-sm-3 container-navmenu-chat'>
                    <div className='conteiner-navmenu col-sm-12 navmenu-col-sm-12'>
                        <NavMenu LoginOrLogout={ this.LoginOrLogout }/>
                    </div>
                    <div className='col-sm-12 container-chat'>
                        {/* { React.createElement(Chat) } */}
                            <div id='react-chat' style={{height: '100%', width: '100%'}}>loading... </div>
                        {/* </div> */}
                    </div>
                </div>
                <div className='col-sm-9 container-content'>
                    { this.props.children }
                </div>
            </div>
        </div>;
    }
    private TroubleLogin(str: string) {
        this.props.deleteUserInfo();
        this.props.showModal(str, true);
        
        this.LoginOrLogout = <Login />;
    }
}

function mapStateToProps (state: any) {
    return {
        user:       state.user      as UserState.UserState,
        routing:    state.routing   as typeof routerReducer,
    } as IStateProps;
}

function mapDispatchToProps(dispatch: any) {
    return {
        getUserInfo:        () => dispatch(UserState.actionCreators.getUserInfo()),
        deleteUserInfo:     () => dispatch(UserState.actionCreators.deleteUserInfo()),
        closeModal:         () => dispatch(ModalState.actionCreators.closeModal()),
        showModal:          (text: string, canClose: boolean) => dispatch(ModalState.actionCreators.showModal(text, canClose)),
    } as IDispatchProps;
};

export default connect(
//(state: ApplicationState) => state.user,     // Selects which state properties are merged into the component's props
//UserState.actionCreators                     // Selects which action creators are merged into the component's props
    mapStateToProps,
    mapDispatchToProps
)(Layout) as typeof Layout;