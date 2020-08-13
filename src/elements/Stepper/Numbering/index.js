import React from "react";

import Fade from "react-reveal/Fade";

import propTypes, { object } from "prop-types";

import "./index.scss";

export default function Numbering({ style, className, data, current }) {

  // KeysOfData berisi semua keys dari object data
  const KeysOfData = Object.keys(data);

  return (
    <Fade>
      <ol className={["stepper", className].join(" ")} style={style}>
        {KeysOfData.map((list, index) => {
          // list merupakan KeysOfData yang berurutan
          // membuat var isActiove yang berisi list yang diterima 
          // sama dengan nilai curret yang diterima maka
          // var isActive berisi "active" yang merupakan className
          let isActive = list === current ? "active" : "";

          // kondisi dimana index list pada posisi terakhir maka isActive null
          // return null / tidak dirender
          if (index + 1 === KeysOfData.length) {
            isActive = "";
            return null;
          }

          return (
            <li key={`list-${index}`} className={[isActive].join(" ")}>
              {index + 1}
            </li>
          );
        })}
      </ol>
    </Fade>
  );
}

Numbering.propTypes = {
  className: propTypes.string,
  data: propTypes.object,
  current: propTypes.string,
};
