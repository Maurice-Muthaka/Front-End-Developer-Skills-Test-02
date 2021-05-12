import React from "react";
import StartupCard from "../../common/startupCard";


function IncubatorScreen() {
    const code = "<Code/>";

  return (
    <div className="pb-5" id="home">

        <div className="intro d-flex align-items-center">
            <div className="container d-flex">
                <div className="container"></div>
                <div style={{width: 900}} className="container d-flex flex-column align-items-center text-center">
                    <h1 className="cripto-title text-left">Invest directly into minority innovations.</h1>
                    <a class="link-inc" href="/learn" role="button">View Startups</a>
                </div>
            </div>
        </div>
        

        <div class="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-3">
                    <h3 className="text-white">Featured Startups</h3>
                    <p className="text-white">Invest in the next billion dollar company today</p>
                </div>

                <div className="col-md-3">
                    <StartupCard />
                </div>

                <div className="col-md-3">
                    <StartupCard />
                </div>

                <div className="col-md-3">
                    <StartupCard />
                </div>
            </div>
        </div>

        <div class="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card d-flex align-items-center justify-content-center card-mg c-1">
                        <a href="/" className="support">Advice a startup</a>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card d-flex align-items-center justify-content-center card-mg c-2">
                        <a href="/" className="support">Join Minority Ventures Cohort</a>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card d-flex align-items-center justify-content-center card-mg c-3">
                        <a href="/" className="support">Help {code}</a>
                    </div>
                </div>
            </div>
        </div>


        <div class="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-3">
                    <h3 className="text-white">Upcoming Startups</h3>
                    <p className="text-white">These visionary companies and disruptors are on their journey to change the world.</p>
                </div>

                <div className="col-md-3">
                    <StartupCard />
                </div>

                <div className="col-md-3">
                    <StartupCard />
                </div>

                <div className="col-md-3">
                    <StartupCard />
                </div>
            </div>
        </div>

        <div class="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-3">
                    <StartupCard />
                </div>

                <div className="col-md-3">
                    <StartupCard />
                </div>

                <div className="col-md-3">
                    <StartupCard />
                </div>

                <div className="col-md-3">
                    <StartupCard />
                </div>
            </div>
        </div>

        <div class="container mt-5">
            <div className="row">
                <div className="col-md-3">
                    <StartupCard />
                </div>

                <div className="col-md-3">
                    <StartupCard />
                </div>

                <div className="col-md-3">
                    <StartupCard />
                </div>

                <div className="col-md-3">
                    <StartupCard />
                </div>
            </div>
        </div>
    
    </div>
  );
}

export default IncubatorScreen;