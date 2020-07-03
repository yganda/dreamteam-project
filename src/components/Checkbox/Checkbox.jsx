import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Checkbox as MaterialCheckbox, FormControlLabel } from '@material-ui/core';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants';

const CustomizedCheckbox = withStyles({
  root: {
    color: COLORS.GREY['#B8C1D0'],
    '&$checked': {
      color: COLORS.BLUE['#3366FF'],
    },
  },
  checked: {},
})((props) => <MaterialCheckbox color="default" {...props} />);

const Checkbox = (
  {
    checked = true,
    label,
    name = 'checkbox',
    onChangeCallback,
  }
) => {
  const control = (
    <CustomizedCheckbox checked={checked} onChange={ onChangeCallback } name={name} />
  );
  return (
    <FormControlLabel
      control={ control }
      label={label}
    />
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChangeCallback: PropTypes.func.isRequired,
};

export default Checkbox;
