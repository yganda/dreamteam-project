import React from 'react';
import Select from 'react-dropdown-select';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Checkbox from '../../components/Checkbox';
import { COLORS } from '../../constants/colors';
import './Filter.scss';

export const Filter = ({ title, filterList, onFilterChange, selectedSkills }) => {
  const StyledItem = styled.div`
    padding: 0 12px;
    color: #555;
    background-color: #222B45;
    cursor: pointer;
    border: none;
    > div {
      display: flex;
      align-items: center;
    }
    input {
      margin-right: 10px;
    }
    :hover {
      background: #1E2743;
    }
    .filter-item_item .MuiFormControlLabel-label {
      font: normal 14px/24px 'Montserrat', sans-serif;      
    }
`;
  const StyledSelect = styled(Select)`
    background: #1E2743;
    border: #151A30 !important;
    color: #fff;
    height: 48px;
    width: 336px;
    .react-dropdown-select-dropdown {
      border: none;
      background: transparent;
    }
    .react-dropdown-select-clear,
    .react-dropdown-select-dropdown-handle {
      color: ${ COLORS.WHITE['FFF'] };
    }
    .react-dropdown-select-input {
      color: #fff;
      &::placeholder {
        color: ${ COLORS.GREY['#8F9BB3'] };
      }
    }
    .react-dropdown-select-option {
      color: ${ COLORS.GREY['#8F9BB3'] };
      background: none;
      border: 1px solid ${ COLORS.GREY['#8F9BB3'] };
      border-radius: 3px;
      font: normal 13px/18px 'Montserrat', sans-serif; 
    }
`;

  const itemRenderer = ({ item, methods }) => {
    const handleItemClick = () => methods.addItem(item);
    const checked = methods.isSelected(item);
    console.log(checked);
    return (
      <StyledItem key={ item.value }>
        <div className="filter-item_item" onClick={handleItemClick}>
          <Checkbox
            type="checkbox"
            checked={checked}
            label={item.label}
            onChangeCallback={ () => {} }
          />
        </div>
      </StyledItem>
    );
  };

  return (
    <div className="filter-item">
      <div className="filter-item_title">{title}</div>
      <StyledSelect
        multi
        options={filterList}
        placeholder="All"
        itemRenderer={itemRenderer}
        values={selectedSkills}
        valueField="label"
        onChange={onFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filterList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  selectedSkills: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  title: PropTypes.string.isRequired,
};
