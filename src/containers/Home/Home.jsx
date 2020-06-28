import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import './Home.scss';

const HOME_PAGE_HEADER_CONTENT = "Drive your career making great things here";
const PROJECT_BTN_CONTENT = "I want to submit a project";
const POSITION_BTN_CONTENT = "I want to find a position";

const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/positions');
  };
  return (
    <section>
      <p className="home-page__header">{HOME_PAGE_HEADER_CONTENT}</p>
      <Button className="home-page__button">{PROJECT_BTN_CONTENT}</Button>
      <Button onClick={ handleClick } className="home-page__button">{POSITION_BTN_CONTENT}</Button>
    </section>
  );
};

export default Home;
