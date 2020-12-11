import React from 'react';
import Timer from '../../components/Timer';
import Grid from '@material-ui/core/Grid'
const ExecutionView = () => {
    //View for showing the CURRENT next action to focus on completion. 
    //Comes with a timer that takes single prop of initial for starting a countdown Timer. Parkinson's Law!
    //TODO: Create NextAction component for displaying single Action details.
    return (
        <Grid item>
        <div>
            <Timer initial={10}/>
        </div>
        </Grid>
    )
}

export default ExecutionView
