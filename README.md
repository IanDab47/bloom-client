# Bloom
Everyone is an expert in their own field.  We would like to expand on the gig economy to empower users to teach others the secrets of their trade.  We love how social media has showcased, that there are many different ways to earn a living.  There are experts in: AirBNB hosting, Cooking, Traveling, and even Coding. These experts can create a workshop for those who are curious in the field.

We want to empower the experts to grow their business and teach others how to navigate that path.  For the ones that want to learn, we want them to Bloom.

To launch the app click: [Bloom](https://63474bcce7c33a0f52f33153--curious-choux-137367.netlify.app/) 

## User Stories
* As an unregistered user, I would like to sign up with email and password.
* As an unregistered user, I would like to see all of the courses.
* As a registered user, I would like to sign in with email and password.
* As a signed in user, I would like to change password.
* As a signed in user, I would like to sign out.
* As a registered user, I would like to create courses.
* As a registered user, I would like to edit courses.
* As a registered user, I would like to update courses.
* As a registered user, I would like to delete courses.
* As a signed in user, I would like to add and remove courses from a shopping cart.
* As a signed in user, I would like to purchase courses in a shopping cart. 
* As a signed in user, I would like to see all my past courses.
* As an unregistered user, I would like to see all of the courses.

## Snapshot 
![Main Layout](/public/bloomMain.png)

![Profile Layout](/public/bloomCourses.png)

## Wireframes
![Front User](/public/frontendUser.png) 
![Front Course](/public/frontendCourse.png) 
![Backend Route](/public/backendroute.png) 

## ERDs
![ERD](/public/ERDfinal.png)

## RESTful Routes

### User
| HTTP METHOD | URL              | CRUD    | Response                              |
| ----------- | ---------------- | ------- | ------------------------------------- |
| GET | `/users/:userId` | READ | return a specific user as json (status 200) |
| POST | `/users/register` | CREATE | create a user in the database and send back as json (status 201) |
| PUT | `/users/:userId` | UPDATE | update a user in the database and send back as json (status 200) |
| DELETE | `/users/:userId` | DESTROY | delete a user from the database (status 204) |


### Cart
| HTTP METHOD | URL              | CRUD    | Response                              |
| ----------- | ---------------- | ------- | ------------------------------------- |
| GET | `/users/:userId/cart` | READ | see a user's cart as json(status 200) |
| PUT | `/users/:userId/cart/:courseId` | UPDATE | add course to cart json (status 200) |
| PUT | `/users/:userId/cart/:courseId/remove` | UPDATE | ability to remove cart as json (status 200) |
| PUT | `/users/:userId/cart/:courseId` | UPDATE | checkout form cart as json (status 200) |


### Courses
| HTTP METHOD | URL              | CRUD    | Response                              |
| ----------- | ---------------- | ------- | ------------------------------------- |
| GET | `/courses` | READ | return all courses as json (status 200) |
| GET | `/courses/:courseId` | READ | return a specific course as json (status 200) |
| POST | `/courses` | CREATE | create a course in the database and send back as json (status 201) |
| PUT | `/courses/:courseId` | UPDATE | update a course in the database and send back as json (status 200) 
| DELETE | `/courses/:courseId` | DESTROY | delete a course from the database (status 204) |
| POST | `/courses/:courseId/comments` | CREATE | create a comment in the database and send back as json (status 201) |


## Our Approach Used
We had open discussion about ideas to for an app that best displayed Unit 3 Lessons.  After we came up with 5 ideas we decided that a social media e-commerce site would be the best option.  We used Miro to created the User Stories and mapped out the Component Hierarchy.  We implemented a SCRUM dashboard and put sticky notes on the Hierarchy to make sure there was no overlap with teammates.

From there, we allowed each member to come and chose what they wanted to work based on their schedule.  We started to tackle the backend routes first, then completed the front end routes.  Once we reached MVP, we started to implement Tailwind and Styling.  

We created a checklist of Big Milestones, Stretch Goals, Bugs and Styling Checklist.  We ranked each item from high to low priority.   We continually tackled the highest priorities to polish the app.

## Tech Stack Used
- JavaScript
- Node.js
- Express
- MongoDB and Mongoose
- Git and GitHub
- JWT
- Bcrypt for Node.js
- Tailwind
- React

Thanks to Node.js this React web application runs off an Express.js server with a non relational database MongoDB. The HTTP requests Express recieves goes through logic written in JavaScript and interacts with the database using queries.  Depending on the request, certain views are shown to the user with the help of EJS rendering coupled with styling from Tailwind CSS element classes.  The react-router-dom was used to pass props from parent to child.  


## Install Instructions
**Client Repo Installation Instructions**
1. Fork on GitHub and clone to local machine
2.  Run `npm install` to install dependencies
3.  Touch a `.env.local` file and add the line `REACT_APP_SERVER_URL=http://localhost:3001`
4. Run `npm run start` to start client app
5. Navigate to http://localhost:3000/ to interact with the web app

**Server Repo Installation Instructions**
1. Fork on GitHub and clone to local machine
2. Run `npm install` to install dependencies
3. Touch a `.env` file and add the line `JWT_SECRET="[SECRET_KEY_HERE]"`
4. (optional) run `node seed.js` to seed the database
5. Run `nodemon` to start server


## MVP goals

**Functionality**
* [X] User has ability to signup
* [X] User can see all of the courses.

* [X] User sign in with password and email
* [X] User can change password.
* [X] User can sign out

* [X] User can create courses.
* [X] User can edit courses.
* [X] User can update courses.
* [X] User delete courses.

* [X] User can add and remove from shopping cart
* [X] User can checkout from a shopping cart.
* [X] Unregistered user can see all of the courses.

**MVP Goals**
* [X] Full Stack App - backend & front end from Unit 3
* [X] Interactive Front End - modern front end
* [X] Complete Product - CRUD - couple models
* [X] Thoughtful User Stories - to know where to build / scrap
* [X] Visually Impressive Design - wow future clients & employers
* [X] Deploy online - publicly accessible

* [X] Working app, built by whole team
* [X] Link to your hosted app - URL in Github
* [X] Team hosted repository

**README**
* [X] Completed README
* [X] Technology Used
* [X] Couple Paragraphs General Approach you took
* [X] Installation Instructions
* [X] Link to User Stories
* [X] Link to Wireframes
* [X] RESTful routing chart
* [X] Unsolved Problems / Major Hurdles

## Stretch goals
* [X] Styling
* [ ] Let users leave star ratings on courses
* [ ] Ability to reply to comments
* [ ] User profile picture
* [ ] User link
* [ ] User description profile

## Major Hurdles 
- Github Workflow - We had a few hiccups with some merge conflicts, because of teammates overlapping on the same components.  We overcame this by using SCRUM and sticky Notes on the Hierarchy. 
- Axios was not syncing properly to the user id.  We used console.log testing to debug the problem.
- Shopping cart was mapping the wrong output on the backend.  Used console.log to debug the problem and was an easy fix.
- Seed - not a big problem but needed a solution to store data to start the app with initial content. 