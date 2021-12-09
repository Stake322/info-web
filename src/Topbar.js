/* eslint-disable no-undef */
import React, { Component } from 'react'
import { Header, Menu } from 'semantic-ui-react'
import { Container, Segment } from 'semantic-ui-react'
import Project1 from './projects/project1.js';
import Project2 from './projects/project2.js';
import Change from './changeLanguage.js';


class Topbar extends Component {


    state = { activeItem: 'Проект 1' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    gitClick() {
        window.open("https://github.com/Stake322")
    }
    sylarClick() {
        window.open("https://github.com/Stake322")
    }

    segmentStyle = {
        position: "sticky",
        top: "0%",
        width: "100%",
        display: 'flex',
        justifyContent: "center",
        alingItems: 'center',
        backgroundImage: 'url(https://wallpaperaccess.com/full/3705495.jpg)'
    }

    contantStyle = {
        position: "absolute",
        left: "90%",
        top: "0%",
    }
    buttonStyle = {
        position: "absolute",
        left: "0%",
        top: "20%",
    }
    render() {
        const { activeItem } = this.state

        return (
            <div>

                <Segment textAlign='center' color="purple" style={this.segmentStyle}>
                    <Segment size="mini" floated='left' color="purple" inverted style={this.buttonStyle}>
                        <Change />
                    </Segment>
                    <Menu size='large' color="purple" inverted >
                        <Menu.Item
                            name='Проект 1'
                            active={activeItem === '1'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Проект 2'
                            active={activeItem === '2'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='SylarboostWebSite'
                            active={activeItem === '3'}
                            onClick={this.sylarClick}
                            icon="like"
                        />
                        <Menu.Item
                            name='GIT'
                            active={activeItem === '4'}
                            onClick={this.gitClick}
                            icon="github"
                        />
                    </Menu>

                    <Segment size="mini" floated='right' color="purple" inverted style={this.contantStyle}>
                        <p> <strong>Контакты:</strong> <br />
                            Телефон: +79276295729 <br />
                            Email: stake164rus@mail.ru</p>
                    </Segment>

                </Segment >

                {activeItem === "Проект 1" ?
                    <Project1 />
                    :
                    <Project2 />}

            </div>
        )
    }
}

export default Topbar;