import { useHistory } from 'react-router-dom'

function Success () {

    const history = useHistory();

    return (
        <>
            <h1>Thank You!</h1>
            <button onClick={()=> {
                history.push('/')
            }}
            >Leave New Feedback</button>
        </>
    )
}

export default Success;