import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as ChatState from '../store/Chat';

interface IProps {
    message: ChatState.Message, 
    key: number,
}

export default class Message extends React.Component<IProps, {}> {
    public render() {
        const {steamId, userName, message, date} = this.props.message;
        
        return <div className="message">
            <span style={{display:"none"}}>{steamId}</span>
            <span style={{display:"none"}}>{date.toString()}</span>
            <div className='message-content'>
                <a>{userName}: </a><span>{message}</span>
            </div>
        </div>
    }
}
