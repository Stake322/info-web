import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Container, Segment } from 'semantic-ui-react'

class Topbar extends Component {
    state = { activeItem: '123' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <Container >
                <Segment textAlign='center' color="purple" inverted compact style={{position: "sticky", top:"0%", width: "100%%", marginLeft: "auto", marginRight: "auto"}}>
                    <Menu size='small' color="purple" inverted>
                        <Menu.Item
                            name='ОБО МНЕ'
                            active={activeItem === '1'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='НАВЫКИ'
                            active={activeItem === '2'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='ИНТЕРЕСНЫЕ ПРОЕКТЫ'
                            active={activeItem === '3'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='ИТОГИ'
                            active={activeItem === '4'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>
                </Segment >
            </Container >
        )
    }
}

export default Topbar;