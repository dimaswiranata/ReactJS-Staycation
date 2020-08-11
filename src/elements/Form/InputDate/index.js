import React, { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";

import { DateRange } from "react-date-range";

import "./index.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import formatDate from "utils/formatDate";
import iconCalendar from "assets/images/icons/icon-calendar.svg";

// useEffect mewakili componentDidMount, componentDidUpdate and componentWillUnmount

export default function Date(props) {
  const { value, placeholder, name } = props;
  const [isShowed, setIsShowed] = useState(false);

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name: name,
      },
    };
    props.onChange(target);
  };

  useEffect(() => {
    // function dibawah digunakan ketika mengklik diluar Date
    // maka menutup kalendernya
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // membuang event yang telah digunakan
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  // inisialisasi useRef
  // useRef itu mengetahui apakah komponen tsb digunakan atau tidak sepertinya yaaa..
  const refDate = useRef(null);

  // function dibawah digunakan ketika mengklik diluar Date
  // maka menutup kalendernya
  const handleClickOutside = (event) => {
    // Jika refDate tidak terpasang di Dom
    if (refDate && !refDate.current.contains(event.target)) {
      // maka menutup kalender
      setIsShowed(false);
    }
  };

  // function check intinya mah untuk ketika start date sama 
  // end date diklik maka otomatis menutup kalendernya
  // dan menampilkan hasilnya 
  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  // display data  value start date dan end date
  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
    value.endDate ? " - " + formatDate(value.endDate) : ""
  }`;

  return (
    <div
      ref={refDate}
      className={["input-date mb-3", props.outerClassName].join(" ")}
    >
      <div className="input-group">
        <div className="input-group-prepend bg-gray-900">
          <span className="input-group-text">
            <img src={iconCalendar} alt="icon calendar" />
          </span>
        </div>
        <input
          readOnly // readOnly supaya tidak bisa diketik manual
          type="text"
          className="form-control"
          value={displayDate}
          placeholder={placeholder}
          onClick={() => setIsShowed(!isShowed)}
        />

        {isShowed && (
          <div className="date-range-wrapper">
            <DateRange
              editableDateInputs={true}
              // onChange perubahan value dari data yang diambil
              onChange={datePickerChange}
              moveRangeOnFirstSelection={false}
              // function check intinya mah untuk ketika start date sama 
              // end date diklik maka otomatis menutup kalendernya
              // dan menampilkan hasilnya 
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

Date.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
