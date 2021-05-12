import React from "react";
import notFound from "../../images/404.svg"

export default function NotFound() {
  return (
        <div className="container pt-5">
            <div className="card pt-5 pb-5 d-flex justify-content-center align-items-center">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <img width="200" src={notFound} alt="Course not found" />
                    <h2 className="mt-5"><strong>Oops!</strong> Course not found</h2>
                    <a className="text-center link-inc" href="/learn">back to courses</a>
                </div>
            </div>
        </div>
  );
}