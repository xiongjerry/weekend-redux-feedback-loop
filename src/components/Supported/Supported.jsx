import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Supported () {

    // dispatch to input value into reducers
    const dispatch = useDispatch();
    // history to change page on click
    const history = useHistory();
    // value to send to reducer
    const [supported, setSupported] = useState('');

    const handleSubmit = () => {

        dispatch({
          type: 'ADD_SUPPORT',
          payload: supported
        });
        // change to Understanding component
        history.push('/comment')
    } // end handleSubmit

    return (
        <>
            <h1>How well are you being supported?</h1>

            <form onSubmit={handleSubmit}>

                <label>Support?</label>
                <select name="Supported" onChange={(event) => setSupported(event.target.value)}>
                    <option id="1" value="1">1</option>
                    <option id="2" value="2">2</option>
                    <option id="3" value="3">3</option>
                    <option id="4" value="4">4</option>
                    <option id="5" value="5">5</option>
                </select>

                <button type="submit" >Next</button>

            </form>
        </>
    )
}

export default Supported;