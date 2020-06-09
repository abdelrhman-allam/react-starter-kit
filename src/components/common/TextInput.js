import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  id,
  name,
  label,
  onChange,
  placeholder,
  value,
  error,
}) => {
  let warpperClass = "form-group";
  if (error.length > 0) {
    warpperClass += " has-error";
  }
  return (
    <div className={warpperClass}>
      <label htmlFor={id}>{label}</label>
      <div className="field">
        <input
          id={id}
          type="text"
          name={name}
          className="form-control"
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  error: "",
};

export default TextInput;
