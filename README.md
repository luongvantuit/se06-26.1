# __eCommerce__

## __Tools__

* __Visual Studio Code__

<p align="center">
    <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png" alt="Visual Studio Code Image" height="120px">
<p>

> __Description__: __`Visual Studio Code`__ is an __Integrated Development Environment (IDE)__ made by __`Microsoft`__ for __`Windows`__, __`Linux`__ and __`MacOS`__. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. Users can change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality.

### __Languages__

* __Typescript__

<p align="center">
    <img src="https://iconape.com/wp-content/png_logo_vector/typescript.png" alt="Typescript Image" height="120px">
<p>

> __Description__: __`Typescript`__ is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of __`JavaScript`__ and adds optional static typing to the language. __TypeScript__ is designed for the development of large applications and transcompiles to JavaScript. As __TypeScript__ is a superset of JavaScript, existing JavaScript programs are also valid __TypeScript__ programs.

### __Frameworks__

* __ReactJS__

<p align="center">
    <img src="https://icon-library.com/images/react-icon/react-icon-0.jpg"alt="ReactJS Image" height="120px">
<p>

> __Description__: __`ReactJS`__ is a free and open-source front-end __`JavaScript`__ library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.

### __Auth Tools__

* __Firebase SDK__

<p align="center">
    <img src="https://cdn.iconscout.com/icon/free/png-256/firebase-1-282796.png"alt="Firebase Image" height="120px">
<p>

> __Description__: __`Firebase`__ is a platform developed by __`Google`__ for creating mobile and web applications. It was originally an independent company founded in 2011. In 2014, Google acquired the platform and it is now their flagship offering for app development.

### __Containerization__

* __Docker__

<p align="center">
    <img src="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png"alt="Docker Image" height="120px">
<p>

> __Description__: __`Docker`__ is an open platform for __`developing`__, __`shipping`__, and __`running applications`__. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.

## __Set up Firebase SDK Client__

__Version SDK `"firebase": "^9.1.0",`__

> firebase.config.ts

```ts
import { FirebaseOptions } from "firebase/app";
const firebaseOptions: FirebaseOptions = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    appId: process.env.REACT_APP_APP_ID,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

export default firebaseOptions;
```

> firebase.ts

```ts
import { initializeApp, FirebaseApp } from "firebase/app";
import firebaseOptions from "./firebase.config";

const firebaseApp: FirebaseApp = initializeApp(firebaseOptions);

export default firebaseApp;
```

> Use firebase auth\

firebase.auth.ts

```ts
import { getAuth } from "firebase/auth";
import firebaseApp from "./firebase";
const auth = getAuth(firebaseApp);
export default auth;
```

## __Run__

> yarn

```shell
yarn start
```

> npm

```shell
npm start
```

__Port default__ is 3000 __(path:[Default host server](http://localhost:3000))__

#### \- Deployment with __Docker compose__

> __Dockerfile__

```Dockerfile
FROM node:latest

WORKDIR /app

COPY . .

RUN yarn install

CMD [ "yarn","start" ]
```

> __docker-compose__

```yml
version: "3.5"
services:
  app: 
    build:
      context: ./
    container_name: se06
    ports:
      - 80:3000
```

> Run

```shell
docker-compose up -d
```




### __Workflow__

- [x] Design Screens 
- [ ] Connect to API
- [ ] Load product data
- [ ] User can add products to cart.
- [ ] Login and Register
- [ ] Seller management: Create product, shop, manage products and orders
- [ ] Add user's card information.
- [ ] Verify user's card information.
- [ ] Look for information product.

