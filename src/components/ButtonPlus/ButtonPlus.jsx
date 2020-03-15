import React, { Component } from 'react';

// Material UI style
import AddIcon from '@material-ui/icons/Add';

//  Style bootstrap
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Default style
import './ButtonPlus.scss';

class ButtonPlus extends Component {

    state = { 
        show: false
    }

    handleClose = () => {
        this.setState({ 
            show: false 
        });
    }

    handleShow = () => {
        this.setState({ 
            show: true 
        });
    }

    render() {
        return (
            <div className="button-plus">
                <button className="add-btn" onClick={this.handleShow}>
                    <AddIcon className="plus-icon" />
                </button>


                <Modal 
                    show={this.state.show} 
                    onHide={this.handleClose} 
                    animation={true}
                    centered
                >
 
                    <Modal.Header closeButton className="header-modal">
                        <Modal.Title>Create new project</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="body-modal">
                        <Form>
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Col sm="12">
                                    <Form.Control
                                        className="project-input"
                                        type="text" 
                                        placeholder="Start typig name you project..." 
                                    />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Create
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ButtonPlus;