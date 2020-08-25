import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";

import Header from "parts/Header";
import Button from "elements/Button";
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "elements/Stepper";

import ItemDetails from "json/itemDetails.json";

import BookingInformation from "parts/Checkout/BookingInformation";
import Payment from "parts/Checkout/Payment";
import Completed from "parts/Checkout/Completed";

class Checkout extends Component {

  //state local / payload data API
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  // onChange untuk menerima event
  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        // name berasal dari state yang telah didefinisi sebelumnya
        // name akan didefinisikan di InputText pada BookingInformation
        // Completed and Payment
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    // Memaksa halaman scroll paling atas
    window.scroll(0, 0);
    document.title = "Staycation | Checkout";
  }

  render() {
    //biar ga perlu this.state.data
    const { data } = this.state;

    // data redux checkout
    const { checkout } = this.props;

    // page yang akan dikeluarkan apabila checkout undefined
    if (!checkout)
      return (
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ height: "100vh" }}
          >
            <div className="col-3">
              Pilih kamar dulu
              <div>
                <Button
                  className="btn mt-5"
                  type="button"
                  onClick={() => this.props.history.goBack()}
                  isLight
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      );

    // Object/Array untuk Stepper
    const steps = {
      // key 1 => bookingInformation
      bookingInformation: {

        // untuk component Meta/index.js
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        // -------------- //

        // untuk MainContent/index.js
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
        // -------------- //

      },
      // key 2 => payment
      payment: {

        // untuk component Meta/index.js
        title: "Payment",
        description: "Kindly follow the instructions below",
        // -------------- //

        // untuk MainContent/index.js
        content: (
          <Payment
            data={data}
            ItemDetails={ItemDetails}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
        // -------------- //

      },
      // key 3 => completed
      completed: {

        // untuk component Meta/index.js
        title: "Yay! Completed",
        description: null,
        // -------------- //

        // untuk MainContent/index.js
        content: <Completed />,
        // -------------- //

      },
    };

    return (
      <>
       <Header isCentered/> 

       <Stepper steps={steps} initialStep="bookingInformation">
          {/* Stepper mempunyai props children 4 parameter function untuk parent */}
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={CurrentStep}
                style={{ marginBottom: 50 }}
              />

              <Meta data={steps} current={CurrentStep} />

              {/* MainContent untuk merender content pada CurrentStep */}
              <MainContent data={steps} current={CurrentStep} />

              {/* CurrentStep berisi key dari Object/Array steps 
              yang sedang aktif pada */}

              {CurrentStep === "bookingInformation" && (
                <Controller>

                  {/* mengondisikan button di hide ketika form 
                  belum diisi sebelumnya */}
                  {data.firstName !== "" &&
                    data.lastName !== "" &&
                    data.email !== "" &&
                    data.phone !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                          // nextStep berasal dari function Stepper 
                          // untuk merubah index pada array steps
                          // ke key berikutnya 
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}

                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isLight
                    href={`/properties/${ItemDetails._id}`}
                  >
                    Cancel
                  </Button>
                  
                </Controller>
              )}

              {CurrentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankName !== "" &&
                    data.bankHolder !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="button"
                    isBlock
                    isLight
                    onClick={prevStep}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href=""
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout
});

export default connect(mapStateToProps, null)(Checkout)