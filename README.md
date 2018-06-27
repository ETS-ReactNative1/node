# node
Este tutorial node.js recoge toda la información relevante para el desarrollo en este entorno de desarrollo.

# Instalacion
El entorno de node permite ejecutar/interpretar codigo js (javascript) en un equipo, para lo cual se necesita a) instalar un editor b) instalar el runtime node.js.

## Instalacion editor
El editor se utiliza para escribir el codigo js. Con un simple editor de texto es suficiente. Cada sgit istema operativo tiene distintos editores, y ultimamente hay una serie de editores multiplataforma recomendados para programadores por incluir herramientas muy potentes y productivas como las siguientes:

[VisualStudioCode](https://code.visualstudio.com/) es un editor opensource liberado por Microsoft muy utilizado

[Atom](https://atom.io/) es un editor opensource algo menos utilizado

Los ficheros creados con estos editores contienen el codigo fuente del programa, y son ficheros con extension js 
El ciclo de trabajo es editar el fichero, salvarlo en un fichero y finalmente ejecutarlo con el runtime.

## Instalacion runtime node.js

Los ficheros de codigo fuente es simplemente javascript. El runtime node.js interprete y ejecuta tus ficheros js.
Node.js se distribuye como ficheros binarios para instalar en distintos sistemas operativos (Windows, Linux, Mac). 

Descargar la última version del binario para cada sistema operativo desde [Node.js downloads](nodejs.org/download/)

### Instalacion Windows
Usar el fichero instalador msi y seguir las instrucciones del propio instalador para instalar node.js. Por defecto el instalador instala node en el directorio C:\Program Files\nodejs. El instalador actualiza PATH del entorno con directorio C:\Program Files\nodejs\bin. Inicializar línea de comandos abierta para reflejar los cambios.

### Instalacion Unix/Linux/Mac
Descargar el fichero basado en tu arquitectura, extraerlo en un directorio temporal, y finalmente moverlo al directorio /usr/local/nodejs, con los siguientes comandos:

```
$ cd /tmp
$ wget http://nodejs.org/dist/v6.3.1/node-v6.3.1-linux-x64.tar.gz
$ tar xvfz node-v6.3.1-linux-x64.tar.gz
$ mkdir -p /usr/local/nodejs
$ mv node-v6.3.1-linux-x64/* /usr/local/nodejs
```
Finalmente actualizar el path para acceder a node de forma global:

`export PATH=$PATH:/usr/local/nodejs/bin`

### Instalacion Mac

La instalación en Mac de node y npm se recomienda seguir la instalación desde su [web](https://nodejs.org/es/download/), o como [recomendamos](https://medium.com/javascript-comunidad/c%C3%B3mo-instalar-node-js-y-npm-en-mac-9d80f26fb88d) con Homebrew mediante los siguientes pasos:

Instalar Homebrew con el siguiente comando en la terminal:

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Homebrew es un gestor de paquetes para Mac al estilo de apt-get en Linux. Para instalar node usar los comandos:

```
brew install node    // Instalar node escribiendo en terminal
node -v              // comprobar version node instalada
npm -v               // comprobar version npm instalada

brew update          // Actualizar Homebrew a la ultima version
brew upgrade node    // Actualizar node
brew uninstall node  // Desinstalar node
```
### Verificar instalacion ejecutando HelloWorld.js
Crear fichero hello.js con el siguiente codigo:
```
$ echo 'console.log("Hello, World!");' > hello.js
```
o editar fichero con un editor con el siguiente codigo:
```
console.log("Hello, World!")
```
finalmente ejecutar el fichero con el siguiente comando:
```
$ node hello.js
Hello, World!
```
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

[What is a JavaScript test?](https://www.javascriptjanuary.com/blog/but-really-what-is-a-javascript-test)

[Curso de Testing Javascript Moderno](http://www.etnassoft.com/2013/10/16/curso-de-testing-javascript-moderno-parte-1-introduccion-y-herramientas/)

[Lo mejor y peor de Mocha y de los unit tests en JavaScript](https://solidgeargroup.com/mocha-unit-tests-en-javascript?lang=es)

[A TDD Approach to Building a Todo API Using Node.js and MongoDB](https://semaphoreci.com/community/tutorials/a-tdd-approach-to-building-a-todo-api-using-node-js-and-mongodb)

[End to End Testing with Google's Puppeteer and Jest](https://egghead.io/courses/end-to-end-testing-with-google-s-puppeteer-and-jest)

[Pruebas asíncronas en node.js](http://pinchito.es/2013/pruebas-asincronas.html)

[An Async Example](https://facebook.github.io/jest/docs/es-ES/tutorial-async.html#)

[Jest. Matchers](https://doc.ebichu.cc/jest/docs/es-ES/using-matchers.html#content)

[Testing Asynchronous Code](https://doc.ebichu.cc/jest/docs/en/asynchronous.html)

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

# TODO

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

# Herramientas

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

# Referencias

[Algorithms and data structures implemented in JavaScript with explanations and links to further readings](https://github.com/trekhleb/javascript-algorithms#readme)

[2018 NODE.JS USER STUDY DETAILED REPORT OF FINDINGS](https://nodejs.org/en/user-survey-report/2018-nodejs-user-survey-report.pdf) Node.js is emerging as a universal development framework for digital transformation with a broad diversity of applications. With nearly 10 million Node.js users, three in four users are planning to increase their use of Node.js in the next 12 months. Node users continue to report positive business impact, including improving developer productivity and 
satisfaction and lowering cost.

[Guía Estilo Google para js](https://medium.freecodecamp.org/google-publishes-a-javascript-style-guide-here-are-some-key-lessons-1810b8ad050b)

[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

[Node.js for beginners](http://www.theprojectspot.com/tutorial-post/Node-js-for-beginners-part-1-hello-world/2)

[El libro para principiantes en node.js](https://www.nodebeginner.org/index-es.html)

[Digital Transformation with the Node.js DevOps Stack](https://github.com/jjfalcon/node/blob/master/node-js-devops-stack-transformation.pdf), PayPal, Netflix, and Walmart show the way to do rapid digital transformation of legacy systems

[How Fintonic uses Node.js, MongoDB & Kubernetes to scale](https://community.risingstack.com/how-fintonic-uses-nodejs-mongodb-kubernetes/), es un artículo sobre la arquitectura y escalabilidad de Fintonic.

# Recomendaciones

[How to prevent your Node.js process from crashing](https://medium.com/dailyjs/how-to-prevent-your-node-js-process-from-crashing-5d40247b8ab2). Una promesa sin manejar actualmente provoca un mensaje de aviso, pero en el futuro avisa que provocara el cierre del proceso node con un codigo de salida de error. Este artículo indica como reaccionar por programa a esas promesas sin manejar, por ejemplo enviando la pila de traza a uns servicio de reporting con el objetivo de tener la información y mantener el proceso activo.

# Videos/Charlas

[Hacking de Videojuegos con JavaScript](https://www.youtube.com/watch?v=XJJS1HrV2_Y) Recomendada por Bonilla

[Build the future of the web with modern JavaScript (Google I/O ’18)](https://www.youtube.com/watch?v=mIWCLOftfRw)

# Ejemplos

[Build a Basic CRUD App with Vue.js and Node](https://www.sitepoint.com/build-a-basic-crud-app-with-vue-js-and-node/)

[A blockchain in 200 lines of code](https://medium.com/@lhartikk/a-blockchain-in-200-lines-of-code-963cc1cc0e54)

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

