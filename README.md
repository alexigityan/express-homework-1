# Create an express web application 

## that has the following features

* Renders a page with "Hello world" on "/" route
* Add middleware to the "/" route that sets current time to the cookie if there was no cookie for time
* Renders current time from the cookie on "/" route's page
* Renders a page for route "/myroute/:param" param, param query, param header, and param cookie
* Renders a page for route "/form" with a HTML form (method=post, action=/form) with inputs (username, password, gender, "agree with" checkbox). The POST /form route should save data to the global array and redirects to the /result route with all data saved.
## and the following api endpoints

* GET /api/time - returns current time in {time: current_time} format
* POST /api/users - accepts user data in following format {username: String, gender: String, agree: Boolean, password: String} and saves to the array
* GET /api/users - returns the array of users in json format