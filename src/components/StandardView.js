import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {setQuestions} from '../ducks/reducer'


const StandardView = (props) => {
    useEffect(() => {
        axios.get('https://opentdb.com/api.php?amount=10&category=20&encode=base64').then(res => (
            props.setQuestions(res.data)
        ))
    }, [])
    console.log(props)
    return(
        <div>
            <h1>This is the Standard View</h1>
        </div>
    )
}
const mapStateToProps = (redux) => {
    const {questions} = redux
    return questions
}
export default connect(mapStateToProps, {setQuestions})(StandardView)