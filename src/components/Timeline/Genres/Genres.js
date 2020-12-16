import React from 'react';

import games from '../../../data/games';

import TimelineGenre from '../Genre';
import TimelineGames from '../Games';

const listOfGenres = games => {
    const listOfGenres = [];
    const listOfGames = Object.values(games);

    listOfGames.forEach(games => {
        for (const game of games) {
            const {genre} = game;

            if (!listOfGenres.includes(genre)) {
                listOfGenres.push(genre);
            }
        }
    });

    listOfGenres.sort((a, b) => a.localeCompare(b));

    return listOfGenres;
}

const genres = games => {
    return listOfGenres(games).map((genreName, index) => {
        return ([
            <TimelineGenre key={genreName} genreName={genreName}/>,
            <TimelineGames key={index} genreName={genreName}/>
        ])
    });
}

const TimelineGenres = () => genres(games);

export default TimelineGenres;
