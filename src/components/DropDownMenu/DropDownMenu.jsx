import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ArrowDropDown, ArrowDropUp} from '@material-ui/icons';
import './DropDownMenu.scss';

const DropDownMenu = (
  {
    className,
    listClassName,
    opened,
    options,
    onOpenMenuClick,
  },
) => {
  const classes = clsx('dropdown-menu', className);
  const listClasses = clsx('dropdown-menu__list', listClassName);
  const MenuToggle = !opened ?
    <ArrowDropDown onClick={ onOpenMenuClick } /> :
    <ArrowDropUp onClick={ onOpenMenuClick } />;
  const Menu = (
    <ul className={ listClasses }>
      {
        options.map((option, ind) => (
          <li className="dropdown-menu__list-item" key={ ind }>{ option }</li>
        ))
      }
    </ul>
  );
  return (
    <div className={ classes }>
      <div className="dropdown-menu__toggle">{ MenuToggle }</div>
      { opened ? Menu : null }
    </div>
  );
};

DropDownMenu.propTypes = {
  className: PropTypes.string,
  listClassName: PropTypes.string,
  opened: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.node).isRequired,
  onOpenMenuClick: PropTypes.func.isRequired,
};

export default DropDownMenu;
