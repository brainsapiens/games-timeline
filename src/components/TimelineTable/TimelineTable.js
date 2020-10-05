import React from 'react';
import styled from 'styled-components';
import timeline from '../../data/timeline.json'
import games from '../../data/games.json'

const Table = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    display: inline-grid;
    grid-template-columns: var(--genre-width) repeat(calc(var(--number-of-years) * 4), 1fr);
    /*border-top: 1px solid #eee;
    border-left: 1px solid #eee;*/
    
    > div {
        padding: var(--cell-padding);
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        
        &[data-annual-quarter]:not([data-annual-quarter='Q4']) {
            border-right-style: dashed;
        }
        &[data-annual-quarter]::before {
            display: block;
            margin-bottom: var(--cell-padding);
            color: #ccc;
            content: attr(data-annual-quarter);
            font-size: 9px;
            text-align: right;
        }
    }
`;

const Captions = styled.div`
    position: sticky;
    z-index: 101;
    top: 0;
    left: 0;
    padding: var(--cell-padding);
    background-color: #fff;
    font-weight: var(--font-weight-extra);
    text-align: center;
    
    > span {
        position: absolute;
        color: #ccc;
        font-size: 9px;
        
        &:nth-of-type(1) {
            top: 4px;
            right: 6px;
        }
        &:nth-of-type(2) {
            bottom: 4px;
            left: 6px;
        }
    }
`;

//TOOD: Automate :nth-child's
const Year = styled.div`
    position: sticky;
    z-index: 100;
    top: 0;
    background-color: #fff;
    font-weight: var(--font-weight-extra);
    text-align: center;

    > span {
        position: sticky;
        left: calc(var(--genre-width) + var(--cell-padding));
    }
    
    &:nth-of-type(2) {
        grid-column-start: 2;
        grid-column-end: 6;
    }
    &:nth-of-type(3) {
        grid-column-start: 6;
        grid-column-end: 10;
    }
    &:nth-of-type(4) {
        grid-column-start: 10;
        grid-column-end: 14;
    }
    &:nth-of-type(5) {
        grid-column-start: 14;
        grid-column-end: 18;
    }
    &:nth-of-type(6) {
        grid-column-start: 18;
        grid-column-end: 22;
    }
    &:nth-of-type(7) {
        grid-column-start: 22;
        grid-column-end: 26;
    }
    &:nth-of-type(8) {
        grid-column-start: 26;
        grid-column-end: 30;
    }
    &:nth-of-type(9) {
        grid-column-start: 30;
        grid-column-end: 34;
    }
    &:nth-of-type(10) {
        grid-column-start: 34;
        grid-column-end: 38;
    }
    &:nth-of-type(11) {
        grid-column-start: 38;
        grid-column-end: 42;
    }
    &:nth-of-type(12) {
        grid-column-start: 42;
        grid-column-end: 46;
    }
    &:nth-of-type(13) {
        grid-column-start: 46;
        grid-column-end: 50;
    }
`;

//TODO: Inherit from Year
const Genre = styled.div`
    position: sticky;
    z-index: 100;
    left: 0;
    background-color: #fff;
    font-weight: var(--font-weight-extra);
    text-align: center;

    > span {
        position: sticky;
        top: calc(var(--year-height) + var(--cell-padding));
    }
`;

class TimelineTable extends React.Component {
    get captions () {
        return (
            <Captions>
                <span key='year'>year</span>
                <span key='genre'>genre</span>
            </Captions>
        )
    }

    get years () {
        return timeline.years.map((year, index) => {
            return (
                <Year key={index}>{year}</Year>
            )
        });
    }

    get genres () {
        return timeline.genres.map((genre, index) => {
            return (
                <>
                    <Genre key={index}>{genre}</Genre>

                    <div data-annual-quarter="Q1"/>
                    <div data-annual-quarter="Q2"/>
                    <div data-annual-quarter="Q3"/>
                    <div data-annual-quarter="Q4"/>

                    <div data-annual-quarter="Q1"/>
                    <div data-annual-quarter="Q2"/>
                    <div data-annual-quarter="Q3"/>
                    <div data-annual-quarter="Q4"/>

                    <div data-annual-quarter="Q1"/>
                    <div data-annual-quarter="Q2"/>
                    <div data-annual-quarter="Q3"/>
                    <div data-annual-quarter="Q4"/>

                    <div data-annual-quarter="Q1"/>
                    <div data-annual-quarter="Q2"/>
                    <div data-annual-quarter="Q3"/>
                    <div data-annual-quarter="Q4"/>

                    <div data-annual-quarter="Q1"/>
                    <div data-annual-quarter="Q2"/>
                    <div data-annual-quarter="Q3"/>
                    <div data-annual-quarter="Q4"/>

                    <div data-annual-quarter="Q1"/>
                    <div data-annual-quarter="Q2"/>
                    <div data-annual-quarter="Q3"/>
                    <div data-annual-quarter="Q4"/>

                    <div data-annual-quarter="Q1">
                        <div className="games-badges">
                            <ul className="games-badges__list">
                                <li className="games-badges__item">
                                    <article className="game-badge">
                                        <h6 className="game-badge__title">
                                            <a href="https://en.wikipedia.org/wiki/Diablo_(video_game)">Diablo</a>
                                        </h6>
                                        <div className="game-badge__date">January&nbsp;3</div>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div data-annual-quarter="Q2"/>
                    <div data-annual-quarter="Q3"/>
                    <div data-annual-quarter="Q4">
                        <div className="games-badges">
                            <ul className="games-badges__list">
                                <li className="games-badges__item">
                                    <article className="game-badge">
                                        <h6 className="game-badge__title">
                                            <a href="https://en.wikipedia.org/wiki/Fallout_(video_game)">Fallout</a>
                                        </h6>
                                        <div className="game-badge__date">October&nbsp;10</div>
                                    </article>
                                </li>
                                <li className="games-badges__item">
                                    <article className="game-badge game-badge--expansion">
                                        <h6 className="game-badge__title">
                                            <a href="https://en.wikipedia.org/wiki/Diablo:_Hellfire">Diablo: Hellfire</a>
                                        </h6>
                                        <div className="game-badge__date">November&nbsp;25</div>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div data-annual-quarter="Q1"/>
                    <div data-annual-quarter="Q2"/>
                    <div data-annual-quarter="Q3"/>
                    <div data-annual-quarter="Q4">
                        <div className="games-badges">
                            <ul className="games-badges__list">
                                <li className="games-badges__item">
                                    <article className="game-badge">
                                        <h6 className="game-badge__title">
                                            <a href="https://en.wikipedia.org/wiki/Fallout_2">Fallout&nbsp;2</a>
                                        </h6>
                                        <div className="game-badge__date">October&nbsp;29</div>
                                    </article>
                                </li>
                                <li className="games-badges__item">
                                    <article className="game-badge">
                                        <h6 className="game-badge__title">
                                            <a href="https://en.wikipedia.org/wiki/Baldur%27s_Gate">Baldur&rsquo;s Gate</a>
                                        </h6>
                                        <div className="game-badge__date">December&nbsp;21</div>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div data-annual-quarter="Q1"/>
                    <div data-annual-quarter="Q2">
                        <div className="games-badges">
                            <ul className="games-badges__list">
                                <li className="games-badges__item">
                                    <article className="game-badge game-badge--expansion">
                                        <h6 className="game-badge__title">
                                            <a href="https://en.wikipedia.org/wiki/Baldur%27s_Gate:_Tales_of_the_Sword_Coast">Baldur&rsquo;s Gate:<br/> Tales of&nbsp;the Sword Coast</a>
                                        </h6>
                                        <div className="game-badge__date">April&nbsp;30</div>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div data-annual-quarter="Q3"/>
                    <div data-annual-quarter="Q4">
                        <div className="games-badges">
                            <ul className="games-badges__list">
                                <li className="games-badges__item">
                                    <article className="game-badge">
                                        <h6 className="game-badge__title">
                                            <a href="https://en.wikipedia.org/wiki/Planescape:_Torment">Planescape:<br/> Torment</a>
                                        </h6>
                                        <div className="game-badge__date">December&nbsp;12</div>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div data-annual-quarter="Q1"/>
                    <div data-annual-quarter="Q2">
                        <div className="games-badges">
                            <ul className="games-badges__list">
                                <li className="games-badges__item">
                                    <article className="game-badge">
                                        <h6 className="game-badge__title">
                                            <a href="https://en.wikipedia.org/wiki/Diablo_II">Diablo&nbsp;II</a>
                                        </h6>
                                        <div className="game-badge__date">June&nbsp;29</div>
                                    </article>
                                </li>
                                <li className="games-badges__item">
                                    <article className="game-badge">
                                        <h6 className="game-badge__title">
                                            <a href="https://en.wikipedia.org/wiki/Icewind_Dale">Icewind Dale</a>
                                        </h6>
                                        <div className="game-badge__date">June&nbsp;29</div>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div data-annual-quarter="Q3">
                        <div className="games-badges">
                            <ul className="games-badges__list">
                                <li className="games-badges__item">
                                    <article className="game-badge">
                                        <h6 className="game-badge__title">
                                            <a href="https://en.wikipedia.org/wiki/Baldur%27s_Gate_II:_Shadows_of_Amn">Baldur&rsquo;s Gate II:<br/> Shadows of&nbsp;Amn</a>
                                        </h6>
                                        <div className="game-badge__date">September&nbsp;21</div>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div data-annual-quarter="Q4"/>

                    <div data-annual-quarter="Q1">
                        <div className="games-badges">
                            <ul className="games-badges__list">
                                <li className="games-badges__item">
                                    <article className="game-badge game-badge--expansion">
                                        <h6 className="game-badge__title">
                                            <a href="https://en.wikipedia.org/wiki/Icewind_Dale:_Heart_of_Winter">Icewind Dale:<br/> Heart of&nbsp;Winter</a>
                                        </h6>
                                        <div className="game-badge__date">February&nbsp;21</div>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div data-annual-quarter="Q2">
                        <div className="games-badges">
                            <ul className="games-badges__list">
                                <li className="games-badges__item">
                                    <article className="game-badge game-badge--expansion">
                                        <h6 className="game-badge__title">
                                            <a href="https://en.wikipedia.org/wiki/Baldur%27s_Gate_II:_Throne_of_Bhaal">Baldur&rsquo;s Gate II:<br/> Throne of&nbsp;Bhaal</a>
                                        </h6>
                                        <div className="game-badge__date">June&nbsp;22</div>
                                    </article>
                                </li>
                                <li className="games-badges__item">
                                    <article className="game-badge game-badge--expansion">
                                        <h6 className="game-badge__title">
                                            <a href="https://en.wikipedia.org/wiki/Diablo_II:_Lord_of_Destruction">Diablo II: Lord of&nbsp;Destruction</a>
                                        </h6>
                                        <div className="game-badge__date">June&nbsp;27</div>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div data-annual-quarter="Q3"/>
                    <div data-annual-quarter="Q4"/>

                    <div data-annual-quarter="Q1"/>
                    <div data-annual-quarter="Q2"/>
                    <div data-annual-quarter="Q3">
                        <div className="games-badges">
                            <ul className="games-badges__list">
                                <li className="games-badges__item">
                                    <article className="game-badge">
                                        <h6 className="game-badge__title">
                                            <a href="https://en.wikipedia.org/wiki/Icewind_Dale_II">Icewind Dale&nbsp;II</a>
                                        </h6>
                                        <div className="game-badge__date">August&nbsp;27</div>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div data-annual-quarter="Q4"/>
                </>
           )
        });
    }

    render () {
        return (
            <Table>
                {this.captions}
                {this.years}
                {this.genres}
            </Table>
        )
    }
}

export default TimelineTable;
