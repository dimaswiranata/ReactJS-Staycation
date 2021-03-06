import React from "react";
import Fade from "react-reveal/Fade";

import { InputText } from "elements/Form";

function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;
  console.log(ItemDetails);
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        {/* row */}
        <div className="row justify-content-center align-items-center">

          {/* col */}
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              
              {/* card */}
              <div className="card">

                {/* image */}
                <figure className="img-wrapper" style={{ height: 270 }}>
                  <img
                    className="img-cover"
                    src={`${process.env.REACT_APP_HOST}/${ItemDetails.imageId[0].imageUrl}`}
                    alt={ItemDetails.title}
                  />
                </figure>
                {/* ------------ */}

                {/* row */}
                <div className="row align-items-center">

                  {/* col */}
                  <div className="col">
                    <div className="meta-wrapper">

                      {/* h5 name */}
                      <h5>{ItemDetails.title}</h5>

                      {/* span city & country */}
                      <span className="text-gray-500">
                        {ItemDetails.city}, {ItemDetails.country}
                      </span>

                    </div>
                  </div>
                  {/* ------------ */}

                  {/* col */} {/* auto <=> mengambil width col secara auto */}
                  <div className="col-auto">

                    {/* span price */}
                    <span>
                      ${+checkout.duration * ItemDetails.price} USD
                      <span className="text-gray-500"> per </span>
                      {checkout.duration} {ItemDetails.unit}
                      {+checkout.duration > 1 ? "s" : ""}
                    </span>

                  </div>
                  {/* ------------ */}

                </div>
                {/* ------------ */}

              </div>
              {/* ------------ */}

            </Fade>
          </div>
          {/* ------------ */}


          {/* col */}
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>

              {/* InputText firstName */}
              {/* htmlFor untuk jika diklik maka focus ke InputText */}
              <label htmlFor="firstName">First Name</label>
              <InputText
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={props.onChange}
              />

              {/* InputText lastName */}
              <label htmlFor="lastName">Last Name</label>
              <InputText
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={props.onChange}
              />

              {/* InputText email */}
              <label htmlFor="email">Email Address</label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={props.onChange}
              />

              {/* InputText phone number */}
              <label htmlFor="phone">Phone Number</label>
              <InputText
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
        {/* ------------ */}
      </div>
    </Fade>
  );
}

export default BookingInformation
