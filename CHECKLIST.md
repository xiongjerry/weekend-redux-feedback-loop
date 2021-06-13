Initialize

    Server
        [] Make routes folder, then make feedback.router.js
        [] Import feedback.router into server.js
        
        [] In feedback.router, make appropriate routes
        [] GET
        [] POST

    Redux
        [] Import dependencies into Index.js
        [] createStore, combineReducers, applyMiddleware from redux
        [] Provider from react-redux
        [] logger from react-logger --> must be installed first

        [] Create reducers --> not possible until further scoping
        [] Create store and add reducers
        [] Wrap Provider around App in ReactDOM
        
    App.jsx
        [] Import Route, Hashrouter as Router from react-router-dom
        [] Implement Router and Route in return to make pages for components
        [] Make components and then add the components into the Router --> Requires further scoping

    Components
        [] Header : make Header folder with Header.jsx and Header.css OR apply header syles in App.css
            [] In Header.jsx, should return an h1 tag typing out 'Feedback!' and a subheader 'Don't forget it'
            [] Add header to App.jsx
        
        [] Feeling : make Feeling.jsx component
            [] Prints out an h1 tag saying 'How are you feeling today?'
            [] Includes a dropdown input labeled 'Feeling?' with values 1-5 with a next button
            [] Button adds input value into reducer and links to the next page
            [] Next button shouldn't work until all inputs are submitted and alert if not submitted

        [] Understanding : make Understanding.jsx component
            [] Prints out an h1 tag saying 'How well are you understanding the content?'
            [] Includes a dropdown input labeled 'Understanding?' with values 1-5 with a next button
            [] Button adds input value into reducer and links to the next page
            [] Next button shouldn't work until all inputs are submitted and alert if not submitted

        [] Supported : make Supported.jsx component
            [] Prints out an h1 tag saying 'How well are you being supported?'
            [] Includes a dropdown input labeled 'Support?' with values 1-5 with a next button
            [] Button adds input value into reducer and links to the next page
            [] Next button shouldn't work until all inputs are submitted and alert if not submitted

        [] Comments : make Comments.jsx component
            [] Prints out an h1 tag saying 'Any Comments you want to leave?'
            [] Includes a dropdown input labeled 'Comments' with values 1-5 with a next button
            [] Button adds input value into reducer and links to the next page
            [] Input is not needed for next button to work

        [] Review : make Review.jsx
            [] Prints out an h1 tag saying 'Review your Feedback'
            [] Prints out reducer list of the collected input
                [] Feelings
                [] Understanding
                [] Support
                [] Comments
            [] Has a submit button that adds info from reducer into database via axios.post and goes to Thank you page
        
        [] Success : make Success.jsx
            [] Prints out an h1 tag saying 'Thank You'
            [] Has button printed with 'Leave New Feedback"
            [] button goes to Feeling page

Stretch Goals
        [] Admin