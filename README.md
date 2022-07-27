# Todo List App

This is a simple full-stack solution to the [Todo app challenge](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW) on Frontend Mentor, with a distinct focus on offline support. Feel free to fork this project and use any elements you find useful.

## Table of contents
  - [Project goals](#project-goals)
  - [What we're building](#what-were-building)
    - [Functionality](#functionality)
  - [Technical details](#technical-details)
    - [Front-end (ReactJS)](#front-end-reactjs)
    - [Back-end (NodeJS)](#back-end-nodejs)
    - [DevOps](#devops)
  - [Continued development](#continued-development)
  - [Links](#links)
  - [Author](#author)

## Project Goals

The goal of this project was to:

1. Deliver a full-stack application that implements the functionality outlined in the UI spec.
2. Demonstrate a project setup that's scalable and mirrors my approach to production systems.
3. Minimise the usage of pre-build UI components/libraries
4. Minimise the usage of common Backend-as-a-Service tools that often obfuscate the inner workings of full stack applications e.g. [Firebase](https://firebase.google.com/), and rather implement basic versions of the core components.

## What we're Building

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
- Complete offline support & PWA functionality

## Technical details

### Front-end ([ReactJS](https://reactjs.org/))

- Google OAuth via GCP
- Semantic HTML5 markup
- CSS3 variables for themeing
- SCSS BEM styling
- Styled Components
- Responsive UI via mixins
- Redux state management with persistence for offline support

### Back-end ([NodeJS](https://nodejs.org/en/))

- ExpressJS Restful API
- Authentication based routing
- NoSQL DB (MongoDB/Mongoose)

### DevOps

- Containerisation ([Docker](https://www.docker.com/))
- CI/CD pipelines ([GitHub Actions](https://github.com/features/actions))
- Serverless computing ([Google Cloud Run](https://cloud.google.com/run))
- Individual GCP environments for Production & Development branches
- Secret management ([Google Secret manager](https://cloud.google.com/secret-manager))

## Continued Development

Future functionality to implement:

- Drag and drop to reorder items on the list
- Guest mode

## Links

- [Development Site](https://todo-app-development-image-o3f7zte4sq-nw.a.run.app/login)
- [Production Site](https://todo-app-development-image-o3f7zte4sq-nw.a.run.app/login)

## Author

- LinkedIn - [Michael Pepper](https://www.linkedin.com/in/im-michael-pepper/)
- Email - [Here](im.michael.pepper@gmail.com)
