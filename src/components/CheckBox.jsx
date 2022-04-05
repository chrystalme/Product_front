import React from 'react';
import PropTypes from 'prop-types';

function CheckBox({ value, onChange }) {
  // const { checked, setChecked } = useState(false);
  return (
    <>
      <input
        type='checkbox'
        value={value}
        className='delete-checkbox'
        onChange={onChange}
      />
    </>
  );
}

CheckBox.propTypes = {
  onChanged: PropTypes.func,
  value: PropTypes.string,
};

export default CheckBox;
