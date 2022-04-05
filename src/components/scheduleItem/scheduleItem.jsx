import React from 'react';
import PropTypes from 'prop-types';
import defaultLogo from '../../assets/image/logo.jpg';
import './scheduleItem.scss'

const ScheduleItem = ({ time, place, round, teamFirstName, teamSecondName, teamFirstLogo, teamSecondLogo }) => {
    const logo1Styles = {
        backgroundImage: `url(${teamFirstLogo ? teamFirstLogo : defaultLogo})`
    };

    const logo2Styles = {
        backgroundImage: `url(${teamSecondLogo ? teamSecondLogo : defaultLogo})`
    };

    return (
    <div className="dv-schedule-item">
        <div className="dv-schedule-item__time-place">{time}<br/>{place}</div>
        <div className="dv-schedule-item__teams">
            <div className="dv-schedule-item__team-logo" style={logo1Styles}></div>
            <div className="dv-schedule-item__team-name dv-schedule-item__team-name_first"><span>{teamFirstName}</span></div>
            <div className="dv-schedule-item__vs">vs</div>
            <div className="dv-schedule-item__team-name dv-schedule-item__team-name_second"><span>{teamSecondName}</span></div>
            <div className="dv-schedule-item__team-logo" style={logo2Styles}></div>
        </div>
        <div className="dv-schedule-item__round">{round}</div>

    </div>
    )
}

export default ScheduleItem;

ScheduleItem.propTypes = {
    time: PropTypes.string,
    place: PropTypes.string,
    round: PropTypes.string,
    teamFirstName: PropTypes.string,
    teamSecondName: PropTypes.string,
    teamFirstLogo: PropTypes.string,
    teamSecondLogo: PropTypes.string
};