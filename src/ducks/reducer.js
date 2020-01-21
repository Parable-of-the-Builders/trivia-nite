const initialState = {
    questions: []
}

const SET_QUESTIONS = "SET_QUESTIONS"

export function setQuestions(question){
    return {
        type: SET_QUESTIONS,
        payload: question
    }
}

export default function reducer (state = initialState, action) {
const {type, payload} = action
switch(type){
    case SET_QUESTIONS: 
    return {...state, questions: payload}
    default: return state
}
}