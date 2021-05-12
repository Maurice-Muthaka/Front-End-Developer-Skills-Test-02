import React from "react";

export function Footer() {

  return (
    <section
      id="footer-section"
      className="container-fluid mt-5"
    >
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h4>La RDC au Kenya</h4>
            <div className="d-flex">
              <div className="hr-red-line" style={{ width: 118 }}></div>
              <div className="hr-yellow-line" style={{ width: 147 }}></div>
              <div className="hr-blue-line" style={{ width: 149 }}></div>
            </div>

          </div>
          <div className="col-md-6 mt-5">
            <h4>Liens utiles</h4>
            <div className="d-flex">
              <div className="hr-red-line" style={{ width: 118 }}></div>
              <div className="hr-yellow-line" style={{ width: 147 }}></div>
              <div className="hr-blue-line" style={{ width: 149 }}></div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
