import React from "react";
import PropTypes from "prop-types";

const SelectInput = ({
  id,
  name,
  title,
  value,
  onChange,
  options,
  defaultOption,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{title}</label>
      <div className="field">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
        >
          <option value="">{defaultOption}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string,
  title: PropTypes.string,
  defaultOption: PropTypes.string,
};

SelectInput.defaultProps = {
  error: "",
};

export default SelectInput;
