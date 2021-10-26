# __SE06__

> Project website e-commerce use framework front end ReactJS, back end Spring Boot. Database use MongoDB, tools auth Firebase

## __Tools__

### __IDE__

* __IntelliJ IDEA Ultimate__

<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/2048px-IntelliJ_IDEA_Icon.svg.png" alt="IntelliJ IDEA Image" height="120px">
<p>

> __Description__: __`IntelliJ IDEA`__ is an __Integrated Development Environment (IDE)__ written in Java for developing computer software. It is developed by __`JetBrains`__ (formerly known as IntelliJ), and is available as an Apache 2 Licensed community edition, and in a proprietary commercial edition. Both can be used for commercial development.

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

* __Java__

<p align="center">
    <img src="https://icon-library.com/images/icon-java/icon-java-6.jpg"alt="Java Image" height="120px">
<p>

> __Description__: __`Java`__ is a __`high-level`__, __`class-based`__, __`object-oriented programming language`__ that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.Java applications are typically compiled to bytecode that can run on any __`Java virtual machine (JVM)`__ regardless of the underlying computer architecture.

### __Frameworks__

* __ReactJS__

<p align="center">
    <img src="https://icon-library.com/images/react-icon/react-icon-0.jpg"alt="ReactJS Image" height="120px">
<p>

> __Description__: __`ReactJS`__ is a free and open-source front-end __`JavaScript`__ library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.

* __Spring Boot__

<p align="center">
    <img src="https://pivotal.gallerycdn.vsassets.io/extensions/pivotal/vscode-boot-dev-pack/0.1.0/1629148309593/Microsoft.VisualStudio.Services.Icons.Default"alt="Spring Boot Image" height="120px">
<p>

> __Description__: __`Spring Boot`__ is an open source __`Java-based`__ framework used to create a micro Service. It is developed by Pivotal Team and is used to build stand-alone and production ready spring applications.

### __Auth Tools__

* __Firebase SDK__

<p align="center">
    <img src="https://cdn.iconscout.com/icon/free/png-256/firebase-1-282796.png"alt="Firebase Image" height="120px">
<p>

> __Description__: __`Firebase`__ is a platform developed by __`Google`__ for creating mobile and web applications. It was originally an independent company founded in 2011. In 2014, Google acquired the platform and it is now their flagship offering for app development.

### __Databases__

* __MongoDB__

<p align="center">
    <img src="https://ahana.io/wp-content/uploads/2021/05/mongo-logo.png"alt="MongoDB Image" height="120px">
<p>

> __Description__: __`MongoDB`__ is a source-available cross-platform document-oriented database program. Classified as a __`NoSQL`__ database program, MongoDB uses __`JSON-like`__ documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the __`Server Side Public License (SSPL)`__.

### __Containerization__

* __Docker__

<p align="center">
    <img src="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png"alt="Docker Image" height="120px">
<p>

> __Description__: __`Docker`__ is an open platform for __`developing`__, __`shipping`__, and __`running applications`__. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.

### __Web servers__

* __NGINX__

<p align="center">
    <img src="https://cdn.iconscout.com/icon/free/png-256/nginx-3628948-3030173.png" alt="Nginx Image" height="120px">
<p>

> __Description__: __`NGINX`__ is a __`free`__, __`open-source`__, __`high-performance`__ HTTP server and __`reverse proxy`__, as well as an __`IMAP/POP3`__ proxy server. NGINX is known for its high performance, stability, rich feature set, simple configuration, and low resource consumption.

## __Working Flow__

## __Run__

Value `script` file `package.json`

```json
{
    "start": "react-scripts start",
    "build": "react-scripts build",
    "prebuild:prod": "cat .env.prod > .env",
    "build:prod": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "prestart:dev": "cat .env.dev > .env",
    "prestart:prod": "cat .env.prod > .env",
    "start:dev": "react-scripts start",
    "start:prod": "react-scripts start"
}
```

Add new value with "\<cmd-name\>": "\<cmd\>"

> Run

With

> yarn

```shell
yarn run <cmd-name>
```

or

> npm

```shell
npm run <cmd-name>
```

> __`Command invisible`__

\- __`start`__ \
\- __`build`__ \
\- __`build:prod`__ \
\- __`test`__ \
\- __`eject`__ \
\- __`start:dev`__ \
\- __`start:prod`__

## __Deployment to Server__

> Required `2` file environment setup value env for project __ReactJS__

* __.env.dev__

* __.env.prod__

### __Development__

___Environment Development___

> File config value environment development is __.env.dev__

```ini
REACT_APP_API_KEY=AIzaSyC0XAuGEzxWePyFdxrgssqu7faQ3bGiKfI # API KEY REQUIRED
REACT_APP_AUTH_DOMAIN=se06-saga.firebaseapp.com # AUTH DOMAIN
REACT_APP_PROJECT_ID=se06-saga # PROJECT ID
REACT_APP_STORAGE_BUCKET=se06-saga.appspot.com # STORAGE BUCKET
REACT_APP_MESSAGING_SENDER_ID=60275553807 # MESSAGIN SENDER ID
REACT_APP_APP_ID=1:60275553807:web:f76e59f0b779088106157a # APP ID
REACT_APP_MEASUREMENT_ID=G-3L7KSRLF4J # MEASUREMENT ID
```

#### \- Run dev `local` with __Shell (Linux,MacOS,...)__ or __CMD (WindowsOS)__

> Run required in local setup `nodejs` environment

With

> yarn

```shell
yarn install

yarn run start:dev
```

or

> npm

```shell
npm install

npm run start:dev
```

__Port default__ is 3000 __(path:[Default host server](http://localhost:3000))__

#### \- Deployment with __Docker compose__

> __Dockerfile__ : Dockerfile.prod __(`path:./docker/Dockerfile.dev`)__

```Dockerfile
FROM node:latest

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

CMD [ "yarn","run","start:dev" ]
```

> __docker-compose__ file : docker-compose.dev.yml __(`path:./docker-compose.dev.yml`)__

```yml
version: "3.5"
services:
  app: 
    build:
      context: ./
      dockerfile: ./docker/Dockerfile.dev
    container_name: se06
    ports:
      - 80:3000
```

#### \- Deployment with __Docker compose__ (Dev)

> __Dockerfile__ : Dockerfile.prod __(`path:./docker/Dockerfile.dev`)__

```Dockerfile
FROM node:latest

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

CMD [ "yarn","run","start:dev" ]
```

> __docker-compose__ file : docker-compose.dev.yml __(`path:./docker-compose.dev.yml`)__

```yml
version: "3.5"
services:
  app: 
    build:
      context: ./
      dockerfile: ./docker/Dockerfile.dev
    container_name: se06
    ports:
      - 80:3000
```

> Run

```shell
docker-compose -f docker-compose.dev.yml up -d
```

### __Production__

Deployment not include __HTTPS__

> File config value environment production is __.env.prod__ \
Required set up value in file
Setup project Firebase

```ini
REACT_APP_API_KEY=? # API KEY REQUIRED
REACT_APP_AUTH_DOMAIN=? # AUTH DOMAIN
REACT_APP_PROJECT_ID=? # PROJECT ID
REACT_APP_STORAGE_BUCKET=? # STORAGE BUCKET
REACT_APP_MESSAGING_SENDER_ID=? # MESSAGIN SENDER ID
REACT_APP_APP_ID=? # APP ID
REACT_APP_MEASUREMENT_ID=? # MEASUREMENT ID
```

#### \- Deployment with __Docker compose__ (Prod)

> __Dockerfile__ : Dockerfile.prod __(`path:./docker/Dockerfile.prod`)__

```Dockerfile
FROM node:latest AS builder

WORKDIR /usr/app

COPY . .

RUN yarn install

RUN yarn run build:prod

FROM nginx:alpine

COPY --from=builder /usr/app/build /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

```

> __docker-compose__ file : docker-compose.prod.yml __(`path:./docker-compose.prod.yml`)__

```yml
version: "3.5"
services:
  app: 
    build:
      context: ./
      dockerfile: ./docker/Dockerfile.prod
    container_name: se06
    ports:
      - "80:80"
```

> Run

```shell
docker-compose -f docker-compose.prod.yml up -d
```
