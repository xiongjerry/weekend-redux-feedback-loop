import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Understanding () {

    // dispatch to input value into reducers
    const dispatch = useDispatch();
    // history to change page on click
    const history = useHistory();
    // value to send to reducer
    const [understanding, setUnderstanding] = useState('');

    const handleSubmit = () => {

        dispatch({
          type: 'ADD_UNDERSTANDING',
          payload: understanding
        });
        // change to Understanding component
        history.push('/supported')
    } // end handleSubmit

    return (
        <>
            <h1>How well are you understanding the content?</h1>

            <form onSubmit={handleSubmit}>

                <label>Understanding?</label>
                <select required name="Understanding" onChange={(event) => setUnderstanding(event.target.value)}>
                    <option id="blank" value="">Please Select A Rating</option>
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

export default Understanding;