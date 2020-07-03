import React, { useState } from 'react';
import { uniq } from 'lodash';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button';
import { Filter } from '../../components/Filter';
import { PositionCard } from '../../components/Cards/PositionCard/PositionCard';
import { positions } from '../../mocks/positions';
import { Icon } from "@iconify/react";
import searchOutlined from '@iconify/icons-mdi/search';
import arrowDownDrop from '@iconify/icons-mdi/arrow-down-drop';
import filterIcon from '@iconify/icons-mdi/filter-list';
import calendarClock from '@iconify/icons-mdi/calendar-clock';
import './PositionSearch.scss';

const PositionSearch = () => {
  const [isFilterBarOpened, toggleFilters] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const handleFilters = () => {
    toggleFilters(!isFilterBarOpened);
  };

  const handleChange = (value) => {
    //const values = value && value.map(item => item.label);
    setSelectedSkills(value);
  };

  const skillList = uniq(positions.flatMap(position => position.skills))
    .map(skill => ({ value: uuid(), label: skill }));
  const selectedSkillLabels = selectedSkills.length ? selectedSkills.map(skill => skill.label) : null;
  const filteredPositions = selectedSkillLabels ? positions
    .filter(({ skills }) => skills.some(skill => selectedSkillLabels.includes(skill))) : positions;

  const renderCard = (position) => (
    <Link
      key={uuid()}
      to={`/positions/${position.id}`}
    >
      <PositionCard position={position}/>
    </Link>
  );

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
          <Filter
            title={"Position skills"}
            filterList={skillList}
            onFilterChange={handleChange}
            selectedSkills={selectedSkills}
          />
          <Filter
            title={"Project domain"}
            filterList={skillList}
            onFilterChange={() => {}}
          />
          <Filter
            title={"Project stage"}
            filterList={skillList}
            onFilterChange={() => {}}
          />
          <div className="position-search_filters--data">
            <div className="filter-item">
              <div className="filter-item_title">Start date (from)</div>
              <input className="position-search_filters--data--input" type="text" placeholder="DD Month YYYY"/>
              <Icon icon={calendarClock} className="position-search_filters--data--icon"/>
            </div>
          </div>
        </div>
        <div className="position-search_filtered-results">
          { filteredPositions.map(renderCard) }
        </div>
      </div>
    </div>
  );
};

export default PositionSearch;
