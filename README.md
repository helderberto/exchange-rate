# Currency Exchange Calculator

A simple currency exchange calculator built to demonstrate using redux with react hooks.

### Setup

`yarn` or `npm install`

### Run It

`yarn start` or `npm start`

---

### Updates

- **May 15, 2021** The API we rely on for this exercise [exchangeratesapi.io](https://exchangeratesapi.io/) stopped being free. I've added a mock fetch library which allows you to keep on using the existing API as-is, but requires you to add `import { fetch } from "./lib/fetch";` to the top of api.js. This update also includes error handling that will log the message from the API and avoid showing the react crash screen.

---

This app was built using [Create React App](https://create-react-app.dev/).

---

Course [Apply Redux to a Modern React Hooks Application by Jamund Ferguson](https://egghead.io/courses/apply-redux-to-a-modern-react-hooks-application-8a37)
