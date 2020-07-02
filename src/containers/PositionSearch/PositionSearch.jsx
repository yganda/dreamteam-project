import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Filter } from '../../components/Filter';
import { PositionCard } from '../../components/Cards/PositionCard/PositionCard';
import { positions } from '../../mocks/positions';
import './PositionSearch.scss';
import { Icon } from "@iconify/react";
import searchOutlined from '@iconify/icons-mdi/search';
import arrowDownDrop from '@iconify/icons-mdi/arrow-down-drop';
import filterIcon from '@iconify/icons-mdi/filter-list';
import calendarClock from '@iconify/icons-mdi/calendar-clock';


const PositionSearch = (props) => {

  const [isFilterBarOpened, toggleFilters] = useState(false);

  const position = {
    title: 'iOS Developer',
    project: 'Dream Team project name',
    customer: 'Startup Jam Inc.',
    skills: ['Swift', 'Xcode'],
    startDate: 'July 6, 2020',
    duration: 'Duration',
    applicants: 'number'
  };

  const skillList = [
    {
      "id": "1e9fb162-a000-41b1-80ee-d65acdd2a82e",
      "name": "iOS"
    },
    {
      "id": "854f9a55-9edf-4f42-8e14-c8c863259e80",
      "name": "JavaScript"
    },
    {
      "id": "f62659b7-ac9f-4f3b-9e18-83dd5906771d",
      "name": "Android"
    },
    {
      "id": "fe85fe71-6b51-4b9a-ba9c-6ed9b67f4bb7",
      "name": "Java"
    }
  ];

  const handleFilters = () => {
    toggleFilters(!isFilterBarOpened);
  };

  return (
      <div className="position-search">
        <div className="position-search_main-container main-container">
          <div className="position-search_main-search-container">
            <Icon icon={searchOutlined} className="position-search--icon"/>
            <input className="position-search_main-search" type="text" placeholder="Search for a job / skill / practice"/>
            <Button className="position-search_search-button">Search</Button>
          </div>
          <div className="position-search_horizontal-divider">
          </div>
          <div className="position-search_main-results-container">
            <div className="position-search_main-results-container--title">
              Positions
            </div>
            <div className="position-search_main-results-container--buttons">
              <Button className="position-search_main-results-container--button">Newest first <Icon icon={arrowDownDrop} className="position-search_main-results-container--icon"/></Button>
              <Button className={isFilterBarOpened ? 'position-search_main-results-container--button--opened' : 'position-search_main-results-container--button'} onClick={handleFilters}><Icon icon={filterIcon} className="position-search_main-results-container--icon--filter"/> Filters</Button>
            </div>
          </div>
          <div className={isFilterBarOpened ? 'position-search_filters-block' : 'position-search_filters-block--none'}>
            <Filter title={"Position skills"} filterList={skillList}/>
            <Filter title={"Project domain"} filterList={skillList}/>
            <Filter title={"Project stage"} filterList={skillList}/>
            <div className="position-search_filters--data">
              <div className="filter-item">
                <div className="filter-item_title">Start date (from)</div>
                <input className="position-search_filters--data--input" type="text" placeholder="DD Month YYYY"/>
                <Icon icon={calendarClock} className="position-search_filters--data--icon"/>
              </div>
            </div>
          </div>
          <div className="position-search_filtered-results">
            {positions.map((position, index) => {
              return <PositionCard key={index} position={position}/>
            })}
          </div>
        </div>
      </div>
  );
};

export default PositionSearch;
