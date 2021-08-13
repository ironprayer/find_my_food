import React from 'react';

type prop = {
    question:string;
}

function QuestionCard(prop:prop):JSX.Element{
    return (
        <div>
            <h1>질문</h1>
            {prop.question}
        </div>
    )
}

export default QuestionCard;