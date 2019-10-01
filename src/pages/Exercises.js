import React, { Fragment}  from 'react';
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome';
import Loading from '../components/Loading';
import FatalError from './500';
import useFetch from '../hooks/useFetch'
import url from '../config'

//Hooks
const Exercises = () => {

    const { data, loading, error } =  useFetch(`${url}/exercise`)

    if (loading)
        return <Loading />
    if (error)
        return <FatalError />
    return(
        <Fragment >
            <Welcome
                username="David"
            />
            <ExerciseList 
                className="center" 
                exercises={data} 
            />
        </Fragment>
    )
}
export default Exercises