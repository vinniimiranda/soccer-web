import React from 'react'
import { ReactComponent as LaunchIcon } from '../../assets/icons/launch.svg'
import { ReactComponent as AstronautIcon } from '../../assets/icons/astronaut.svg'
import { ReactComponent as RocketIcon } from '../../assets/icons/rocket.svg'

import { Container, NavList, NavListItem } from './styles'


export default function Nav ({ history }) {

    function handleItemClick (path) {

        history.push(path);
    }
    return (
        <Container>
            <NavList>
                <NavListItem onClick={() => handleItemClick('/')} selected={history.location.pathname === "/"} >
                    <LaunchIcon className="icon" />
            Launches
          </NavListItem>
                <NavListItem selected={history.location.pathname === "/crew"} onClick={() => handleItemClick('crew')}>
                    <AstronautIcon className="icon" />
            Crew
            </NavListItem>
                <NavListItem selected={history.location.pathname === "/rockets"}>
                    <RocketIcon className="icon" />
            Rockets
          </NavListItem>
            </NavList>
        </Container>
    )
}