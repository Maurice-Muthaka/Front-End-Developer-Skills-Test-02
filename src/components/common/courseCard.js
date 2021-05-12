import React from "react";

export default function CourseCard(props) {
  return (
    <div className="card course-card mb-3">
        <div className="card-body">
            <div className="d-flex justify-content-end">

                <div className="head d-flex align-items-center pl-2 pr-3" style={{backgroundColor: '#9CFF83', borderRadius: 6}}>
                    <span className="mr-2" style={{width: 10, height: 10, backgroundColor: 'green', borderRadius: '50%',}}></span>
                    <span className="small">Earn $30</span>
                </div>
            </div>

            <div className="mt-2">
                <h3 className="text-white">{props.title}</h3>
                <p className="text-white small">{props.description}</p>
            </div>

            <div className="d-flex justify-content-center mb-2">
                <a className="text-center learn-btn" href={'/learn/' + props.id}>Learn</a>
            </div>

            <span className="text-white small d-flex justify-content-end">8.3/10 Modules</span>

            <div className="d-flex ml-2 mt-1 mb-1">
              <div className="hr-one-line2 ml-3" style={{ width: '83%', height: 7, borderRadius: 50 }}></div>
              <div className="hr-two-line" style={{ width: '100%', height: 7, borderRadius: 50 }}></div>
            </div>

            <p className="text-white text-center small">{props.progress} Completed</p>

        </div>
    </div>
  );
}