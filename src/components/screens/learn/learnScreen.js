import React, { useEffect } from "react";
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../../common/courseCard";
import { fetchCourses } from "../../../actions/courseActions";


function LearnScreen() {

    const listCourses = useSelector(state => state.listCourses);
    const { courses, loading, error } = listCourses;

    console.log(courses)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCourses());
        return () => {};
    }, [])

  return (
    <div className="pb-5" id="home2">

        <div className="intro-learn d-flex align-items-center">
            <div className="container d-flex">
                <div className="container"></div>
                <div style={{width: 1000}} className="container d-flex flex-column align-items-end">
                    <h1 className="cripto-title text-left">Learn high in demand IT Skills & Get Crypto</h1>
                    <p className="text-right" style={{fontStyle: 'italic', fontSize: 20}}><span className="text-white small">powered by </span> Kainstreet</p>
                </div>
            </div>
        </div>
        

        <div class="container mt-5 mb-5">

            <div className="row d-flex justify-content-center mb-5">
                <div className="col-md-6">
                    <div className="">
                        <form className="d">
                            
                        <div class="input-group search-block">
                            <input type="text" class="form-control search" id="inlineFormInputGroupUsername" placeholder="What event are you looking for?" />
                            
                            <div class="input-group-prepend">
                                <button type="button" className="btn search-btn"><FaSearch /></button>
                            </div>
                        </div>

                        </form>
                    </div>
                </div>

                <div className="col-md-2">
                <div className="dropdown">
                    <button className="btn btn-outline-primary pl-4 pr-4 dropdown-toggle filter-search" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter search
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/">Action</a>
                        <a className="dropdown-item" href="/">Another action</a>
                        <a className="dropdown-item" href="/">Something else here</a>
                    </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <h3 className="text-white mb-3">My Courses</h3>
                </div>
            </div>

            <div className="row">

                {courses &&
                courses.map((course) => 
                    <div className="col-md-4" key={course.id}>
                        <CourseCard
                        id ={course.id}
                        title ={course.course_title}
                        description = {course.short_description}
                        progress ={course.progress} />
                    </div>
                )}

            </div>

            <div className="row mt-4">
                <div className="col-md-4">
                    <h3 className="text-white mb-3">Featured Courses Courses</h3>
                </div>
            </div>

            <div className="row">

                {courses &&
                courses.map((course) => 
                    <div className="col-md-4" key={course.id}>
                        <CourseCard
                        id ={course.id}
                        title ={course.course_title}
                        description = {course.short_description}
                        progress ={course.progress} />
                    </div>
                )}

            </div>
            
        </div>
    
    </div>
  );
}

export default LearnScreen;