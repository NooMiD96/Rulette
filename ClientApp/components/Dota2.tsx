import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    componentDidMount() {
        var hostUri = "http://localhost:60217/";
        if(document.baseURI) {
            hostUri = document.baseURI;
        }
        var socketUri = hostUri.replace('http', 'ws') + "b4w_react";
        this.socket = new WebSocket(socketUri);

        this.socket.onclose = function(event) {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            } else {
                console.log('Обрыв соединения'); // например, "убит" процесс сервера
            }
            console.log('Код: ' + event.code + ' причина: ' + event.reason);
        };
        this.socket.onerror = function(error) {
            console.log("Ошибка:");
            console.log(error);
        };
    }
    public render() {
        return <div>
            <button onClick={() => this.buttonHandler(0)}>Add</button>
            <button onClick={() => this.buttonHandler(1)}>Phase1</button>
            <button onClick={() => this.buttonHandler(2)}>Phase2</button>
            <button onClick={() => this.buttonHandler(3)}>Restart</button>
            <h1>Hello, dota2!</h1>
            <div style={{ border: 'red solid 5px', width:'810px', height:'610px' }}>
                <iframe src="B4W/MySecondProject.html" width='800px' height='600px' style={{ border: 'none' }}></iframe>
            </div>
        </div>;
    }
    buttonHandler = (switchDigit:number) => {
        switch(switchDigit){
            case 0:
                this.socket.send(JSON.stringify({state: 'add_user',
                name: this.playerNumber, steamId: this.playerNumber}));
                break;
            case 1:
                this.socket.send(JSON.stringify({state: 'start_phase1'}));
                break;
            case 2:
                this.socket.send(JSON.stringify({state: 'start_phase2'}));
                break;
            case 3:
                this.playerNumber = 0;
                this.socket.send(JSON.stringify({state: 'restart'}));
                break;
        }
    }
    socket: WebSocket;
    playerNumber = 0;
}
