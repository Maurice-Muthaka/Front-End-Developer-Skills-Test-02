import React from "react";
import mango from "../../../images/mango.png";
import { FaArrowLeft, FaArrowRight,  FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import TeamCard from "../../common/teamCard";
import { StartupCardShort } from "../../common/startupCard";

function SingleIncubatorScreen() {

  return (
    <div className="pb-5" id="home">

        <div className="container pt-5">
          <div className="row single-top d-flex align-items-center">
            <div className="col-md-4 d-flex">
              
              <a className="back d-flex align-items-center justify-content-center" href="/incubators"><FaArrowLeft /></a>

              <div className="head d-flex align-items-center justify-content-center">
                  <a href="/">
                      <img width="40" className="mango-logo" src={mango} alt="mango logo" />
                  </a>
                  <h3>Mangoswap</h3>
              </div>
            </div>

            <div className="col-md-3">
                <div className="d-flex justify-content-between">
                    <span>Funds raised</span>
                    <span className="text-xs">50% complete</span>
                </div>

                <span>$200,000/$400,000</span>
              </div>

            <div className="col-md-3 d-flex">
              <div className="hr-one-line ml-3" style={{ width: '50%', height: 10, borderRadius: 25.5 }}></div>
              <div className="hr-two-line" style={{ width: '100%', height: 10, borderRadius: 25.5 }}></div>
            </div>

            <div className="col-md-2">
              <a className="link-fund" href="/learn" role="button">View Startups</a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mt-3 p-0 pr-3">
              <div className="pl-4 pt-3 pb-5" style={{backgroundColor: '#fff'}}>
                <h4>Founded 17th May, 2015</h4>
                <hr />
                <span className="small">Website</span>
                <p className="text-blue">mangoswap.com <FaTwitter /> <FaLinkedinIn /> <FaFacebookF /></p>

                <span className="small">Location</span>
                <p>San Francisco, California</p>

                <span className="small">Team Size</span>
                <p>100-500 people</p>

                <hr />

                <h4 className="mb-4 pt-2">Meet the team</h4>

                <TeamCard
                name="Edmund Kitan"
                role="Founder" />

                <TeamCard
                name="Olarenwaju Cesar"
                role="Co-Founder" />

                <TeamCard
                name="Uzo Amanda"
                role="Head of Growth" />

                <TeamCard
                name="Donald Duke"
                role="Head of Product" />

                <hr />

                <h4 className="mb-3">Tags</h4>

                <a href="/" className="btn btn-outline-dark btn-sm mr-2">Crypto</a>
                <a href="/" className="btn btn-outline-dark btn-sm mr-2">Exchanges</a>
                <a href="/" className="btn btn-outline-dark btn-sm mr-2">NFT</a>
                <a href="/" className="btn btn-outline-dark btn-sm">Blockchain</a>

              </div>
            </div>

            <div className="col-md-8 mt-3">
              <div className="row mb-3">
                <div className="col-md-12" style={{backgroundColor: '#fff'}}>
                  <div className="card-body">
                    <h4>About startup</h4>
                    <p className="pb-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                    <hr />
                    <h4>Vision</h4>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation v</p>
                  </div>
                </div>

                <div className="col-md-12 mt-3" style={{backgroundColor: '#fff'}}>
                  <div className="card-body">

                    <div className="d-flex justify-content-between mt-3">
                      <h4 className="mb-4">Related startup</h4>
                      <div>
                        <FaArrowLeft className="mr-5" />
                        <FaArrowRight />
                      </div>
                    </div>
                    <div className="row">

                      <div className="col-md-6">
                          <StartupCardShort />
                      </div>

                      <div className="col-md-6">
                          <StartupCardShort />
                      </div>

                    </div>
                  </div>
                </div>

              </div>
              
            </div>
          </div>
        </div>
    
    </div>
  );
}

export default SingleIncubatorScreen;