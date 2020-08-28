import React from "react";
import Fade from "react-reveal/Fade";

import Breadcrumb from "elements/Breadcrumb";

function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        {/* row */}
        <div className="row align-items-center">

          {/* col */}
          <div className="col">
            <Breadcrumb data={breadcrumb} />
          </div>
          {/* ------ */}

          {/* col */}
          <div className="col-auto text-center">
            <h1 className="h2">{data.title}</h1>
            <span className="text-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
          {/* ------ */}

          {/* col */}
          <div className="col"></div>
          {/* ------ */}

        </div>
        {/* ------ */}
      </Fade>
    </section>
  );
}

export default PageDetailTitle;