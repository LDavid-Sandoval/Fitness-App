import React, { Component } from 'react';
import Card from './Card'
import AddExercise from './AddExercise';
import url from '../config'

class ExerciseList extends Component {
    state = {
        loading: false,
        error: null
    }
    async _handleDelete (id) {
        try{
            let config = {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            let res = await fetch(`${url}/exercise/${id}`, config)
            let json = await res.json()
            window.location.reload(true)
            this.setState({
                loading: false
            })
        }
        catch (error){

        }
    }

    _handleUpdate = async (id) => {
        console.log('Click: ', id )
    }

    render(){
        return(
            <div className="center">
                {
                    this.props.exercises.map((excercise) => {
                        return(
                            <Card
                                key={excercise._id}
                                id={excercise._id}
                                {...excercise}
                                onClickDelete={this._handleDelete}
                                Del="delete"
                                update="Update"
                            />
                        )
                    })
                }
                <AddExercise />
            </div>
        )
    }
}

export default ExerciseList