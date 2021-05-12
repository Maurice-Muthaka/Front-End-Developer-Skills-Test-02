import React, { useEffect, useState } from "react";
import { FaCheckCircle } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { IoChevronBack } from 'react-icons/io5';
import { IoMdTime } from 'react-icons/io';
import ReactPlayer from 'react-player'
import Modal from 'react-modal';
import profile from "../../../images/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCourse } from "../../../actions/courseActions";
import Spinner from "../../common/spinner";
import NotFound from "../../common/404";
import SingleCourseCard from "../../common/singleCourseCard";

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent'
      },

    content : {
      top                   : '40%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      border                : 'none',
      borderRadius          : 10,
      backgroundColor       : '#151371',
      opacity               : 1,
      paddingLeft           : 50,
      paddingRight          : 50,
      paddingRight          : 50,
      display          : 'flex',
      justifyContent          : 'center',
      alignItems          : 'center',
      flexDirection          : 'column',
    }
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root')


function CourseScreen(props) {

    const singleCourse = useSelector(state => state.singleCourse);
    const { course, loading, error } = singleCourse;

    const [activity, setActivity] = useState(null);
    const [modalIsOpen,setIsOpen] = useState(false);
    
    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
      }

    console.log(activity)

    const id = props.match.params.id;
    console.log(id);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleCourse(props.match.params.id));
        return () => {};
    }, [])

  return (
    <div className="pb-5" id="home2">

        {loading &&
            <Spinner />
        }

        {loading === false && course === undefined ?
            <NotFound />
        :

        <div>
            <div className="row">
                <div className="col-md-2" id="sidebar">
                    <div className="container mt-4">
                        <a href="/learn" className="text-white"><IoChevronBack /> Courses</a>

                        <div className="ml-3">
                            <h6 className="text-white mt-3 mb-5">{course && course.course_title}</h6>

                            {course && course.section.map(section => 
                                <div className="mt-4" key={section.id}>
                                    <h6 className="text-white pb-2">{section.title}</h6>

                                    {section.lessons.map(lesson =>
                                        <h6 className="text-white"><FaCheckCircle className="text-success" /> {lesson.title}</h6>
                                    )}
                                </div>
                            )}
                        </div>
                    
                    </div>
                </div>

                <div className="col-md-10">

                    {activity ?

                    <div>
                    
                        <div className='player-wrapper'>
                            <ReactPlayer
                            className='react-player'
                            url={activity && activity.video}
                            width='100%'
                            height='100%'
                            controls={true}
                            onEnded={openModal}
                            />
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-between">
                                    <button className="btn text-white"><FaArrowLeft /></button>
                                    <button className="btn text-white"><FaArrowRight /></button>
                                </div>

                                <div className="col-md-11">
                                    <div className="container card course-card ml-5 mr-5 mt-3">
                                        <div className="card-body">

                                            <div className="d-flex justify-content-end">
                                                <div className="head d-flex align-items-center pl-5 pr-5 p-1" style={{backgroundColor: '#00AA4F', borderRadius: 10}}>
                                                    <span className="small text-white">Completed</span>
                                                </div>
                                            </div>
                                            <h5 className="text-white">{activity && activity.title}</h5>
                                            <p className="text-white small mt-4"><IoMdTime /> 12 minutes</p>
                                            <p className="text-white small mt-5">{activity && activity.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    
                    :

                    <div>
                    
                        <div className="intro-course">

                            <div className=" row d-flex justify-content-center align-items-center">
                                <div className="col-md-3">
                                    <img className="img-fluid img-circle" style={{borderRadius: '50%'}} src={profile} alt="Profile picture" />
                                </div>
                                <div className="col-md-6 d-flex flex-column align-items-start">
                                    <h1 className="profile-title text-left">Welcome back, <br />Shot</h1>
                                    <p className="text-white">75% Completed</p>
                                    <a className="resume">Resume</a>
                                </div>
                            </div>

                        </div>
                        

                        <div class="container-fluid mt-5 mb-5">

                            <div className="row mt-4">

                                <div className="col-md-12"> 
                                    <nav>
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Modules</a>
                                            <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Calendar</a>
                                            <a class="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Messages</a>
                                        </div>
                                    </nav>

                                    <div class="tab-content mt-4" id="nav-tabContent">

                                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                                        {course && course.section.slice(0, 2).map(section => 
                                            <div className="mt-4" key={section.id}>

                                                {section.lessons.map(lesson =>
                                                    // <SingleCourseCard 
                                                    // data={lesson}
                                                    // onClick ={(e) => console.log('okay')} />
                                                    <div className="card course-card mb-3" onClick={(e) => setActivity(lesson)} key={lesson.id}>
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-end">

                                                                <div className="head d-flex align-items-center pl-5 pr-5 p-1" style={{backgroundColor: '#00AA4F', borderRadius: 10}}>
                                                                    <span className="small text-white">Completed</span>
                                                                </div>
                                                            </div>

                                                            <div className="mt-2">
                                                                <h3 className="text-white text-center">Week 1 - {lesson.title}</h3>
                                                            </div>

                                                            <div className="row d-flex justify-content-center">
                                                                <div className="col-md-4 d-flex ml-2 mt-1 mb-1">
                                                                <div className="hr-one-line2 ml-3" style={{ width: lesson.progress, height: 3, borderRadius: 50 }}></div>
                                                                <div className="hr-two-line" style={{ width: '100%', height: 3, borderRadius: 50 }}></div>
                                                                </div>
                                                            </div>

                                                            <p className="text-white text-center small">{lesson.progress} Completed</p>

                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                
                                        </div>

                                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    }
                </div>

            </div>
        </div>
    }
    
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            shouldCloseOnOverlayClick={false}
            contentLabel="Example Modal"
            id="modal"
            >

            <h6 className="text-white mt-2">Activity Completed!</h6>
            <img className="img-fluid" width="150" style={{borderRadius: '50%'}} src={profile} alt="Profile picture" />

            <p className="small text-white mt-2">{activity && activity.progress} Complete</p>
            <p className="text-center text-white">
                You just completed <br />
                <b>Activity1: Join Clickup</b>
            </p>

            <a className="text-center link-next" href="/learn">Go to Next Lesson</a>

            <button className="text-white btn" onClick={closeModal}>Cancel</button>
 
        </Modal>
    </div>
  );
}

export default CourseScreen;