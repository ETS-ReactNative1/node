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

Cuando accedemos a [http://localhost:8080](http://localhost:8080) veremos un contador de vistas. El contador aumenta de dos en dos, porque en cada peticion del navegador, también se pide el favicon desde el servidor (http://localhost:8080/favicon.ico). Igualmente el servidor presenta en pantalla dos mensajes por cada petición del navegador.

# Referencias
[Node.js for beginners](http://www.theprojectspot.com/tutorial-post/Node-js-for-beginners-part-1-hello-world/2)

[El libro para principiantes en node.js](https://www.nodebeginner.org/index-es.html)

[Winamp2-js](http://www.microsiervos.com/archivo/musica/winamp-html5-javascript-codigo-abierto.html) El clásico Winamp 2.9 en HTML5 y JavaScript como código abierto.


