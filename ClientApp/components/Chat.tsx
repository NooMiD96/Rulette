import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import Message from "./Message";
import * as ChatState from '../store/Chat';
import * as UserState from '../store/User';

interface IStateProps {
    user: UserState.UserState,
    chat: ChatState.ChatState
}

type ChatState =
    IStateProps
    //ChatState.ChatState                   // ... state we've requested from the Redux store
    & typeof ChatState.actionCreators      // ... plus action creators we've requested
    & RouteComponentProps<{}>;              // ... plus incoming routing parameters


class Chat extends React.Component<ChatState, {}> {
    componentDidMount() {
        //get preload messages from server
        this.props.subscribeToMessages();
        //enable chat
        this.props.showTrigger();
        //scroll
        this.props.autoScrollTrigger();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    scrollToBottom = () => {
        if(this.props.chat.is_autoscroll) {
            const node = ReactDOM.findDOMNode(this.refs.chat_messages);
            node.scrollTop = node.scrollHeight;
            
        }
    }
    messagesEnd: any;

    KeyHandler = (key: React.KeyboardEvent<HTMLInputElement>) => {
        if(key.key == 'Enter') {
            if(key.altKey || key.ctrlKey || key.shiftKey || key.metaKey) return;
            const elem = document.getElementById('inputMessage') as HTMLInputElement;
            if(elem.value.trim() == '') {
                return;
            }
            const props = this.props;
            const userInfo = props.user.userInfo!;
            this.props.sendMessage(userInfo.steamid, userInfo.personaname, elem.value.trim());
            elem.value = "";
        }
    }
    public render() {
        const props = this.props;
        const chat = props.chat;
        if(!chat.show) return null;

        const userInfo = props.user.userInfo;
        let userName = "anon";
        let disabledAttribut;
        let disabledClassName = '';
        if(userInfo) {
            userName = userInfo.personaname;
        } else {
            disabledAttribut    = true;
            disabledClassName   = ' disabled';
        }

        let inputHTML = <input type="text" className={"form-control input-chat" + disabledClassName} id="inputMessage" 
            placeholder="Ваше сообщение..." maxLength={50} onKeyDown={this.KeyHandler} disabled={disabledAttribut}/>;

        let templMessages = null;
        if(chat.messages) templMessages = chat.messages.map(
                (message, index) => {
                // ({ steamId: steamId, userName: userName, message: message, date: date }, index) => {
                return <Message message={message} key={index} />
                // return <Message message={{steamId: steamId, userName:userName, message:message, date:date }} key={index} />
            }
        );

        return <div className="chat-container">
            <div className="chat-messages" onScroll={this.ScrollHandler} ref='chat_messages'>
                {templMessages}
            </div>
            <div className='input-field'>
                <div className="input-group">
                    <div className="input-group-addon input-chat-addon">{userName + ":"}</div>
                    { inputHTML }
                </div>
            </div>
        </div>;
    }
    //React.UIEvent<HTMLDivElement>
    ScrollHandler = (event: any) => {
        var div = event.target;
        if(this.props.chat.is_autoscroll) {
            // div.offsetHeight + div.scrollTop <= div.scrollHeight
            var height = (div.scrollTop + div.offsetHeight + 40) - div.scrollHeight;
            if(height < 0){
                this.props.autoScrollTrigger();
            }
        } else {
            var height = (div.scrollTop + div.offsetHeight + 40) - div.scrollHeight;
            if(height > 0){
                this.props.autoScrollTrigger();
            }
        }
    }
}

function mapStateToProps (state: any) {
    return {
        user:   state.user  as UserState.UserState,
        chat:   state.chat  as ChatState.ChatState,
    } as IStateProps;
}

export default connect(
    //(state: ApplicationState) => state.chat, 
    mapStateToProps,
    ChatState.actionCreators
 )(Chat) as typeof Chat;