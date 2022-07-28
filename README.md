# Todo List App

This is a simple full-stack solution to the [Todo app challenge](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW) on Frontend Mentor, with a distinct focus on offline support. 

Feel free to fork this project and use any elements you find useful.

### Live Demos

- [Development Site](https://todo-app-development-image-o3f7zte4sq-nw.a.run.app/login)
- [Production Site](https://todo-app-production-image-poluyjy66a-nw.a.run.app/login)

--- 
## Table of contents
  - [Project Goals](#project-goals)
  - [What We're Building](#what-were-building)
    - [Functionality](#functionality)
  - [Technical Details](#technical-details)
    - [Front-end (ReactJS)](#front-end-reactjs)
    - [Back-end (NodeJS)](#back-end-nodejs)
    - [DevOps & Infrastructure](#devops)
    - [Continued Development](#continued-development)
  - [Author](#author)

## Project Goals

The goal of this project was to:

1. Deliver a full-stack application that implements the functionality outlined in the UI spec.
2. Demonstrate optimistic UI principles with async/offline event handlers.
3. Demonstrate a project setup that's scalable and mirrors a production ready approach.
4. Minimise the usage of pre-built UI components/libraries to demonstrate how to simply maintain a front-end project. 
5. Minimise the usage of common Backend-as-a-Service tools that often obfuscate the inner workings of full stack applications e.g. [Firebase](https://firebase.google.com/), and rather implement basic versions of the core components.

> ℹ️ Note: To limit scope, I have not focused on intermediate state transitions & loaders.

## What We're Building

![](ui-design.jpg)

### Functionality

The following functionality has been implemented:

- Login/Logout with Google OAuth session cookies
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- Offline support & PWA functionality

## Technical details

### Front-end ([ReactJS](https://reactjs.org/))

- Google OAuth via GCP
- Authentication based routing
- Redux:
  - State management with persistence for offline support
  - Sagas
  - Reselect
- Usage of React Features:
  - React Hooks
  - Suspense, Lazy-loading and Error Boundaries
  - HOC containers
- Semantic HTML5 markup
- CSS3 variables for themeing
- SCSS BEM styling
- Styled Components
- Responsive UI via mixins

### Back-end ([NodeJS](https://nodejs.org/en/))

- ExpressJS Restful API
- Authentication based routing
- NoSQL DB (MongoDB/Mongoose)

### DevOps & Infrastructure

- Containerisation ([Docker](https://www.docker.com/))
- CI/CD pipelines ([GitHub Actions](https://github.com/features/actions))
- Serverless computing ([Google Cloud Run](https://cloud.google.com/run))
- Individual GCP environments for Production & Development branches
- Secret management ([Google Secret manager](https://cloud.google.com/secret-manager))

### Future Development

Future functionality to implement:
- Drag and drop to reorder items on the list
- Guest mode

## Author

- LinkedIn - [Michael Pepper](https://www.linkedin.com/in/im-michael-pepper/)
- Email - <im.michael.pepper@gmail.com>

