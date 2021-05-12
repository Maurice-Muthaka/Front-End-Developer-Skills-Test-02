import React from "react";

export default function SingleCourseCard(props) {
  return (
    <div className="card course-card mb-3">
        <div className="card-body">
            <div className="d-flex justify-content-end">

                <div className="head d-flex align-items-center pl-5 pr-5 p-1" style={{backgroundColor: '#00AA4F', borderRadius: 10}}>
                    <span className="small text-white">Completed</span>
                </div>
            </div>

            <div className="mt-2">
                <h3 className="text-white text-center">Week 1 - {props.data.title}</h3>
            </div>

            <div className="row d-flex justify-content-center">
                <div className="col-md-4 d-flex ml-2 mt-1 mb-1">
                <div className="hr-one-line2 ml-3" style={{ width: props.data.progress, height: 3, borderRadius: 50 }}></div>
                <div className="hr-two-line" style={{ width: '100%', height: 3, borderRadius: 50 }}></div>
                </div>
            </div>

            <p className="text-white text-center small">{props.data.progress} Completed</p>

        </div>
    </div>
  );
}