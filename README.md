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

![grafico19](https://i.imgur.com/2HRfjIY.png)


![grafico19](https://i.imgur.com/NULXXaj.png)

![grafico19](https://i.imgur.com/4VuwGfn.png)

![grafico19](https://i.imgur.com/wdqObsz.png)

![grafico19](https://i.imgur.com/4zNKi1w.png)

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
