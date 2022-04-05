import React from 'react';
import Navigation from './components/navigation';
import MainPage from './pages/mainPage';
import SchedulePage from './pages/schedulePage';
import StatisticPage from './pages/statisticPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <>
        <Navigation />
        <Route path='/' exact component={MainPage} />
        <Route path='/schedule' component={SchedulePage} />
        <Route path='/statistic' component={StatisticPage} />
      </>  
    </Router>
  )
}

export default App;
