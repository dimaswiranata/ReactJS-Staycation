import React from "react";
import Fade from "react-reveal/Fade";

export default function MainContent({ data, current }) {
  //Jika data[current] ada maka  maka merender contentnya
  return <Fade>{data[current] && data[current].content}</Fade>;
}
