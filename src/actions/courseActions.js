import { LIST_COURSES_REQUEST, LIST_COURSES_SUCCESS, LIST_COURSES_FAIL, SINGLE_COURSE_REQUEST, SINGLE_COURSE_SUCCESS, SINGLE_COURSE_FAIL } from "./constants";
import { courses } from "../data/courses";

const fetchCourses = () => async (dispatch) => {

    try {
        dispatch({ type: LIST_COURSES_REQUEST });

        dispatch({ type: LIST_COURSES_SUCCESS, payload: courses})

    } catch (error) {
        dispatch({ type: LIST_COURSES_FAIL, payload: error});
    }
}

const fetchSingleCourse = (id) => async (dispatch) => {

    try {
        dispatch({ type: SINGLE_COURSE_REQUEST, payload: id });

        const course = courses.find(c => { 
            return c.id === parseInt(id, 10)}
            ) 


        dispatch({ type: SINGLE_COURSE_SUCCESS, payload: course})

    } catch (error) {
        dispatch({ type: SINGLE_COURSE_FAIL, payload: error});
    }
}

export { fetchCourses, fetchSingleCourse };