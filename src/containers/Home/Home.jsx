import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { ReactComponent as FirstBlockImage } from '../../assets/main-page-top.svg';
import { ReactComponent as CardImage } from '../../assets/card-icon.svg';
import { ReactComponent as NewsImage } from '../../assets/news-icon.svg';
import './Home.scss';

const PROJECT_BTN_CONTENT = "Post a project";
const POSITION_BTN_CONTENT = "Find a position";

const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/positions');
  };
  return (
      <section className="home-page__container">
          <div className="main-container">
              <div className="home-page__first-block">
                  <div className="home-page__first-block--content">
                      <div className="home-page__first-block--title">
                          LET’S BUILD BRIDGES,<br></br>
                          <span>TOGETHER</span>
                      </div>
                      <div className="home-page__first-block--text">
                          Link is social platform where you can learn new skill by helping social projects.
                      </div>
                      <div className="home-page__first-block--buttons">
                          <Button className="home-page__button">{PROJECT_BTN_CONTENT}</Button>
                          <Button onClick={handleClick} className="home-page__button">{POSITION_BTN_CONTENT}</Button>
                      </div>
                  </div>
                  <div className="home-page__first-block--image">
                      <FirstBlockImage/>
                  </div>
              </div>
          </div>
          <div className="home-page__learn-block">
              <div className="home-page__learn-block--container main-container">
                  <div className="home-page__learn-block--title">
                      LEARN THE SKILLS<br></br>
                      THAT CAN HELP YOU GROW
                  </div>
                  <div className="home-page__learn-block--cards">
                      <div className="home-page__learn-block--card--big">
                          <CardImage/>
                          <div className="home-page__learn-block--card--big--title">
                              DESIGN
                          </div>
                          <div className="home-page__learn-block--card--big--sub-title">
                              over 600 courses
                          </div>
                      </div>
                      <div className="home-page__learn-block--card">
                          <div className="home-page__learn-block--card--image">
                              <CardImage/>
                          </div>
                          <div className="home-page__learn-block--card--content">
                              <div className="home-page__learn-block--card--title">
                                  Java
                              </div>
                              <div className="home-page__learn-block--card--sub-title">
                                  over 40 courses
                              </div>
                          </div>
                      </div>
                      <div className="home-page__learn-block--card">
                          <div className="home-page__learn-block--card--image">
                              <CardImage/>
                          </div>
                          <div className="home-page__learn-block--card--content">
                              <div className="home-page__learn-block--card--title">
                                  Android
                              </div>
                              <div className="home-page__learn-block--card--sub-title">
                                  over 80 courses
                              </div>
                          </div>
                      </div>
                      <div className="home-page__learn-block--card">
                          <div className="home-page__learn-block--card--image">
                              <CardImage/>
                          </div>
                          <div className="home-page__learn-block--card--content">
                              <div className="home-page__learn-block--card--title">
                                  C++
                              </div>
                              <div className="home-page__learn-block--card--sub-title">
                                  over 600 courses
                              </div>
                          </div>
                      </div>
                      <div className="home-page__learn-block--card">
                          <div className="home-page__learn-block--card--image">
                              <CardImage/>
                          </div>
                          <div className="home-page__learn-block--card--content">
                              <div className="home-page__learn-block--card--title">
                                  iOS
                              </div>
                              <div className="home-page__learn-block--card--sub-title">
                                  over 60 courses
                              </div>
                          </div>
                      </div>
                  </div>
                  <Button className="home-page__learn-block--button">
                      LEARN NEW EXPERTISE
                  </Button>
              </div>
          </div>
          <div className="main-container">
              <div className="home-page__news-block">
                  <div className="home-page__news-block--content">
                      <div className="home-page__first-block--container">
                          <div className="home-page__first-block--title">
                              NOEL LEARN NEW SKILL<br></br>
                              ON FAMILY PROJECT
                          </div>
                          <div className="home-page__first-block--text">
                              «I love beautiful movies. If a film is eye-candy with<br></br>
                              carefully designed decorations, masterful camerawork,<br></br>
                              lighting, and architectural frames, I can forgive<br></br>
                              anything»
                          </div>
                          <div className="home-page__news-block--underwriter">
                              <div className="home-page__news-block--underwriter--title">
                                  Noel Debow
                              </div>
                              <div className="home-page__news-block--underwriter--skill">
                                  iOS Developer
                              </div>
                          </div>
                      </div>
                      <div className="home-page__first-block--image">
                          <NewsImage/>
                      </div>
                  </div>
              </div>
          </div>
          <div className="home-page__join-block">
              <div className="home-page__join-block--container main-container">
                  <div className="home-page__join-block--title">
                      Wanna join?
                  </div>
                  <div className="home-page__join-block--buttons">
                      <Button className="home-page__join-block--button">{PROJECT_BTN_CONTENT}</Button>
                      <Button onClick={handleClick} className="home-page__join-block--button">{POSITION_BTN_CONTENT}</Button>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Home;
