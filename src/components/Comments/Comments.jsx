import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Comments() {

    // dispatch to input value into reducers
    const dispatch = useDispatch();
    // history to change page on click
    const history = useHistory();
    // value to send to reducer
    const [comments, setComments] = useState('');

    const handleSubmit = () => {

        dispatch({
          type: 'ADD_COMMENT',
          payload: comments
        });
        // change to Understanding component
        history.push('/review')
    } // end handleSubmit

    return (
        <>
            <h1>Any comments you want to leave?</h1>

            <form onSubmit={handleSubmit}>

                <label>Comments</label>
                <input
                    type="text"
                    placeholder="comments"
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                />

                <button type="submit" >Next</button>

            </form>
        </>
    )
}

export default Comments;