import React, {Component} from 'react';

import games from '../../../data/games.json'

import TimelineGenre from '../Genre';
import TimelineGames from '../Games';

class TimelineGenres extends Component {
    get listOfGenres () {
        const listOfGenres = [];
        const listOfGames = Object.values(games);

        listOfGames.forEach(games => {
                for (const game of games) {
                    const {genre} = game;

                    if (listOfGenres.includes(genre)) continue;
                    listOfGenres.push(genre);
                }
            });

        listOfGenres.sort((a, b) => a.localeCompare(b));

        return listOfGenres;
    }
    get genres () {
        return this.listOfGenres.map((genreName, index) => {
            return ([
                <TimelineGenre key={genreName} genreName={genreName} />,
                <TimelineGames key={index} genreName={genreName} />
            ])
        });
    }

    render () {
        return this.genres;
    }
}

export default TimelineGenres;
