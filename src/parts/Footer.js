import React from 'react'
import IconText from 'parts/IconText'
import Button from 'elements/Button'

function Footer() {
  return (
    <footer>
      <div className="container">
        {/* row */}
        <div className="row">

          {/* col */}
          <div className="col">
            <IconText/>
            <p className="brand-tagline">
              We kaboom your holiday instantly and memorable
            </p>
          </div>
          {/* ------- */}

          {/* col */}
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beginner</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payment">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          {/* ------- */}

          {/* col */}
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          {/* ------- */}

          {/* col */}
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:support@staycation.id">
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+6281278042894">
                  +62 812 - 7804 - 2894
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Cikoneng, Jawa Barat</span>
              </li>
            </ul>
          </div>
          {/* ------- */}

        </div>
        {/* ------- */}

        {/* row */}
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2020 • All rights reserved • Staycation
          </div>
        </div>
        {/* ------- */}
      </div>
    </footer>
  )
}

export default Footer
