import React from 'react';
import Timer from '../../components/Timer';

const ExecutionView = () => {
    //View for showing the CURRENT next action to focus on completion. 
    //Comes with a timer that takes single prop of initial for starting a countdown Timer. Parkinson's Law!
    //TODO: Create NextAction component for displaying single Action details.
    return (
        <div>
            <Timer initial={10}/>
        </div>
    )
}

export default ExecutionView
