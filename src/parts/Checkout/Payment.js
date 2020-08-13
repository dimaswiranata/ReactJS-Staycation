import React from "react";
import Fade from "react-reveal/Fade";

import { InputText, InputFile } from "elements/Form";

import logoBca from "assets/images/logo-bca.jpg";
import logoMandiri from "assets/images/logo-mandiri.jpg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>

        {/* row */}
        <div className="row justify-content-center align-items-center">

          {/* col */}
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran:</p>
              <p>Tax: {tax}%</p>
              <p>Sub total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>

              {/* row */}
              <div className="row mt-4">

                {/* col */}
                <div className="col-3 text-right">
                  <img src={logoBca} alt="bank central asia" width="60" />
                </div>
                {/* ------------ */}

                {/* col */}
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2208 1996</dd>
                    <dd>Wiranata's Company</dd>
                  </dl>
                </div>
                {/* ------------ */}

              </div>
              {/* ------------ */}

              {/* row */}
              <div className="row">

                {/* col */}
                <div className="col-3 text-right">
                  <img src={logoMandiri} alt="mandiri" width="60" />
                </div>
                {/* ------------ */}

                {/* col */}
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208 1996</dd>
                    <dd>Wiranata's Company</dd>
                  </dl>
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

              {/* InputText proofPayment */}
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />

              {/* InputText bank Name */}
              <label htmlFor="bankName">Asal Bank</label>
              <InputText
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={props.onChange}
              />

              {/* InputText bank Holder */}
              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={props.onChange}
              />

            </Fade>
          </div>
          {/* ------------ */}

        </div>
        {/* ------------ */}
      </div>
    </Fade>
  );
}
