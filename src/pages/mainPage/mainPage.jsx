import React from 'react';
import Footer from '../../components/footer';
import './mainPage.scss';

const MainPage = () => {
    return (
        <div className="dv-main-page">
            <div className="dv-main-page__name">
                <h2 className="dv-main-page__subtitle">Любительская футбольная лига</h2>
                <h1 className="dv-main-page__title">The Dvor</h1>
                <p className="dv-main-page__tagline">Мы пишем НАШУ историю с ВАМИ</p>                
            </div>
            <Footer />
        </div>
    )
}

export default MainPage;