import React from 'react';
import Question from '../../assets/icons/question.svg';
import QuestionColor from '../../assets/icons/questioncolor.svg';

const QuestionMark = ({ remind }) => {
    return ( 
        <img src={Question} alt="Question" className="w-4 ml-auto"
            onMouseOut={(e) => { e.target.src = Question; remind(); }}
            onMouseOver={(e) => { e.target.src = QuestionColor; remind(); }} />
     );
}
 
export default QuestionMark;