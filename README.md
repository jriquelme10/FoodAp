
![Logo](https://mcro.tech/static/efa25805d3c7c3f67bf317cf27af3eb5/3bf79/react-native-banner-min.png)


# Proyecto restaurant Colo-Colo FRONTEND.

Proyecto realizado por estudiantes de la UCN Antofagasta para la asignatura DSM.
Esta aplicación se basa en el entorno de un restaurant, y su función principal es listar un pedido de productos
el cual llegará a un entorno web, donde se podrá atender.






## Instalación

En primera instancia es necesario que utilices algún gestor de paquetes
como npm o yarn para que puedas instalar las dependencias de la aplicación. Para ello corre
en la terminal del proyecto:

```bash
  npm install

  Ó

  yarn install
```

Luego de realizar la instalación de los módulos, podrás correr la aplicación
tanto en IOS como en Android, para ello con el emulador abierto escribiremos lo siguiente:
```bash
  npm start

  Ó

  yarn android //ejecución directa al emulador android.
  yarn ios //ejecución directa al emulador IOS.

```
Y de esta forma tendrías la aplicación corriendo en tu emulador, 
en el caso de que aún falten dependencias por instalar, solo corre:
```bash
  npm install nombre_de_la_dependencia

  Ó

  yarn add nombre_de_la_dependencia
```
## Incorporación de la URL del backend para el manejo del API.
Para ello, es necesario que primero tengas corriendo el BACKEND con el
siguiente comando:

```bash
  php artisan serve --host='0.0.0.0'
```
Esto determinará que la dirección ip de tu localhost será la establecida por tu conexión de red.

```bash
  192.168.0.15:8000 //Ejemplo de dirección.
```
Esta dirección IP deberas ingresarla en el archivo `URL_API.js` en la carpeta del proyecto:

```bash
  import React from "react";
  const IP = "TU DIRECCIÓN IP";
  export const URLBASE = "http://" + `${IP}`;
```
