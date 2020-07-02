import React from 'react';
import Select from 'react-dropdown-select';
import styled from '@emotion/styled';
import './Filter.scss';

export const Filter = ({title, filterList}) => {
    const StyledItem = styled.div`
  padding: 10px;
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
    color: #fff;
  }
  .react-dropdown-select-input {
    color: #fff;
  }
`;

    return (
        <div className="filter-item">
            <div className="filter-item_title">{title}</div>
            <StyledSelect
                multi
                options={filterList}
                values={[]}
                itemRenderer={({item, methods}) => (
                    <StyledItem>
                        <div className="filter-item_item" onClick={() => {
                            console.log(item);
                            return methods.addItem(item)
                        }}>
                            <input className="filter-item_checkbox" onChange={() => methods.addItem(item)} type="checkbox"
                                   checked={methods.isSelected(item)}/> {item.name}
                        </div>
                    </StyledItem>
                )}
                onChange={(value) =>
                    console.log(`%c > onChange ${title} `, 'background: #555; color: tomato', value)
                }
            />
        </div>
    );
};
