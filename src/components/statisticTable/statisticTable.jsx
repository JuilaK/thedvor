import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import './statisticTable.scss';

const StatisticTable = ({ divisionName, teams }) => {
    return (
        <div className="dv-statistic-table">
            <h3 className="dv-statistic-table__title">{divisionName}</h3>
            <Table>
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-left">Команда</th>
                        <th>И</th>
                        <th className="text-nowrap">В-Н-П</th>
                        <th className="text-nowrap">РГ</th>
                        <th>О</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        teams.map( team => (
                            <tr key={team.place} >
                                <td>{team.place}</td>
                                <td className="text-left">{team.teamName}</td>
                                <td>{team.gamesCount}</td>
                                <td className="text-nowrap">{team.winGamesCount}-{team.drawGamesCount}-{team.loseGamesCount}</td>
                                <td className="text-nowrap">
                                    <span>{team.r}-{team.g}</span>
                                    <sup>{(team.r - team.g)>0?"+":"-"}{Math.abs(team.r - team.g)}</sup>
                                </td>
                                <td>{team.points}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </Table>
        </div>
    )
}

export default StatisticTable;

StatisticTable.propTypes = {
    divisionName: PropTypes.string,
    teams: PropTypes.array
};