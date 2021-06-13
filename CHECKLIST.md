Initialize

    Server
        [x] Make routes folder, then make feedback.router.js
        [x] Import feedback.router into server.js
        
        [x] In feedback.router, make appropriate routes
        [x] GET
        [x] POST

    Redux
        [x] Import dependencies into Index.js
        [x] createStore, combineReducers, applyMiddleware from redux
        [x] Provider from react-redux
        [x] logger from react-logger --> must be installed first

        [x] Create reducers --> not possible until further scoping
        [x] Create store and add reducers
        [x] Wrap Provider around App in ReactDOM
        
    App.jsx
        [x] Import Route, Hashrouter as Router from react-router-dom
        [x] Implement Router and Route in return to make pages for components
        [x] Make components and then add the components into the Router --> Requires further scoping

    Components
        [x] Feeling : make Feeling.jsx component
            [x] Prints out an h1 tag saying 'How are you feeling today?'
            [x] Includes a dropdown input labeled 'Feeling?' with values 1-5 with a next button
            [x] Button adds input value into reducer and links to the next page
            [x] Next button shouldn't work until all inputs are submitted and alert if not submitted

        [x] Understanding : make Understanding.jsx component
            [x] Prints out an h1 tag saying 'How well are you understanding the content?'
            [x] Includes a dropdown input labeled 'Understanding?' with values 1-5 with a next button
            [x] Button adds input value into reducer and links to the next page
            [x] Next button shouldn't work until all inputs are submitted and alert if not submitted

        [x] Supported : make Supported.jsx component
            [x] Prints out an h1 tag saying 'How well are you being supported?'
            [x] Includes a dropdown input labeled 'Support?' with values 1-5 with a next button
            [x] Button adds input value into reducer and links to the next page
            [x] Next button shouldn't work until all inputs are submitted and alert if not submitted

        [x] Comments : make Comments.jsx component
            [x] Prints out an h1 tag saying 'Any Comments you want to leave?'
            [x] Includes a dropdown input labeled 'Comments' with values 1-5 with a next button
            [x] Button adds input value into reducer and links to the next page
            [x] Input is not needed for next button to work

        [x] Review : make Review.jsx
            [x] Prints out an h1 tag saying 'Review your Feedback'
            [x] Prints out reducer list of the collected input
                [x] Feelings
                [x] Understanding
                [x] Support
                [x] Comments
            [x] Has a submit button that adds info from reducer into database via axios.post and goes to Thank you page
        
        [x] Success : make Success.jsx
            [x] Prints out an h1 tag saying 'Thank You'
            [x] Has button printed with 'Leave New Feedback"
            [x] button goes to Feeling page

Stretch Goals
        [] Admin