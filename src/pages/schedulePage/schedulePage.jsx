import React from 'react';
import {TOURNAMENTS_LIST} from '../../constants/tournamentsList';
import Footer from '../../components/footer';
import ScheduleItem from '../../components/scheduleItem';
import './schedulePage.scss'

const SchedulePage = () => {
    const tournaments = TOURNAMENTS_LIST;

    return (
        <div className="dv-schedule-page">
            <div className="dv-container">
                <h2 className="dv-block-title">Расписание</h2>
                { tournaments.map(tournament => (
                    <div className="dv-schedule-page__tournament" key={tournament.name}>
                        <h3 className="dv-schedule-page__tournament-name">{tournament.name}</h3>
                        { tournament.events.map(event => (
                            <div className="dv-schedule-page__day" key={event.day}>
                                <div className="d-flex justify-content-center">
                                    <hr />
                                    <div className="dv-schedule-page__data">{event.day}</div>
                                    <hr />
                                </div>
                                { event.matchs.map( match => ( 
                                    <ScheduleItem key={match.time} {...match} />
                                ))}

                            </div>
                        ))}
                    </div>    
                ))}
            </div> 
            <Footer /> 
        </div>
    )
}

export default SchedulePage;