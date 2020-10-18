import React, {Component} from 'react';

import games from '../../../data/games.json'

import TimelineGenre from '../Genre';
import TimelineGames from '../Games';

// Component
class TimelineGenres extends Component {
    get listOfGenres () {
        const listOfGenres = [];

        Object
            .values(games)
            .forEach(games => {
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
                <TimelineGenre genreName={genreName} />,
                <TimelineGames genreName={genreName} />
            ])
        });
    }

    render () {
        return this.genres;
    }
}

export default TimelineGenres;
