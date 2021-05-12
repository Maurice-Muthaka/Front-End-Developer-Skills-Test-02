import React from "react";
import mango from "../../images/mango.png";

export default function StartupCard() {
  return (
    <div className="card startup-card">
        <div className="card-body">
            <div className="head d-flex">
                <a href="/">
                    <img width="30" className="mango-logo" src={mango} alt="mango logo" />
                </a>
                <h3>Mangoswap</h3>
            </div>

            <p>The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.</p>

            <div className="d-flex justify-content-between">
                <h4>Fund raise</h4>
                <p className="small">50% complete</p>
            </div>

            <h5>$200,000/$400,000</h5>

            <div className="d-flex ml-2">
              <div className="hr-one-line ml-3" style={{ width: '50%', height: 10, borderRadius: 25.5 }}></div>
              <div className="hr-two-line" style={{ width: '100%', height: 10, borderRadius: 25.5 }}></div>
            </div>

            <div className="d-flex justify-content-between">
              <a href="/" className="fund">Fund Startup</a>
              <a href="/" className="learn-m">Learn more</a>
            </div>

        </div>
    </div>
  );
}

export function StartupCardShort() {
  return (
    <div className="card startup-card">
        <div className="card-body">
            <div className="head d-flex">
                <a href="/">
                    <img width="30" className="mango-logo" src={mango} alt="mango logo" />
                </a>
                <h3>Mangoswap</h3>
            </div>

            <div className="d-flex justify-content-between">
                <h4>Fund raise</h4>
                <p className="small">50% complete</p>
            </div>

            <h5>$200,000/$400,000</h5>

            <div className="d-flex ml-2">
              <div className="hr-one-line ml-3" style={{ width: '50%', height: 10, borderRadius: 25.5 }}></div>
              <div className="hr-two-line" style={{ width: '100%', height: 10, borderRadius: 25.5 }}></div>
            </div>

        </div>
    </div>
  );
}