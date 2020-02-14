# node

## TODO

An experienced developer shares his favorite Chrome DevTools tips and tricks (5 minute read): https://www.freecodecamp.org/news/awesome-chrome-dev-tools-tips-and-tricks/

[How to Build a Piano Keyboard Using Vanilla JavaScript](https://www.freecodecamp.org/news/javascript-piano-keyboard/)

[How to build a Progressive Web App from scratch with HTML, CSS, and JavaScript](https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/) You'll build a simple coffee menu app that uses service workers and continues working even if you disconnect from the internet. (10 minute read)

[Learning Modern JavaScript with Tetris](https://twitter.com/javascriptdaily/status/1203022042745974789?s=11)

[Build a Weight Tracker App with Node.js and PostgreSQL](https://scotch.io/tutorials/build-a-weight-tracker-app-with-nodejs-and-postgresql)

[CodePen](https://codepen.io/) The best place to build, test, and discover front-end code. CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.
https://twitter.com/js_tut/status/1210037813204402177?s=11

How to deploy a website in just 3 minutes straight from your Google Drive. (6 minute read): https://www.freecodecamp.org/news/how-to-deploy-a-static-website-for-free-in-only-3-minutes-with-google-drive/

How to make your first JavaScript chart using the JSCharting library - a detailed tutorial with code examples. (18 minute read): https://www.freecodecamp.org/news/how-to-make-your-first-javascript-chart/

[The Ultimate Guide to End to End Tests with Selenium and Docker](https://www.freecodecamp.org/news/end-to-end-tests-with-selenium-and-docker-the-ultimate-guide/)

[20 ways to become a better Node.js developer in 2020](https://medium.com/@me_37286/20-ways-to-become-a-better-node-js-developer-in-2020-d6bd73fcf424)

[Publish NPM package with GitHub Actions](https://juffalow.com/javascript/publish-npm-package-with-github-actions)

[How to write clean code](https://www.freecodecamp.org/news/javascript-naming-convention/) An overview of JavaScript best practices and coding conventions. 8 minute read, plus video

[Credir Card Form in Vue](https://codepen.io/JavaScriptJunkie/pen/YzzNGeR)

[An overview of Progressive Web App development](https://www.freecodecamp.org/news/practical-tips-on-progressive-web-app-development/)

[A complete guide to end-to-end API testing with Docker](https://www.freecodecamp.org/news/end-to-end-api-testing-with-docker/) You'll build a Node/Express API and test it with Chai and Mocha. (19 minute read) 

[Why you should use SVG images, and how to animate your SVGs and make them lightning fast (5 minute read)](https://www.freecodecamp.org/news/a-fresh-perspective-at-why-when-and-how-to-use-svg/)

[Tailwind CSS](https://tailwindcss.com/) A utility-first CSS framework for rapidly building custom designs.
Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.
https://egghead.io/playlists/introduction-to-tailwind-and-the-utility-first-workflow-0b697b10

[Learn UI design fundamental](https://www.freecodecamp.org/news/learn-ui-design-fundamentals-with-this-free-one-hour-course/) This course will teach you User Interface Design fundamentals like whitespace, visual hierarchy, and typography (1 hour interactive course) 

## Tutorial

Este tutorial node.js recoge toda la información relevante para el desarrollo en este entorno de desarrollo.

[Instalación](./01-instalacion.md)

[Tutorial](./02-tutorial.md)

[Getting Started with Node.js](https://edgecoders.com/getting-started-with-node-js-91449a0d03d3)

[Este manual quiere que aprendas el 80% de todo JavaScript en 20% del tiempo](https://www.genbeta.com/web/este-manual-quiere-que-aprendas-80-todo-javascript-20-tiempo) [Javascript Handbook](https://drive.google.com/file/d/1KkOb8_7a3YT_GrFvJCmxu9LrLVksy2kP/view)

[Developer Roadmap](https://github.com/kamranahmedse/developer-roadmap) Roadmap to becoming a Web Developer in 2019 is a set of charts demonstrating the paths that you can take and the technologies that you would want to adopt in order to become a frontend, backend or a devops. I made these charts for an old professor of mine who wanted something to share with his college students to give them a perspective; sharing them here to help the community.

[NPM - Todo lo que necesitas saber](https://codingpotions.com/npm-tutorial/)

# Tutorial

## 01-HelloWorld

Crear fichero hello.js con editor o con el siguiente codigo:

```
$ echo 'console.log("Hello, World!");' > hello.js
$ node hello.js
Hello, World!
```

## 02-HelloServer

Crea un fichero HelloServer.js con el siguiente codigo:
```javascript
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello Server\n');
}).listen(8080);

console.log('Server started');
```
Salva el fichero y ejecuta el comando:

`$ node HelloServer.js`

Verás en el terminal 'Server Started' y abriendo en navegador [http://localhost:8080](http://localhost:8080) aparece el mensaje 'Hello Server'

## 03-Testing
[Making your UI tests resilient to change](https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change)

[Testing React — an overview](https://medium.com/dailyjs/testing-react-an-overview-56204839cbad) Testing your frontend application has never been easier before. Within this article, I’ll explain different levels of testing your application as well as the most suited solutions for testing the specified levels. Also, there is a repository located at https://gitlab.com/takethefake/react-testing-todo where all best practices are used.

[Demystifying JavaScript Testing](https://css-tricks.com/demystifying-javascript-testing/)

[Da potencia y flexibilidad a tus tests con Jest](https://www.genbeta.com/desarrollo/da-potencia-flexibilidad-tus-tests-jest)

[What is a JavaScript test?](https://www.javascriptjanuary.com/blog/but-really-what-is-a-javascript-test)

[Unit testing in JavaScript Part 3 - Test runners](https://www.youtube.com/watch?reload=9&v=pdx2HjFRaJY&feature=em-subs_digest)

[Unit testing in JavaScript Part 6 - Red, Green, Refactor and Jest mocks](https://www.youtube.com/watch?v=yIcpju9O4ZQ)

[Curso de Testing Javascript Moderno](http://www.etnassoft.com/2013/10/16/curso-de-testing-javascript-moderno-parte-1-introduccion-y-herramientas/)

[Lo mejor y peor de Mocha y de los unit tests en JavaScript](https://solidgeargroup.com/mocha-unit-tests-en-javascript?lang=es)

[A TDD Approach to Building a Todo API Using Node.js and MongoDB](https://semaphoreci.com/community/tutorials/a-tdd-approach-to-building-a-todo-api-using-node-js-and-mongodb)

[End to End Testing with Google's Puppeteer and Jest](https://egghead.io/courses/end-to-end-testing-with-google-s-puppeteer-and-jest)

[Cypress](https://www.nuevatribuna.es/articulo/sanidad/deberiamos-tener-empresa-farmaceutica-publica/20181210120232158249.html) Fast, easy and reliable testing for anything that runs in a browser.

[Pruebas asíncronas en node.js](http://pinchito.es/2013/pruebas-asincronas.html)

[An Async Example](https://facebook.github.io/jest/docs/es-ES/tutorial-async.html#)

[Jest. Matchers](https://doc.ebichu.cc/jest/docs/es-ES/using-matchers.html#content)

[Testing Asynchronous Code](https://doc.ebichu.cc/jest/docs/en/asynchronous.html)

[An Async Example](https://jestjs.io/docs/es-ES/tutorial-async.html)

[Awesome automated testing setup](https://til.philipsotirov.com/start-server-and-test)

[How to Test JavaScript Code in a Browser](https://dzone.com/articles/how-to-test-javascript-code-in-a-browser?edition=408224&utm_source=Daily%20Digest&utm_medium=email&utm_campaign=Daily%20Digest%202018-10-25)

## 03-Counter
Presentar un contador de accesos facilmente sin necesitar ninguna base de datos creando el fichero '03-Counter.js' con el codigo:

```
var http = require('http');

var userCount = 0;
http.createServer(function (request, response) {
    console.log('New connection');
    userCount++;

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello!\n');
    response.write('We have had '+userCount+' visits!\n');
    response.end();
}).listen(8080);

console.log('Server started');
```

ejecutar el siguiente comando,

`node 03-Counter.js`

Cuando accedemos a (http://localhost:8080) veremos un contador de vistas. El contador aumenta de dos en dos, porque en cada peticion del navegador, también se pide el favicon desde el servidor (http://localhost:8080/favicon.ico). Igualmente el servidor presenta en pantalla dos mensajes por cada petición del navegador.

## 04 - ASYNC/SYNC

[Controlar la ejecución asíncrona](https://www.todojs.com/controlar-la-ejecucion-asincrona/)

[Formas de manejar la asincronía en JavaScript](https://carlosazaustre.es/manejando-la-asincronia-en-javascript/)

[callbacks promesas y async-await](https://medium.com/@jmz12/callbacks-promesas-y-async-await-que-alguien-me-explique-514137cb57e2)

[Callbacks](http://www.theprojectspot.com/tutorial-post/nodejs-for-beginners-callbacks/4)
Now we're going to take a look at callbacks and what makes them so useful.

[Creando y utilizando callbacks](https://fernetjs.com/2011/12/creando-y-utilizando-callbacks/)

[Is async / await useless?](https://www.youtube.com/watch?v=ho5PnBOoacw)

[Write Your Own Node.js Promise Library from Scratch](http://thecodebarbarian.com/write-your-own-node-js-promise-library-from-scratch.html)

[Pruebas asíncronas en node.js](http://pinchito.es/2013/pruebas-asincronas.html)

[Ejemplos de carga síncrona y asíncrona de Javascript. Problemas y soluciones](http://rolandocaldas.com/html5/carga-asincrona-de-javascriptt)

## 05 - [server_http](https://www.nodebeginner.org/index-es.html)

[Build a Basic CRUD App with Vue.js and Node](https://www.sitepoint.com/build-a-basic-crud-app-with-vue-js-and-node/)
This tutorial will take you step by step through scaffolding a Vue.js project, offloading secure authentication to Okta’s OpenID Connect API (OIDC), locking down protected routes, and performing CRUD operations through a backend REST API server. This tutorial uses the following technologies but doesn’t require intimate knowledge to follow along:
* Vue.js with vue-cli, vue-router, and Okta Vue SDK
* Node with Express, Okta JWT Verifier, Sequelize, and Epilogue

# TODO

[Learn how to build your own social media app from scratch using React, Redux, Firebase, and Express](https://www.freecodecamp.org/news/react-firebase-social-media-app-course/) - a full-length intermediate  course - all free and with no ads (12 hour watch): 

[3 Approaches for Using the Google Sheets API in Node.js: A Tutorial](https://blog.stephsmith.io/tutorial-google-sheets-api-node-js/)

[How I built my first React Native app for my first freelance client](https://medium.freecodecamp.org/how-i-built-my-first-react-native-app-for-my-first-freelance-client-d78bdab795e1)

[The Modern JavaScript Tutorial](https://javascript.info/) From the basics to advanced topics with simple, but detailed explanations. Main course contains 2 parts which cover JavaScript as a programming language and working with a browser. There are also additional series of thematic articles.

[Front End Handbook 2019](https://frontendmasters.com/books/front-end-handbook/2019/)

[Bulletproof node.js project architecture](https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf) The correct organization of your node.js project structure will avoid duplication of code, will improve stability, and potentially, will help you scale your services if is done correctly.

[Google Cloud Functions, Node.js and Express](https://itnext.io/google-cloud-functions-node-js-and-express-aea4a2a9ba3a)

[Cómo instalar aplicaciones web progresivas (PWA) en Chrome desde Windows o macOS](https://www.genbeta.com/paso-a-paso/como-instalar-aplicaciones-web-progresivas-pwa-chrome)

[Dynamic image resizing with Node.js and the Serverless Framework](https://serverless.com/blog/dynamic-image-resizing-nodejs/) In this article, we'll take an in-depth look at the benefits of dynamic image resizing and walk you through using the Serverless Framework to resize your images dynamically with AWS Lambda. So, let's get to it!

[The Chronicles of JavaScript Objects](https://blog.bitsrc.io/the-chronicles-of-javascript-objects-2d6b9205cd66)

[Website with blog and portfolio using Vue.js + Nuxt + Markdown](https://marinaaisa.com/blog/blog-using-vue-nuxt-markdown/) How I created my new website with portfolio and blog in two languages. What technology I used and why.

[clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript/blob/master/README.md) Clean Code Javascript es un repositorio en GitHub que contiene un montón de consejos, ejemplos y convenciones para crear un código limpio y mantenible. Desde naming de variables y funciones hasta SOLID y manejo de errores. ¡Recomendadísimo! 

[Seven reasons to learn Vue.js in 2019](https://dev.to/rossta/seven-reasons-learn-vuejs-in-2019-2n9o)

[10 Best Tips for Learning Vue from Vue Masters](https://medium.com/vue-mastery/10-best-tips-for-learning-vue-from-vue-masters-a21c794b1e6e) If you’re a developer who is just starting out with Vue.js, jumping in can be both exciting and overwhelming. While everybody’s learning process is very different, I asked six Vue Masters the following question “What advice would you give developers who are just starting Vue.js that you wish you would have known?”

[Tip: Get the unique values of an array in JavaScript](https://twitter.com/addyosmani/status/1080727964411674624?s=11)

[The Chronicles of JavaScript Objects](https://blog.bitsrc.io/the-chronicles-of-javascript-objects-2d6b9205cd66) Objects are the foundation of JavaScript and permeate its every aspect. Almost everything in JavaScript is an object. In fact, only six things are not objects. They are — null,undefined, strings, numbers, boolean, and symbols. These are called primitive values or primitive types.

[Nuxt.js](https://nuxtjs.org/) Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable.

[Web con blog y portfolio usando Vue.js + Nuxt + Markdown](https://marinaaisa.com/es/blog/blog-usando-vue-nuxt-markdown/) Cómo he creado mi nueva web con portfolio y blog en dos idiomas. Qué tecnología he utilizado y por qué

[How to build a Node.js server that scales](https://medium.freecodecamp.org/writing-scalable-architecture-for-node-js-2b58e0523d7f)

[A set of best practices for JavaScript projects](https://github.com/elsewhencode/project-guidelines#testing)

[How to use NodeJS without frameworks and external libraries](https://adityasridhar.com/posts/how-to-use-nodejs-without-frameworks-and-external-libraries)

[Write tests. Not too many. Mostly integration](https://blog.kentcdodds.com/write-tests-not-too-many-mostly-integration-5e8c7fff591c)

[Build a Basic CRUD App with Vue.js and Node](https://www.sitepoint.com/build-a-basic-crud-app-with-vue-js-and-node/) This tutorial will take you step by step through scaffolding a Vue.js project, offloading secure authentication to Okta’s OpenID Connect API (OIDC), locking down protected routes, and performing CRUD operations through a backend REST API server.

[Pruebas asíncronas en node.js](http://pinchito.es/2013/pruebas-asincronas.html)

[Write less code, ship more apps: How Vulcan.js makes me an efficient developer](https://medium.com/dailyjs/write-less-code-ship-more-apps-how-vulcan-js-makes-me-an-efficient-developer-71c829c76417) Who hasn’t dreamt they could create web and mobile applications from scratch in a matter of days, while using cutting-edge technologies? With good programming patterns and a well-chosen framework, this dream is not as unrealistic as it seems… and Vulcan.js is the answer!

[Hello, Create React App 2.0!](https://www.telerik.com/blogs/hello-create-react-app-2) Create React App provides an environment for learning React with zero configuration, developed by the React team at Facebook Open Source to help you jump-start your application. 

[Minicurso Gratuito React.js y Firebase](https://cursos.carlosazaustre.es/courses/enrolled/169975)
[Curso en Youtube](https://www.youtube.com/watch?v=M76SUpBf_3o&list=PLUdlARNXMVkn5_dwhSfC3WzqRrGhsfqu5)

[Building a Simple CRUD Application with Express and MongoDB](https://zellwk.com/blog/crud-express-mongodb/)

[Writing a CRUD app with Node.js and MongoDB](https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb)

[A crash course on Serverless APIs with Express and MongoDB](https://hackernoon.com/a-crash-course-on-serverless-apis-with-express-and-mongodb-77774f7730fe) creating a production-ready Express API running on AWS Lambda with a persistent MongoDB data store.

[A pure javascript QR code reading library](https://github.com/cozmo/jsQR)

[I created the exact same TODO app in React and Vue. Here are the differences](https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd)

[Creating an Instagram Bot With Node.js](https://hackernoon.com/how-to-create-an-instagram-bot-with-node-js-a289185a7d6f)

[Building a simple static site generator using Node.js](https://smalldata.tech/blog/2018/08/16/building-a-simple-static-site-generator-using-node-js)

[Hello vue. A quicjk tutorial on Getting Started with Vue](https://www.telerik.com/blogs/hello-vue-a-quick-tutorial-on-getting-started-with-vue)

[Tutorial - Build an instagram clone with vue js and cssgram](https://medium.com/fullstackio/tutorial-build-an-instagram-clone-with-vue-js-and-cssgram-24a9f3de0408)

[Build A Simple Beginner App With Node, Bootstrap & MongoDB](https://www.sitepoint.com/build-simple-beginner-app-node-bootstrap-mongodb/)

[Create a simple weather app using Node.js, Express, and React](https://medium.com/@maison.moa/create-a-simple-weather-app-using-node-js-express-and-react-54105094647a)

[Twitter Sentiment Analysis using NodeJS](https://boostlog.io/@anshulc95/twitter-sentiment-analysis-using-nodejs-5ad1331247018500491f3b6a)

[Installable Web Apps: A Practical Introduction To PWAs with JavaScript and Node.js](https://www.twilio.com/blog/2018/06/installable-web-apps-practical-introduction-progressive-web-apps.html)

[Offline-First with Node.js and Hoodie: A Practical Introduction to Progressive Web Apps](https://dev.to/pmbanugo/offline-first-with-nodejs-and-hoodie-a-practical-introduction-to-progressive-web-apps-5f57)

1. How to use Chrome DevTools to do modern web development right in your browser (50 minute watch): https://www.youtube.com/watch?v=wz1Sy5C039M

2. An overview of Visual Studio Code - Microsoft's open source code editor - for front-end developers (8 minute read): https://medium.freecodecamp.org/49a4aa0771fb

4. How to build Desktop apps in JavaScript: multithreading, SQLite, native modules, and other common Electron pain points (9 minute read): https://medium.freecodecamp.org/1679d5ec0ac

[Ahora puedes implementar tu app de Node.js en el entorno estándar de App Engine](https://developers-latam.googleblog.com/2018/06/blog-de-google-cloud-platform-ahora.html)

[How to deploy a Node.js application to AWS Lambda using Serverless](https://dev.to/adnanrahic/how-to-deploy-a-nodejs-application-to-aws-lambda-using-serverless-2nc7)

[Tu primera Progressive Web App](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
[Demo Progressive Web App](https://github.com/gokulkrishh/demo-progressive-web-app)
[Offline-First Progressive Web Apps (PWA) in Vue.js](https://egghead.io/courses/offline-first-progressive-web-apps-pwa-in-vue-js)

[Create a simple weather app using Node.js, Express, and React](https://medium.com/@maison.moa/create-a-simple-weather-app-using-node-js-express-and-react-54105094647a)

[Como hacer una App Lista de Tareas con Javascript](https://www.youtube.com/watch?v=QEp5MwFneRQ&index=23&list=PLhSj3UTs2_yVC0iaCGf16glrrfXuiSd0G) tutorial dentro de un buen curso Básico de Javascript desde 0

[Build a Serverless Online Quiz with Google Cloud Functions and Cloud Firestore](https://rominirani.com/build-a-serverless-online-quiz-with-google-cloud-functions-and-cloud-firestore-1e3fbf84a7d8)

[Node.js, Express.js, Mongoose.js and Passport.js Authentication](https://www.djamware.com/post/58bd823080aca7585c808ebf/nodejs-expressjs-mongoosejs-and-passportjs-authentication)

[Cómo crear un API REST con autenticacion en 30 segundos](https://www.desarrolloweb.com/articulos/api-rest--autenticacion-jwt.html)

[TodoMVC](http://todomvc.com/) Helping you select an MV* framework

[ggalmazor - Refactoring to functions workshop](https://github.com/ggalmazor/string-calculator-es6-refactor-workshop)

This is a NodeJS project. You should do the following steps build:

NodeJS 6 or greater is required
* `git clone https://github.com/ggalmazor/string-calculator-es6-refactor-workshop.git`
* Enter directory cloned `cd string-calculator-es6-refactor-workshop`
* Download dependencies with `npm install` or `yarn`
* Run the tests with `npm run test` or `yarn test`

If you can follow these steps and you get a report of 7 passing tests, sit back and relax.

[Demystifying JavaScript’s ‘new’ keyword](https://medium.freecodecamp.org/demystifying-javascripts-new-keyword-874df126184c)

[What exactly is Node.js?](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)

[Tutorial : Flutter App powered by Google Cloud Functions](https://rominirani.com/tutorial-flutter-app-powered-by-google-cloud-functions-3eab0df5f957)

[Structuring JavaScript projects for testability](Structuring JavaScript projects for testability)

[10 Tips for Javascript Debugging Like a PRO with Console](https://medium.com/appsflyer/10-tips-for-javascript-debugging-like-a-pro-with-console-7140027eb5f6)

[Iniciación a NodeJS con ejemplos básicos](https://github.com/LuisJoseSanchez/nodejs-iniciacion/blob/master/README.md)

[NodeJS, Express y Jade (Pug). Ejemplos básicos.](https://github.com/LuisJoseSanchez/nodejs-express-jade/blob/master/README.md)

[Aplicaciones de alto rendimiento con Node.js (V). Ejemplos de conexion a BBDD
](https://www.sidertia.com/Home/Community/Blog/2015/04/27/Aplicaciones-de-alto-rendimiento-con-Nodejs-V-Ejemplos-de-conexion-a-BBDD)

[Express.js Tutorial: Building RESTful APIs with Node and Express](https://www.youtube.com/watch?v=pKd0Rpw7O48)

[MONTAR UN API REST CON NODEJS Y EXPRESS](https://www.luisllamas.es/montar-un-api-rest-con-nodejs-y-express/)

[Como crear una API REST usando node express mongoDB](https://carlosazaustre.es/como-crear-una-api-rest-usando-node-js/)

[Iniciación a NodeJS con ejemplos básicos](https://github.com/LuisJoseSanchez/nodejs-iniciacion/blob/master/README.md)

[JavaScript in Half an Hour (Without jQuery!)](https://www.youtube.com/watch?v=zPHerhks2Vg) una demo muy basica y dinamica de como funciona javascript en browser.

[Live Coding a Trello Clone with AngularJS and Node.js (MEAN stack)](https://www.youtube.com/watch?v=ssXqKDS2dlw)

[Implementing SOLID and the onion architecture in Node.js with TypeScript and InversifyJS](https://dev.to/remojansen/implementing-the-onion-architecture-in-nodejs-with-typescript-and-inversifyjs-10ad)

[The Best Explanation of JavaScript Reactivity](https://medium.com/vue-mastery/the-best-explanation-of-javascript-reactivity-fea6112dd80d)

[A complete guide to threads in Node.js](https://blog.logrocket.com/a-complete-guide-to-threads-in-node-js-4fa3898fe74f)

##UI Testing Myths

Myth 1: "Tests always break when I make any changes to the code"
This is actually a truth... if the tests are written incorrectly. If your test is testing implementation details, then of course they’ll break when the implementation changes! But your user doesn’t care about the implementation details. In fact, they don’t even care whether you’re using React, Angular, or jQuery. So for the most part, your tests shouldn’t care about that either. 💯

Unfortunately, many tools out there encourage testing implementation details. Do that and you’ll often wind up rewriting tests. “Why am I even testing this!?” you’ll ask yourself, and I don’t blame you. That’s why on TestingJavaScript.com I show you how test the right way.

Myth 2: "I can’t test a “connected” redux component"
The conventional wisdom of testing components that use Redux is that you should test the component in isolation from Redux, and then test the Redux action creators and reducers separately.

But if you do this, your tests can’t give you any confidence that your components communicate properly with Redux.

Instead, you can actually test your connected component with your real Redux store. Do this, and you’ll get the confidence that your component is rendering properly, and that the Redux action creators and reducers are all working together in tandem. Just like they will in production. ✅

On TestingJavaScript.com, I show you how to test in this way. The same concepts apply for React Router 🔀 and other providers (like the Theme Provider from emotion 👩‍🎤), and the course will show how to apply this method to those, too!

Myth 3: "End-to-End tests are slow and brittle"
This, too, can be true if the tests are written incorrectly. A common mistake I see in E2E testing is doing the same things in every test—for instance, every test going through the whole registration and login flow before doing whatever is needed for the test. When you do stuff like this, you start seeing a lot of duplication, and that’s when you start creating things like “page objects” (which is a poor practice). 😐

On TestingJavaScript.com, I show you how you can get confidence that the registration and login flows are working, and then skip those for the rest of your tests so you can significantly speed up the tests and reduce the points of failure. When you write tests this way and use tools like cypress-testing-library, practices like page objects are totally unnecessary, and your tests are easier to maintain, more reliable, and run faster. You might even find yourself replacing Chrome with Cypress as your development workflow tool (which I show you how to do in the course as well!) 😱

More references:
[Common Myths of Test Automation](https://www.testingexcellence.com/common-myths-test-automation/)

[6 Popular Myths in Test Automation You Must Know](https://www.testbytes.net/blog/6-popular-myths-in-test-automation-you-must-know/)

[Node.js & JavaScript Testing Best Practices](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347)

# Componentes, librerias

[Buefy](https://buefy.org/) Lightweight UI components for Vue.js based on Bulma

[Robot](https://thisrobot.life/) Fast 1kB functional library for creating Finite State Machines

# Herramientas

[Glitch. Online Platform to develop node](https://blog.bitsrc.io/introduction-to-glitch-for-node-js-apps-in-the-cloud-cd263de5683f)

[javascript reporting server](https://jsreport.net/) innovative and unlimited reporting based on javascript templating engines

[Continuous Integration and deployment(CI/CD Pipeline) with Jenkins and Node.js](https://codeforgeek.com/2019/03/continuous-integration-deployment-jenkins-node-js/)

[Nodebook](https://github.com/netgusto/nodebook/blob/master/README.md) is an in-browser REPL supporting many programming languages. Code's on the left, Console's on the right. Click "Run" or press Ctrl+Enter or Cmd+Enter to run your code. Code is automatically persisted on the file system.

[Node.js task runners: Are they right for you?](https://blog.logrocket.com/node-js-task-runners-are-they-right-for-you-bb29ea30b7fa)

[FlexSearch.js](https://github.com/nextapps-de/flexsearch) A Full Text Search Library

[Redux Starter Kit](https://github.com/reduxjs/redux-starter-kit) A simple set of tools to make using Redux easier https://redux-starter-kit.js.org

[What Is Redux: A Designer’s Guide](https://www.smashingmagazine.com/2018/07/redux-designers-guide/)

[Nuxt.js](https://nuxtjs.org/) Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable.

[Chrome DevTools - CSS and JS code coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage)

[Using DevTools from Puppeteer](https://twitter.com/katiehempenius/status/1085742033262837760?s=11)

[Eliminate an entire category of bugs with a few simple tools](https://blog.kentcdodds.com/eliminate-an-entire-category-of-bugs-with-a-few-simple-tools-f0dd2aaf4bc9)

[JavaScript Animation Engine](https://github.com/juliangarnier/anime)

[Using Prettier to Format Your JavaScript Code](https://www.wisdomgeek.com/web-development/using-prettier-format-javascript-code/)

[Noderize](https://github.com/Cretezy/Noderize) Noderize lets you create Node apps in less than 30 seconds. 

[Top JavaScript VSCode Extensions for Faster Development](https://codeburst.io/top-javascript-vscode-extensions-for-faster-development-c687c39596f5)

[Flutter](https://flutter.io)

[Why we chose Flutter and how it’s changed our company for the better.](https://medium.com/@matthew.smith_66715/why-we-chose-flutter-and-how-its-changed-our-company-for-the-better-271ddd25da60)

[How to Use npm as a Build Tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)

[NPM scripts como task runner](https://blog.builtbyedgar.com/npm-scripts-como-task-runner/)

[You do console.log in any place of the code WITHOUT code modification](https://twitter.com/lavrton/status/979649815356166144?refsrc)
With @ChromeDevTools you can create "conditional breakpoint". If you add console.log into the condition, the debugger will not pause, because console.log returns undefined.

[Local Servers with public URLs]
* https://ngrok.com/
* https://serveo.net/

[Everyone can now run JavaScript on Cloudflare with Workers](https://blog.cloudflare.com/cloudflare-workers-unleashed/)

[Deploy your first App with Heroku and Node.js](https://www.youtube.com/watch?v=MxfxiR8TVNU)

[Learn the smart, efficient way to test any JavaScript application](https://testingjavascript.com/)

[jsPDF](https://github.com/MrRio/jsPDF)Client-side JavaScript PDF generation for everyone

[A beginner's guide to continuous integration](https://about.gitlab.com/2018/01/22/a-beginners-guide-to-continuous-integration)

[Complete Node.js Project Setup from Docker to Testing](https://medium.com/@nur_islam/complete-node-js-project-setup-from-docker-to-testing-docker-restfull-apis-with-node-js-9f384e06734a)

## Libros

You don´t know JS: Up Going (Kyle Simpson). 
[Javascript Grammar](http://www.javascriptteacher.com/tmp-057-jsg-dk-II/javascriptgrammar-dark.pdf) was created to speed up the learning process of JavaScript – the language for programming websites, applications and robots!

# Referencias

[Node.js vs Python for a Beginner’s Web App](https://stackify.com/node-js-vs-python-for-a-beginners-web-app/)

[The Definitive Node.js Handbook](https://www.freecodecamp.org/news/quincylarson/node-js-handbook--rSaL0lP34)

[A JavaScript String Methods Cheatsheet](https://gist.github.com/rauschma/c46fc10f671ed5bf14021bc14f101c8d)

3. Did you know that Google has its own JavaScript style guide? It lays out best practices for writing clean, understandable code. Here are some of the highlights (7 minute read): https://fcc.im/2GtBwN3

[Algorithms and data structures implemented in JavaScript with explanations and links to further readings](https://github.com/trekhleb/javascript-algorithms#readme)

[2018 NODE.JS USER STUDY DETAILED REPORT OF FINDINGS](https://nodejs.org/en/user-survey-report/2018-nodejs-user-survey-report.pdf) Node.js is emerging as a universal development framework for digital transformation with a broad diversity of applications. With nearly 10 million Node.js users, three in four users are planning to increase their use of Node.js in the next 12 months. Node users continue to report positive business impact, including improving developer productivity and 
satisfaction and lowering cost.

[Guía Estilo Google para js](https://medium.freecodecamp.org/google-publishes-a-javascript-style-guide-here-are-some-key-lessons-1810b8ad050b)

[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

[Node.js for beginners](http://www.theprojectspot.com/tutorial-post/Node-js-for-beginners-part-1-hello-world/2)

[El libro para principiantes en node.js](https://www.nodebeginner.org/index-es.html)

[Digital Transformation with the Node.js DevOps Stack](https://github.com/jjfalcon/node/blob/master/node-js-devops-stack-transformation.pdf), PayPal, Netflix, and Walmart show the way to do rapid digital transformation of legacy systems

[How Fintonic uses Node.js, MongoDB & Kubernetes to scale](https://community.risingstack.com/how-fintonic-uses-nodejs-mongodb-kubernetes/), es un artículo sobre la arquitectura y escalabilidad de Fintonic.

[kentcdodds](https://github.com/kentcdodds)

https://learnvanillajs.com/roadmap/

This is an excellent path to follow from the very beginning. It's clear and concise and also gives some great suggestions for resources and even project ideas! I think the project ideas in particular are interesting because it's often a ticking point with "what do I make"

While I'm personally a huge fan of just making more and better todo lists, mixing it up is fun too.

https://learnjavascript.online/

This is a comprehensive from-the-beginning interactive experience. It's a book, but it integrates flash cards and excellent interactive code exercises.

It's a remarkable clean presentation and a very effective learning experience.

For us at egghead, it's inspiring and we want to start adding this type of functionality to our courses!

https://learn.co/courses/introduction-to-javascript

This is Flat Iron's introduction to JavaScript, and it is excellent. They give you a free trial, and I'm not sure what the full program costs, but Flat Iron is one of the best bootcamps out there and this course shows it.

https://watchandcode.com/p/practical-javascript

This is a concise free course from Gordon Zhu that provides an excellent entry point for folks new to JS.

https://javascript.info/

This is a free book, and it is a comprehensive intro to JavaScript. It is freshly rewritten and provides an excellent starting point to learning JavaScript.

# Recomendaciones

[How to prevent your Node.js process from crashing](https://medium.com/dailyjs/how-to-prevent-your-node-js-process-from-crashing-5d40247b8ab2). Una promesa sin manejar actualmente provoca un mensaje de aviso, pero en el futuro avisa que provocara el cierre del proceso node con un codigo de salida de error. Este artículo indica como reaccionar por programa a esas promesas sin manejar, por ejemplo enviando la pila de traza a uns servicio de reporting con el objetivo de tener la información y mantener el proceso activo.

[Implementing Feature Flags with Node and React](https://blog.sicara.com/feature-flags-nodejs-continuous-delivery-c245264b52b4)

# Videos/Charlas

[Learn Node.js and start executing JavaScript outside of the browser](https://www.freecodecamp.org/news/getting-started-with-node-js/)

[Can you tell me if your Node app is healthy?](https://www.youtube.com/watch?v=7HoxAeQIck4&feature=youtu.be) #ppt
* npm blocked - https://www.npmjs.com/package/blocked Check if a node event loop is blocked
* [Influx Data](https://www.influxdata.com) integrates real-time analytics, event handling, and time-based data with Open Source plugins
* [Graphana](https://grafana.com/) - A quick way to generate helpful, pre-canned grafana dashboards for Cloudwatch and Graphite

[Node.js En Vivo](https://julianduque.co/tag/node-en-vivo/) Episodios de Node.js en Vivo en Español

[Desarrolla integraciones con bots a través de la plataforma y la API de Hangouts Chat ](https://developers-latam.googleblog.com/2018/03/desarrolla-integraciones-con-bots.html)

[Hacking de Videojuegos con JavaScript](https://www.youtube.com/watch?v=XJJS1HrV2_Y) Recomendada por Bonilla

[Build the future of the web with modern JavaScript (Google I/O ’18)](https://www.youtube.com/watch?v=mIWCLOftfRw)

[Creating an autocomplete component with downshift]()

[How to build your own website](https://www.freecodecamp.org/n/j49MHj8uK)

[MongoDB Node.js, Express.js, and Mongoose (75 minute watch)](https://www.freecodecamp.org/n/ec8iI9oO9)

[MongoDB Tutorial - CRUD app from scratch using Node.js](https://www.freecodecamp.org/news/mongodb-crud-app/)

[Intro to Game Development with JavaScript](https://www.freecodecamp.org/news/beaucarnes/intro-to-game-development-with-javascript--pqogm3nsF)

[UI Testing Myths](https://blog.kentcdodds.com/ui-testing-myths-dfb5f629f20a)
* Myth 1: "Tests always break when I make any changes to the code"
* Myth 2: “I can’t test a ‘connected’ redux component”
* Myth 3: “End-to-End tests are slow and brittle” 

# Ejemplos

[Web development illustrated](https://illustrated.dev/)

[#javascript ES6 cheatsheet — String Templates](https://medium.com/@serbanmihai/javascript-es6-cheatsheet-string-templates-d2de281668f0)

[The Ultimate Guide to JavaScript Algorithms](https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms)

[WhatsApp Clone with Meteor CLI and Ionic](https://angular-meteor.com/tutorials/whatsapp/meteor/bootstrapping)

[Handling Time Zone in JavaScript](https://medium.com/@toastui/handling-time-zone-in-javascript-547e67aa842d)

[Trilium Notes](https://github.com/zadam/trilium) Build your personal knowledge base with Trilium Notes. A Knowledge Base App Built on Express.js (A hierarhical note taking app. Built as an Express app but also includes Electron packaging.)

[Web application used for BilboStack feedback and questions](https://github.com/Sirikon/bilbostack-app)

[introduction to linked lists](https://dev.to/aspittel/thank-u-next-an-introduction-to-linked-lists-4pph)

[Aprende a crear tu propio juego de plataformas estilo Super Mario usando JavaScript con este tutorial](https://www.genbeta.com/web/aprende-a-crear-tu-propio-juego-plataformas-estilo-super-mario-usando-javascript-este-tutorial)

[Build a Basic CRUD App with Vue.js and Node](https://www.sitepoint.com/build-a-basic-crud-app-with-vue-js-and-node/)

[Creating a Reusable Pagination Component in Vue](https://css-tricks.com/creating-a-reusable-pagination-component-in-vue/)

[Creating and Reading QR Codes with Node.js](http://thecodebarbarian.com/creating-qr-codes-with-node-js.html)

[A blockchain in 200 lines of code](https://medium.com/@lhartikk/a-blockchain-in-200-lines-of-code-963cc1cc0e54)

[Blockchain programado con JavaScript](https://www.youtube.com/watch?v=3YFVHAkdVQM&feature=youtu.be)

[Awesome Node.js opensource projects](https://github.com/sqreen/awesome-nodejs-projects)

[Crear una BlockChain en Node.js](https://developers.caffeina.com/chiccocoin-learn-what-is-a-blockchain-by-creating-one-in-nodejs-12929a89208b) sirve para aprender que es una Blockchain, creando una simplificacion con Node.js

[Winamp2-js](http://www.microsiervos.com/archivo/musica/winamp-html5-javascript-codigo-abierto.html) El clásico Winamp 2.9 en HTML5 y JavaScript como código abierto.

[Build a complete mobile app with Ionic 3](https://medium.com/learn-ionic-framework/build-a-complete-mobile-app-with-ionic-3-b69a8bfb0d88)
For this ionic tutorial I built an app with a question and answer format, where users will be able to ask and answer questions. The home page will have a list of categories. Each category will have a list of questions, and each question will have a list of answers. Users will also have the possibility to vote the questions and answers, plus a form for creating questions and answers.

[Friendly Pix](https://github.com/firebase/friendlypix) es un clon de Instagram desarrollado por Google como aplicacion de ejemplo usando Firebase.

[How to Create a Slack App in 3 Minutes](https://x-team.com/blog/create-slack-app-in-3-minutes/)

[A Slack app step by step](https://x-team.com/blog/slack-app-step-by-step/)

[Los 10 mejores ejemplos de aplicaciones Node.js para empresas](http://inubo.es/noticia/los-10-mejores-ejemplos-de-aplicaciones-node-js-para-empresas)

[¿Por qué usar Javascript para el IoT?](http://inubo.es/noticia/por-que-usar-javascript-para-el-iot)

[¿Por qué deberías convertir tu Mobile Site en una aplicación web progresiva (PWA)?](http://inubo.es/noticia/por-que-deberias-convertir-tu-mobile-site-en-una-aplicacion-web-progresiva-pwa)

[Los 10 mejores ejemplos de aplicaciones Node.js para empresas](http://inubo.es/noticia/los-10-mejores-ejemplos-de-aplicaciones-node-js-para-empresas)

[Calculadoras online](https://hipertextual.com/2018/03/calculadoras-online/amp)

1. How to build your own 8-Ball Pool game from scratch using JavaScript and HTML5 - a comprehensive video tutorial (1 hour watch): https://www.youtube.com/watch?v=aXwCrtAo4Wc

2. JavaScript symbols, iterators, generators, async/await, and async iterators — all explained simply (14 minute read): https://medium.freecodecamp.org/4003d7bbed32

3. How to use JavaScript Regular Expressions to rapidly search through text (12 minute read): https://medium.freecodecamp.org/48b46a68df29

4. How to code your own YouTube app: a full YouTube API tutorial with code examples (1 hour watch): https://www.youtube.com/watch?v=9sWEecNUW-o

[Building a Snipping Tool with Electron, React and Node.js](https://quantizd.com/building-a-snipping-tool-with-electron-react-and-node-js/)

[Creating an Instagram Bot With Node.js](https://hackernoon.com/how-to-create-an-instagram-bot-with-node-js-a289185a7d6f)

[Aprende a crear tu propio videojuego en el navegador usando JavaScript gracias a este curso gratuito intensivo](https://m.genbeta.com/web/aprende-a-crear-tu-propio-videojuego-navegador-usando-javascript-gracias-a-este-curso-gratuito-intensivo/amp)

[Functional JS](https://medium.com/dailyjs/functional-js-1-introduction-7908bfe5ef8d)

# Google Chrome Extensions

[Getting Started Tutorial](https://developer.chrome.com/extensions/getstarted)
This tutorial will build an extension that allows the user to change the background color of any page on developer.chrome.com. It will use many core components to give an introductory demonstration of their relationships.

[How to Create and Publish a Chrome Extension in 20 minutes](https://medium.freecodecamp.org/how-to-create-and-publish-a-chrome-extension-in-20-minutes-6dc8395d7153)
Follow these steps and your idea will turn into reality and you’ll be able to publish a real extension in the Chrome Web Store in no time.

[Create a Chrome Extension in 90 Seconds](https://egghead.io/lessons/chrome-create-a-chrome-extension-in-90-seconds)
Creating a Chrome extension requires a manifest.json file which defines how your extension will behave. With a minimal setup, you can already manipulate pages and change elements. This lesson walks you through creating a manifest.json file which will essentially "block" twitter and reddit and tell you to get back to work.

# WEB static
[Cómo he migrado este blog de WordPress a Gatsby](https://asiermarques.com/2019/de-wordpress-a-gatsby/)


