import React from 'react';
import { Row, Col } from 'reactstrap';
import Footer from '../../components/footer';
import { TOURNAMENTS_RESULTS } from '../../constants/tournamentResults';
import StatisticTable from '../../components/statisticTable';
import './statisticPage.scss';

const StatisticBlock = () => {
    const results = TOURNAMENTS_RESULTS;

    return (
        <div className="dv-statistic-page">
            <div className="dv-container">  
                <h2 className="dv-block-title">Статистика</h2>
                <Row>
                    {
                        results.map(result => (
                            <Col xl="6"  key={result.divisionName}>
                                <StatisticTable {...result} />
                            </Col>
                        ))
                    }
                </Row>
            </div>
            <Footer />  
        </div>
    )
}

export default StatisticBlock;