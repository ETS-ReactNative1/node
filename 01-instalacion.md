# Instalacion
El entorno de node permite ejecutar/interpretar codigo js (javascript) en un equipo, para lo cual se necesita
- Instalar editor de código 
- Instalar runtime node.js

## Instalar editor de código
El editor se utiliza para escribir el codigo js. Con un simple editor de texto es suficiente. Cada sistema operativo tiene distintos editores, y ultimamente hay una serie de editores multiplataforma recomendados para programadores por incluir herramientas muy potentes y productivas como las siguientes:
- [VisualStudioCode](https://code.visualstudio.com/) es un editor opensource liberado por Microsoft muy utilizado
- [Atom](https://atom.io/) es un editor opensource algo menos utilizado

Los ficheros creados con estos editores contienen el codigo fuente del programa, y son ficheros con extension js 
El ciclo de trabajo es editar el fichero, salvarlo en un fichero y finalmente ejecutarlo con el runtime.

## Instalar runtime node.js

Los ficheros de codigo fuente es simplemente javascript. El runtime node.js interpreta y ejecuta tus ficheros js.
Node.js se distribuye como ficheros binarios para instalar en distintos sistemas operativos (Windows, Linux, Mac). 
Descargar la última version del binario para cada sistema operativo desde [Node.js downloads](nodejs.org/download/) y seguir las instrucciones para cada sistema operativo tal como se presenta a continuación:

### Instalacion Windows
Usar el fichero instalador msi y seguir las instrucciones del propio instalador para instalar node.js. Por defecto el instalador instala node en el directorio C:\Program Files\nodejs. El instalador actualiza PATH del entorno con directorio C:\Program Files\nodejs\bin. Inicializar línea de comandos abierta para reflejar los cambios.

[Setting Up Windows to Build and Run Node.js Applications ](https://spin.atomicobject.com/2018/06/18/windows-node-js/)

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
### Verificar instalacion ejecutando HelloWorld.js para cualquier instalación:
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
