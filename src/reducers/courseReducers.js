import { LIST_COURSES_REQUEST, LIST_COURSES_SUCCESS, LIST_COURSES_FAIL, SINGLE_COURSE_REQUEST, SINGLE_COURSE_SUCCESS, SINGLE_COURSE_FAIL } from "../actions/constants";


function courseReducer(state={}, action) {
    switch (action.type) {
        case LIST_COURSES_REQUEST:
            return { loading: true};
        case LIST_COURSES_SUCCESS:
            return { loading: false, courses: action.payload };
        case LIST_COURSES_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function singleCourseReducer(state={}, action) {
    switch (action.type) {
        case SINGLE_COURSE_REQUEST:
            return { loading: true};
        case SINGLE_COURSE_SUCCESS:
            return { loading: false, course: action.payload };
        case SINGLE_COURSE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export { courseReducer, singleCourseReducer };