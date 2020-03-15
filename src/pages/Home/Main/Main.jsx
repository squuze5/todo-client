import React, { Component } from 'react';
// Style bootstrap
import Container from 'react-bootstrap/Container';
//Components
import ButtonPlus from '../../../components/ButtonPlus/ButtonPlus';

class Main extends Component {
    render() {
        return (
            <div>
                <Container>
                    main screen
                    <ButtonPlus />
                </Container>
            </div>
        )
    }
}

export default Main;