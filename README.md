#  Construir una API que utilice bases de datos NoSQL con Mongoose.

**Estudiante:** _Ordoñez Cabrera Kevin Lenin_  

**Fecha de entrega:** _29/06/2025_

**Asignatura:** _Aplicaciones Distribuidas_

**Carrera:** Ingeniería en Tecnologías de la Información

---

##  Resumen
Se implementó una API RESTful utilizando el framework Express.js de Node.js, en conjunto con la base de datos NoSQL MongoDB y el ORM Mongoose. El desarrollo contempló una arquitectura modular compuesta por modelos, rutas, controladores y servidor principal, lo que permitió realizar operaciones CRUD sobre una colección denominada usuarios.

Esta práctica permitió aplicar los principios fundamentales del desarrollo backend moderno, integrando herramientas eficientes para la creación de servicios web con acceso estructurado a bases de datos.

**Palabras Claves:** Mongoose, APi RESTful y NoSQL.


##  Introducción

En el desarrollo de aplicaciones modernas, las APIs RESTful representan un componente fundamental para la comunicación entre sistemas. Estas permiten exponer servicios de manera eficiente, segura y estructurada, facilitando la integración entre frontend y backend. En este laboratorio se abordó la construcción de una API RESTful utilizando tecnologías del entorno Node.js, específicamente el framework Express y la base de datos NoSQL MongoDB.

El propósito principal fue implementar una solución backend que permita realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una colección de usuarios, empleando el ORM Mongoose para interactuar con la base de datos. Además, se aplicaron buenas prácticas de organización del código, separación por capas (modelo, rutas, controladores) y validación del funcionamiento a través de herramientas como Postman y MongoDB Compass.

##  Objetivos
- Configurar un entorno de desarrollo con Node.js y Express.js.

- Integrar MongoDB como sistema de almacenamiento NoSQL.

- Utilizar Mongoose para definir esquemas y gestionar la conexión con la base de datos.

- Implementar y probar operaciones de creación, lectura, actualización y eliminación.

- Validar el funcionamiento de los endpoints utilizando Postman.


##  Marco Teórico

###  - API RESTful
Una API RESTful (Application Programming Interface) es un conjunto de reglas y convenciones que permiten la comunicación entre diferentes aplicaciones utilizando el protocolo HTTP. REST (Representational State Transfer) es un estilo de arquitectura que promueve el uso de operaciones estándar como GET, POST, PUT y DELETE para manipular recursos. Las APIs RESTful son ampliamente utilizadas en el desarrollo web moderno por su simplicidad, escalabilidad y compatibilidad con múltiples plataformas.

###  - Node.js y Express.js
Node.js es un entorno de ejecución para JavaScript del lado del servidor, que permite construir aplicaciones escalables y eficientes. Su arquitectura basada en eventos y su modelo de entrada/salida no bloqueante lo hacen ideal para aplicaciones en tiempo real y servicios web.

Express.js es un framework web minimalista para Node.js que facilita la creación de servidores HTTP y APIs. Proporciona herramientas y funciones para gestionar rutas, middlewares, solicitudes y respuestas, permitiendo un desarrollo rápido y estructurado.

###  - MongoDB
MongoDB es un sistema de gestión de bases de datos NoSQL orientado a documentos. En lugar de usar tablas y registros como en las bases relacionales, MongoDB almacena los datos en estructuras tipo JSON llamadas documentos, dentro de colecciones. Esta flexibilidad permite un diseño más ágil y escalable, ideal para aplicaciones con esquemas dinámicos.

###  - Mongoose
Mongoose es una biblioteca de modelado de objetos MongoDB para Node.js. Funciona como un ORM (Object Relational Mapping), aunque orientado a documentos, permitiendo definir esquemas para las colecciones y facilitando la validación, conversión y consulta de datos. Mongoose abstrae muchas operaciones complejas de MongoDB y ofrece una interfaz clara y consistente para interactuar con la base de datos.

## Descripción del Procedimiento

#### 1. Configuración del entorno
Se inició creando la carpeta del proyecto y utilizando el comando npm init -y para generar el archivo package.json. Posteriormente, se instalaron las dependencias necesarias: express para el servidor web y mongoose como ORM para interactuar con MongoDB.


![Descripción](https://i.imgur.com/4937dF5.png)


![grafico2](https://i.imgur.com/4pdsaP4.png)


![grafico3](https://i.imgur.com/hQyzf0E.png)


#### 2. Definición de la estructura del proyecto
Se organizó el proyecto en carpetas separadas: models para los esquemas de datos, controllers para la lógica de negocio, routes para los endpoints de la API, y un archivo principal index.js que contiene la configuración y puesta en marcha del servidor.

![grafico4](https://i.imgur.com/lWe9Pg1.png)


#### 3. Conexión con MongoDB
Se configuró la conexión a la base de datos MongoDB mediante Mongoose en un archivo db.js. Se utilizó la dirección mongodb://127.0.0.1:27017/miBaseDeDatos, correspondiente a una base local, asegurando que el servicio estuviera activo. La conexión fue probada y verificada mediante mensajes de consola.

![grafico5](https://i.imgur.com/5v6z5gI.png)

![grafico6](https://i.imgur.com/XKbCacF.png)

#### 4. Creación del modelo de datos
Se definió un esquema de usuario en User.js, con los campos name, email y createdAt. Mongoose gestionó automáticamente la creación de la colección usuarios en la base de datos.

![grafico7](https://i.imgur.com/w1m3tnq.png)

#### 5. Implementación de los controladores
Se desarrollaron funciones en userController.js para gestionar las operaciones CRUD: obtener todos los usuarios, crear uno nuevo, buscar por ID, actualizar y eliminar. Estas funciones interactuaban directamente con el modelo definido.

![grafico8](https://i.imgur.com/2dpxjTB.png)

![grafico9](https://i.imgur.com/DJtDTnO.png)


#### 6. Definición de las rutas
En userRoutes.js se declararon las rutas que respondían a las solicitudes HTTP (GET, POST, PUT, DELETE) y se asociaron a las funciones correspondientes del controlador.

![grafico10](https://i.imgur.com/eEwzvbd.png)


#### 7. Configuración del servidor
El servidor Express fue configurado en index.js, integrando los middlewares necesarios, las rutas definidas y estableciendo el puerto 3000 como punto de entrada.

![grafico11](https://i.imgur.com/Mp9JsHL.png)


#### 8. Pruebas con Postman
Se utilizó la herramienta Postman para realizar pruebas a los endpoints de la API. Se enviaron solicitudes con datos JSON y se observaron las respuestas del servidor, verificando que las operaciones CRUD funcionaran correctamente.

_Método Post para agregar un usuario_
![grafico12](https://i.imgur.com/9YR7MWh.png)


_Método Get para ver todos los usuarios_
![grafico13](https://i.imgur.com/shEtJBK.png)


_Método Get para obtener un usuario por su ID_
![grafico14](https://i.imgur.com/8mkKJ7N.png)


_Método Put para actualizar un usuario por su ID_
![grafico15](https://i.imgur.com/rCQclsn.png)


_Método Delete para eliminar un usuario por su ID_
![grafico16](https://i.imgur.com/9PjbDQL.png)


#### 9. Verificación en MongoDB Compass
Finalmente, se accedió a MongoDB Compass para visualizar la base de datos miBaseDeDatos y comprobar que la colección usuarios contenía los documentos creados, modificados o eliminados durante las pruebas.

_Verificación de la inserción de datos del usuario_
![grafico17](https://i.imgur.com/qGFALM5.png)

_Verificación de la actualización del usuario; el nombre fue actualizado correctamente._
![grafico18](https://i.imgur.com/oX85lBR.png)


_Verificación de la eliminación del único usuario._
![grafico19](https://i.imgur.com/G77nunf.png)



## Análisis de Resultados
La implementación de la API RESTful permitió observar resultados concretos y funcionales en el manejo de operaciones sobre la base de datos MongoDB. A través de las pruebas realizadas en Postman y la verificación en MongoDB Compass, se confirmó que cada uno de los endpoints ejecutó correctamente las acciones previstas en el diseño del sistema.

Durante el proceso, se logró establecer una conexión estable con la base de datos local mediante Mongoose, lo que permitió abstraer operaciones complejas y centrarse en la lógica de negocio. Las pruebas con POST, GET, PUT y DELETE reflejaron respuestas HTTP apropiadas (códigos 200, 201, 400 y 404 según el caso), confirmando que el servidor manejaba correctamente tanto las solicitudes válidas como los errores esperados.

En general, los resultados obtenidos fueron satisfactorios y demostraron la correcta integración entre los distintos componentes de la API, validando la funcionalidad del sistema tanto a nivel de servidor como en la persistencia de datos.


## Discusión
El uso de Mongoose resultó ser una herramienta clave, ya que ofreció una forma sencilla y ordenada de definir modelos, manejar esquemas y realizar operaciones sobre los datos sin necesidad de escribir consultas nativas en MongoDB. Esto permitió centrarse en la lógica de negocio y en la correcta respuesta a las solicitudes HTTP.

Otro aspecto importante observado fue el comportamiento de MongoDB al no crear colecciones vacías, lo cual pudo generar confusión al buscar la colección usuarios sin haber insertado ningún documento. Este detalle reafirma la necesidad de conocer a profundidad las herramientas utilizadas y sus comportamientos predeterminados.

## Conclusiones
**1.** Se logró implementar correctamente una API RESTful utilizando Express.js como framework web y MongoDB como sistema de base de datos NoSQL, cumpliendo con los requerimientos funcionales establecidos.

**2.** El uso de Mongoose como ORM facilitó la definición de esquemas, la gestión de documentos y la abstracción de operaciones complejas sobre la base de datos, promoviendo un desarrollo más estructurado y legible.

**3.** La estructura modular del proyecto, separando modelos, controladores y rutas, permitió una mejor organización del código y facilitó su mantenimiento.

## Recomendaciones

**1.** Aplicar control de errores más detallado en cada endpoint para mejorar la retroalimentación al cliente en caso de fallos o datos inválidos.

**2.** Utilizar MongoDB Compass como herramienta de apoyo visual, ya que permite verificar fácilmente si los documentos están siendo almacenados, actualizados o eliminados.

**3.** Verificar correctamente la conexión a la base de datos antes de iniciar el servidor, especialmente asegurándose de que el servicio de MongoDB esté activo y que la URI de conexión sea correcta (127.0.0.1 en lugar de localhost)
