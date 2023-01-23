<h3 align="center">Hola soy Nicolás 👋</h3>

En este repositorio he creado una API REST que permite realizar operaciones CRUD (crear, leer, actualizar y eliminar) de un usuario. La API está construida utilizando Node.js, Express.js y MongoDB. Además, he utilizado una estructura de carpetas MVC/MC para organizar mucho mejor el código, si quieres utilizar este repositorio te dejo abajo las intrucciones.
#
### Cómo utilizar este repositorio: instrucciones paso a paso.
>Paso 1: Instalación de dependencias.
- Clone el repositorio y luego ejecute.
```
npm install
```

#

>Paso 2: Vincular la API a MongoDB.
- Crearemos el archivo .env.

[![Captura-de-Pantalla-2023-01-23-a-la-s-19-33-28.png](https://i.postimg.cc/kMRY2hVP/Captura-de-Pantalla-2023-01-23-a-la-s-19-33-28.png)](https://postimg.cc/6TwfScLM)

- Reemplazamos ***NombreDatabase*** por el nombre de su base de datos.
- El numero del ***Port*** lo puedes dejar por defecto o utilizar el que tu quieras.

#

>Paso 3: Inicia tu proyecto.
- Para iniciar su proyecto, simplemente escriba uno de los 2 comandos:
```
npm run dev
```
```
nodemon app.js
```
- Lo que se lograra con esto es que su API se ejecutará en el puerto que usted haya puesto, en mi caso en el 3001.

[![Captura-de-Pantalla-2023-01-23-a-la-s-19-48-11.png](https://i.postimg.cc/PJ1BY65y/Captura-de-Pantalla-2023-01-23-a-la-s-19-48-11.png)](https://postimg.cc/V0LGcWM0)

#

>Paso 4: Prueba las diferentes rutas de la API.
 
 Esta es una API que administra usuarios. Un usuario se caracteriza por:

- nombre: el nombre del usuario.
- correo: el correo del usuario.
- password: la contraseña del usuario.

 Tenemos un total de 5 rutas.

- Agregar usuario http://localhost:3001/api/usuarios/registrar
- Lista de todos los usuario http://localhost:3001/api/usuarios/usuarios
- Buscar jugador por correo http://localhost:3001/api/usuarios/ver/:correo
- Actualizar el usuario http://localhost:3001/api/usuarios/actualizar/:correo
- Eliminar usuario http://localhost:3001/api/usuarios/eliminar/:correo

#

>Ejemplo de la API. 

- Registrar usuario.

[![Captura-de-Pantalla-2023-01-23-a-la-s-20-15-44.png](https://i.postimg.cc/fWj3wMw3/Captura-de-Pantalla-2023-01-23-a-la-s-20-15-44.png)](https://postimg.cc/hhv4sWQg)

- Ver usuarios.

[![Captura-de-Pantalla-2023-01-23-a-la-s-20-17-28.png](https://i.postimg.cc/yY8Ns9Q5/Captura-de-Pantalla-2023-01-23-a-la-s-20-17-28.png)](https://postimg.cc/w3nzktdc)

- Buscar usuario.

[![Captura-de-Pantalla-2023-01-23-a-la-s-20-19-35.png](https://i.postimg.cc/zXQqNQRb/Captura-de-Pantalla-2023-01-23-a-la-s-20-19-35.png)](https://postimg.cc/bs17H3gp)

- Actualizar usuario.

[![Captura-de-Pantalla-2023-01-23-a-la-s-20-22-18.png](https://i.postimg.cc/FKZqrfnW/Captura-de-Pantalla-2023-01-23-a-la-s-20-22-18.png)](https://postimg.cc/cKvTTJWw)

- Eliminar usuario.

[![Captura-de-Pantalla-2023-01-23-a-la-s-20-22-57.png](https://i.postimg.cc/t4ty64MP/Captura-de-Pantalla-2023-01-23-a-la-s-20-22-57.png)](https://postimg.cc/3kRP5Y7J)

