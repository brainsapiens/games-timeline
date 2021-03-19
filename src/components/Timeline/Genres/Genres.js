import React from 'react';
import sortAlphabetically from '../../../helpers/sortAlphabetically';
import games from '../../../data/games';
import TimelineGenre from '../Genre';
import TimelineGames from '../Games';

const listOfGenres = games => (
    sortAlphabetically(Object.values(games).reduce((acc, games) => {
        for (const game of games) {
            const {genre} = game;

            if (!acc.includes(genre)) acc.push(genre);
        }
        return acc;
    }, []))
)

const genres = games => listOfGenres(games).map((genreName, index) => ([
    <TimelineGenre key={genreName} genreName={genreName}/>,
    <TimelineGames key={index} genreName={genreName}/>
]))

const TimelineGenres = () => genres(games);

export default TimelineGenres;
