import React, { useState } from 'react';
import { uniq } from 'lodash';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom'
import  clsx from 'clsx';
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
  const [selectedDomain, setSelectedDomain] = useState([]);
  const [selectedStages, setSelectedStages] = useState([]);
  const handleFilters = () => {
    toggleFilters(!isFilterBarOpened);
  };

  const handleSkillsChange = (value) => {
    setSelectedSkills(value);
  };
  const handleStageChange = (value) => {
    setSelectedStages(value);
  };
  const handleDomainChange = (value) => {
    setSelectedDomain(value);
  };

  // <--MOCK DATA-->
  const prepareDataForDropdown = data => ({ value: uuid(), label: data });
  const prepareDataForFilter = data => data.label;
  const skillList = uniq(positions.flatMap(position => position.skills))
    .map(prepareDataForDropdown);
  const domainList = ['Events', 'Charity', 'Education'].map(prepareDataForDropdown)
  const stageList = ['Discovery', 'Teaming', 'MVP', 'Development', 'Completed'].map(prepareDataForDropdown);
  // <--MOCK DATA END-->
  const selectedSkillLabels = selectedSkills.length ? selectedSkills.map(prepareDataForFilter) : null;
  const selectedStageLabels = selectedStages.length ? selectedStages.map(prepareDataForFilter) : null;
  const selectedDomainLabels = selectedDomain.length ? selectedDomain.map(prepareDataForFilter) : null;

  const filterPositions = (positions, selectedSkills, selectedDomain, selectedStages) => {
    let result = positions;
    if (selectedStages) {
      result = result.filter(({ project }) => selectedStages.includes(project.stage));
    }
    if (selectedDomainLabels) {
      result = result.filter(({ project }) => selectedDomain.includes(project.domain));
    }
    if (selectedSkills) {
      result = result.filter(({ skills }) => skills.some(skill => selectedSkills.includes(skill)));
    }
    return result;
  };

  const filteredPositions = filterPositions(positions, selectedSkillLabels, selectedDomainLabels, selectedStageLabels);

  const renderCard = (position) => (
    <Link
      key={uuid()}
      to={`/positions/${position.id}`}
    >
      <PositionCard position={position}/>
    </Link>
  );

  const SearchField = (
    <div className="position-search_main-search-container">
      <Icon icon={searchOutlined} className="position-search--icon"/>
      <input className="position-search_main-search" type="text" placeholder="Search for a job / skill / practice"/>
      <Button className="position-search_search-button">Search</Button>
    </div>
  );

  const btnClasses = clsx(
    'position-search_main-results-container--button',
    {'position-search_main-results-container--button--opened': isFilterBarOpened })
  ;
  const FilterBtns = (
    <div className="position-search_main-results-container--buttons">
      <Button className="position-search_main-results-container--button">Newest first <Icon icon={arrowDownDrop} className="position-search_main-results-container--icon"/></Button>
      <Button className={btnClasses} onClick={handleFilters}><Icon icon={filterIcon} className="position-search_main-results-container--icon--filter"/> Filters</Button>
    </div>
  );

  const DateFilter = (
    <div className="position-search_filters--data">
      <div className="filter-item">
        <div className="filter-item_title">Start date (from)</div>
        <input className="position-search_filters--data--input" type="text" placeholder="DD Month YYYY"/>
        <Icon icon={calendarClock} className="position-search_filters--data--icon"/>
      </div>
    </div>
  );

  return (
    <div className="position-search">
      <div className="position-search_main-container main-container">
        { SearchField }
        <div className="position-search_horizontal-divider">
        </div>
        <div className="position-search_main-results-container">
          <div className="position-search_main-results-container--title">
            Positions
          </div>
          { FilterBtns }
        </div>
        <div className={isFilterBarOpened ? 'position-search_filters-block' : 'position-search_filters-block--none'}>
          <Filter
            title={"Position skills"}
            filterList={skillList}
            onFilterChange={handleSkillsChange}
            selectedValues={selectedSkills}
          />
          <Filter
            title={"Project domain"}
            filterList={domainList}
            onFilterChange={handleDomainChange}
            selectedValues={selectedDomain}
          />
          <Filter
            title={"Project stage"}
            filterList={stageList}
            onFilterChange={handleStageChange}
            selectedValues={selectedStages}
          />
          { DateFilter }
        </div>
        <div className="position-search_filtered-results">
          { filteredPositions.map(renderCard) }
        </div>
      </div>
    </div>
  );
};

export default PositionSearch;
