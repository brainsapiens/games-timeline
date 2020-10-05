import React from 'react';
// import styled from 'styled-components';
import data from '../../data/games.json'

class GamesBadges extends React.Component {
    render () {
        return (
            <div className='game-badge'>
                {data.games[0].title}
            </div>
        )
    }
}

export default GamesBadges;
