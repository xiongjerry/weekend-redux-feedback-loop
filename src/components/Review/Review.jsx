import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Review() {

    // use selector to add reducer values from store
    const feedbackList = useSelector(store => store.feedbackList)
    console.log('feedback results', feedbackList);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        const feedbackData = {
            feeling:       feedbackList[0],
            understanding: feedbackList[1],
            support:       feedbackList[2],
            comments:      feedbackList[3]
        };

        // axios post to send feedback into database
        axios.post('/feedback', feedbackData )
        .then(response => {
          // change page to success page
          history.push('/success');
          // implement to index reducer to complete clear
          dispatch({ type: 'EMPTY_LIST' })
        }).catch(err => {
          console.log(err)
        })

    }

    return (
        <>
            <h1>Review Your Feedback</h1>
            <p>Feelings: {feedbackList[0]}</p>
            <p>Understanding: {feedbackList[1]}</p>
            <p>Support: {feedbackList[2]}</p>
            <p>Comments: {feedbackList[3]}</p>
            <button onClick={handleSubmit}>SUBMIT</button>
        </>
    )
}

export default Review;