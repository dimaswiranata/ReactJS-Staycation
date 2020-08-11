import React, { useState } from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function Number(props) {
  const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } = props;

  // Currenccy = prefix
  // suffix = satuan (night)
  // value = nilai

  const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  const onChange = (e) => {
    let value = String(e.target.value); //menyimpan ke value

    // Jika menemukan suffix dan prefix maka dihapus menggunakan function replace
    if (prefix) value = value.replace(prefix);
    if (suffix) value = value.replace(suffix);

    //RegExp cek value cuma 0 s/d 9 (regexr.com)
    const patternNumeric = new RegExp("[0-9]*");

    // boolean hasil test patternNumeric value
    const isNumeric = patternNumeric.test(value);

    // +value untuk mengubah string "32" menjadi 32
    if (isNumeric && +value <= max && +value >= min) {
      // running function dari props parent yaitu update state
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
      setInputValue(`${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`);
    }
  };

  // function untuk mengurangi value(event)
  const minus = () => {
    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  // function untuk menambah value(event)
  const plus = () => {
    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };
  return (
    // menggabungkan props outerClassName dibatasi dengan space
    <div className={["input-number mb-3", props.outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text minus" onClick={minus}>
            -
          </span>
        </div>
        <input
          min={min}
          max={max}
          name={name}
          pattern="[0-9]*"
          className="form-control"
          placeholder={placeholder ? placeholder : "0"}
          value={String(InputValue)}
          onChange={onChange}
        />
        <div className="input-group-append">
          <span className="input-group-text plus" onClick={plus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
}

Number.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

Number.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  isSuffixPlural: propTypes.bool,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
