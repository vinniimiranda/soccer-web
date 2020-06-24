import React from 'react'
import { ReactComponent as TrophyIcon } from '../../assets/icons/trophy.svg'
import { ReactComponent as ClubIcon } from '../../assets/icons/club.svg'
import { ReactComponent as PlayerIcon } from '../../assets/icons/player.svg'

import { Container, NavList, NavListItem } from './styles'
import history from '../../services/history'


export default function Nav () {

    function handleItemClick (path) {

        history.push(path);
    }
    return (
        <Container>
            <NavList>
                <NavListItem onClick={() => handleItemClick('/')} selected={history.location.pathname === "/"} >
                    <TrophyIcon className="icon" />
            Ligas
          </NavListItem>
                <NavListItem selected={history.location.pathname === "/teams"} onClick={() => handleItemClick('teams')}>
                    <ClubIcon className="icon" />
            Times
            </NavListItem>
                <NavListItem selected={history.location.pathname === "/rockets"}>
                    <PlayerIcon className="icon" />
            Jogadores
          </NavListItem>
            </NavList>
        </Container>
    )
}