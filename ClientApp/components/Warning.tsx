import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as ModalState from '../store/Modal';

type ModalProps =
    ModalState.ModalState                   // ... state we've requested from the Redux store
    & typeof ModalState.actionCreators      // ... plus action creators we've requested
    & RouteComponentProps<{}>;              // ... plus incoming routing parameters

class Warning extends React.Component<ModalProps, {}> {
    public render() {
        let toRender = null;
        if(this.props.show) {
            toRender = this.toRender();
            setTimeout(this.AddIn, 500);
        }
        return toRender;
    }

    private clearDOM = () => {
        const elemBackground    = document.getElementById('pop-up-container');
        const elemModal         = document.getElementById('pop-up-warning');
        if(elemBackground && elemModal){
            elemBackground.className = elemBackground.className.split(' in')[0];
            setTimeout(() => elemBackground.setAttribute('style', 'display: none'), 500);
            setTimeout(() => elemModal.className = elemModal.className.split(' in')[0], 700);
        }
    }
    private AddIn = () => {
        const elemBackground = document.getElementById('pop-up-container');
        const elemModal = document.getElementById('pop-up-warning');
        if(elemBackground && elemModal){
            elemBackground.setAttribute('style', 'display: block');
            elemBackground.className += ' in';
            setTimeout(() => {elemModal.className += ' in';}, 200);
        }
    }
    
    private button = () => {
        const button = this.props.canClose;
        let nameOfClass = 'btn btn-primary pop-up-button ',
            onButtonDo = undefined;
        nameOfClass += button == true ? 'active' : 'disabled';
        if(button == true) {
            onButtonDo = () => { 
                this.clearDOM();
                setTimeout(this.props.closeModal, 500);
            }
        }
        return <button className={nameOfClass} onClick={onButtonDo}>
            Продолжить
        </button>
    }
//    onClick={this.props.canClose ? this.props.closeModal : undefined}  
    private toRender = () => { return <div className="modal-backdrop fade" id='pop-up-container' >
            <div className={'modal fade'} tabIndex={-1} id="pop-up-warning"
                    role="dialog" aria-hidden="true" style={{display:'block'}} >
                <div className='modal-dialog modal-sm'>
                    <div className='modal-content'>
                        <div className="modal-header">
                            <h2>Warning</h2>
                        </div>
                        <div className="modal-body">
                            {this.props.modalText}
                        </div>
                        <div className="modal-footer">
                            {this.button()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default connect(
   (state: ApplicationState) => state.modal, 
   ModalState.actionCreators
)(Warning) as typeof Warning;