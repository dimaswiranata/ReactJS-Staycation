import React from "react";
import Fade from "react-reveal/Fade";
import CompletedIllustration from "assets/images/completed.jpg";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>

        {/* row justify-content-center text-center */}
        <div className="row justify-content-center text-center">
          
          {/* col */}
          <div className="col-4">
            <img
              src={CompletedIllustration}
              className="img-fluid"
              alt="completed checkout apartment"
            />
            <p className="text-gray-500">
              We will inform you via email later once the transaction has been
              accepted
            </p>
          </div>
          {/* ------------ */}

        </div>
        {/* ------------ */}

      </div>
    </Fade>
  );
}