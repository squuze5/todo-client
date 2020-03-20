import React, { Component } from 'react';

// Default style / Icon / React-modal
import './ButtonPlus.scss';
import Modal from 'react-modal';
import AddIcon from '@material-ui/icons/Add';

class ButtonPlus extends Component {

    constructor () {
        super();
        this.state = {
          showModal: false
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }
      
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }

    render() {
        return (
            <>
                <div className="add-project">
                    <button className="button-add" onClick={this.openModal}>
                        <AddIcon />
                    </button>
                    <span>Add project</span>
                </div>  

                <Modal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={false}
        >
          <p>Modal text!</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
            </>
        )
    }
}

export default ButtonPlus;