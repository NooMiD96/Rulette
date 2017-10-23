import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as UserState from '../store/User';
import * as LkState from '../store/Lk';
import * as ModalState from '../store/Modal';

interface IStateProps {
    user:   UserState.UserState,
    lk:     LkState.LkState,
}
interface IDispatchProps {
    getUserInfo:    () => any,
    closeModal:     () => any,
    showModal:      (text: string, canClose: boolean) => any,
    getLkInfo:      (userId: string) => any,
    setOwner:       (owner: boolean) => any,
}

type UserProps =
    //UserState.UserState                 // ... state we've requested from the Redux store
    //& typeof UserState.actionCreators   // ... plus action creators we've requested
    //& typeof ModalState.actionCreators
    IStateProps
    & IDispatchProps
    & RouteComponentProps<{userId: string | null}>;          // ... plus incoming routing parameters   

class Lk extends React.Component<UserProps, {}> {
    componentDidMount(){
        const props = this.props;
        let userId  = props.match.params.userId;
        let owner   = false;
        if(!userId) {
            userId = props.user.userInfo!.steamid;
            owner = true;
        }
        props.setOwner(owner);
        props.getLkInfo(userId);
        // this.getUserInfo().then(data => {
        //     if(data){
        //         //doing something
        //         return;
        //     } else if(data === null){
        //         this.props.showModal('Some trouble when getting data from server\nSorry, try again later', true);
        //     } else if(data === undefined){
        //         this.props.showModal('Some trouble with connection with server\nSorry, try again later', true);
        //     }
            
        //     //  <Redirect to={'/'} />
        //     this.props.location.pathname = '/';
        //     // location.href = '/';
        // });

    }
    public render() {
        return <div>
            <h1>Hello from lk!</h1>
        </div>;
    }
}

function mapStateToProps (state: any) {
    return {
        user:   state.user  as UserState.UserState,
        lk:     state.lk    as LkState.LkState,
    } as IStateProps;
}

function mapDispatchToProps(dispatch: any) {
    return {
        getUserInfo:    () => dispatch(UserState.actionCreators.getUserInfo()),
        closeModal:     () => dispatch(ModalState.actionCreators.closeModal()),
        showModal:      (text: string, canClose: boolean) => dispatch(ModalState.actionCreators.showModal(text, canClose)),
        getLkInfo:      (userId: string) => dispatch(LkState.actionCreators.getLkInfo(userId)),
        setOwner:       (owner: boolean) => dispatch(LkState.actionCreators.setOwner(owner)),
    } as IDispatchProps;
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lk) as typeof Lk;