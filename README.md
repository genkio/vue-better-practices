# vue-better-practices

> This project show cases some of the better practices I accumulated when developing Vue.js apps

## Live Demo

https://vue-better-practices.firebaseapp.com/

## Tech Stacks

- Front-end UI built with [Vue.js](https://vuejs.org/), [Vue Router](https://router.vuejs.org/), [Vuex](https://vuex.vuejs.org/) and [Bulma.css](https://bulma.io/)
- Back-end API built with [Express.js](https://expressjs.com/) and [Firebase](https://firebase.google.com/) powered by [Google Cloud Functions](https://cloud.google.com/functions/)

## App Features

- [x] Responsive UI
- [x] Categorized shop items list view
- [x] Navigation between list and detail view
- [x] Client side search

## UI Component Hierarchy
### Timeline
![timeline](https://user-images.githubusercontent.com/5327840/49975808-ddfd5a80-ff82-11e8-9325-9c17e5db1a0f.png)

### ItemDetail
![detail](https://user-images.githubusercontent.com/5327840/49975807-ddfd5a80-ff82-11e8-85e1-7c3a287fe42d.png)

## Development

```bash
# Use Node.js version 8+ for local development
# nvm use 8.x.x

# install client dependencies
npm install

# install api dependencies and serve api
cd functions && npm install && npm run serve && cd ..

# create dotenv config and add your locally served api url to it
cp ./.env.example ./.env

# serve ui with hot reload at localhost:1234
npm run dev
```

## Deploy

```bash
# deploy database rules
npm run deploy:db

# deploy api to cloud function
npm run deploy:api

# deploy to firebase hosting
npm run deploy:ui
```

## TODO

- [ ] Replace scoped css with css module
- [ ] Implement like feature
