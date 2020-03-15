import React, { Component } from 'react';

// Style bootstrap
import Container from 'react-bootstrap/Container';

//Components
import ButtonPlus from '../../../components/ButtonPlus/ButtonPlus';
import ProjectList from '../../../components/ProjectList/ProjectList';

class Main extends Component {
    render() {
        return (
            <div>
                <Container>
                    <ProjectList />
                    <ButtonPlus />
                </Container>
            </div>
        )
    }
}

export default Main;