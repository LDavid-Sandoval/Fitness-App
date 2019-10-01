import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Exercises from '../pages/Exercises'
import ExercisesNewContainer from '../pages/ExercisesNewContainer'
import NotFound from '../pages/404'
import Example from '../pages/Example'

const App = () => (
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={Exercises}/>
                <Route exact path="/exercise/new" component={ExercisesNewContainer}/>
                <Route exact path="/example" component={Example} />
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
)

/*function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={Exercises}/>
                <Route exact path="/exercise/new" component={ExercisesNew}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}*/
export default App