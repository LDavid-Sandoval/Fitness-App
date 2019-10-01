import React, { useState } from 'react'

const Example = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me!
            </button>
        </div>
    )
}
export default Example

/* 
    class Example extends React.Component{
        state = {
            count: 0
        }

        render(){
            return (
                <div>
                    <p>You clicked {this.state.count} times</p>
                    <button onClick={ () => this.setState( {count: this.state.count + 1} )}>
                        click me
                    </button>
                <div>
            )
        }
    }

*/