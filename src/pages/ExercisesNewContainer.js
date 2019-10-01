import React, { Component } from 'react';
import FatalError from './500'
import ExerciseNew from './ExercisesNew'
import url from '../config'

class ExerciseNewContainer extends Component{
    
    state = {
        form:{
            title: '', 
            description: '', 
            img: '', 
            leftColor: '', 
            rightColor: ''
        },
        loading: false,
        error: null
    }
    _handleChange = (e) =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    _handleSubmit = async (e) => {
        this.setState({
            loading: true
        })
        e.preventDefault()
        try{
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch(`${url}/exercise`, config)
            let json = await res.json()
            this.setState({
                loading: false
            })
            this.props.history.push('/exercise')
        }
        catch (error){
            this.setState({
                loading: false,
                error   
            })
        }
    }

    render(){
        if (this.state.error)
            return <FatalError />

        return <ExerciseNew 
                    form={this.state.form}
                    onChange={this._handleChange}
                    onSubmit={this._handleSubmit}
               />
    }
}
export default ExerciseNewContainer 