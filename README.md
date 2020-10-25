
## Fintech-project

# FinSave

Repositorio Proyecto Final DAW-EOI Rincón de la Victoria 2020

---

## Indice

1. [Visión General](#visión-general)
2. [Objetivos](#objetivos)
3. [Funcionalidades](#funcionalidades)
    - [Básicas](#básicas)
    - [Avanzadas](#avanzadas)
    - [Futuras](#futuras)
4. [Desarrollo Frond End](#desarrollo-frond-end)
    - [Tecnologias Usadas](#tecnologias-usadas)
    - [Prototipo](#prototipo)
    - [Mapa web](#mapa-web)
    - [Esquema de Flujo](#esquema-de-flujo)
5. [Desarrollo Back End](#desarrollo-frond-end)
    - [Tecnologias Usadas](#tecnologias-usadas)
    - ...
6. [Mapa Web](#mapa-web)
7. [Análisis API](#análisis-api)
    - [Identificación de Recursos](#identificación-de-recursos)
    - [Definición de los Recursos](#definición-de-los-recursos)
    - [Endpoints](#endpoints)
  

# Visión General

Debemos  crear una aplicación que ofrezca a los clientes la posibilidad de gestionar de forma agradable sus ahorros y gastos.

# Objetivos

Crear un MVP, en el que los usuarios puedan registrarse en la aplicación, se puedan realizar operaciones de registro, actualización y borrado de gastos e ingresos, pudiendo estos ser categorizados según un tipo de gasto o ingreso.

Para que la web sea rentable...(en proceso)

# Funcionalidades

## Básicas 

- Agregar, editar y eliminar gastos e ingresos.
- Listar ingresos y gastos por días, meses y años.
- Filtrar ingresos y gastos por categoria.


## Avanzadas

- Gráfico con el balance de situación.
- Barras de objetivos para los ahorros.

## Futuras

- Añadir conexiones a bancos.
- Añadir tarjetas de fidelización.
- Exportación datos a pdf o excel.

# Desarrollo Frond End

### Tecnologías usadas (PROVISIONAL):

<img src="https://img.icons8.com/color/48/000000/vue-js.png"/><img src="https://img.icons8.com/color/48/000000/bootstrap.png"/><img src="https://img.icons8.com/color/48/000000/html-5.png"/><img src="https://img.icons8.com/color/48/000000/css3.png"/><img src="https://img.icons8.com/color/48/000000/javascript-logo-1.png"/><img src="https://img.icons8.com/color/48/000000/npm.png"/>

### Prototipo
[Figma Prototipo](https://www.figma.com/proto/ydsyr2pvcXDMjapnetpt85/FinSave?node-id=4%3A2&viewport=384%2C633%2C0.15365014970302582&scaling=contain)


### Mapa Web
<p align="center">
<img src="https://i.ibb.co/Nxy4wTq/Mapa-web.png" alt="Mapa-web" border="0">
</p>

### Esquema de Flujo
<p align="center">
<img src="https://i.ibb.co/mXFdMTK/Flujo-web.png" alt="Flujo-web" border="0">
</p>

# Desarrollo Back End

### Tecnologías usadas (PROVISIONAL):

<img src="https://img.icons8.com/color/48/000000/nodejs.png"/><img src="https://img.icons8.com/color/48/000000/npm.png"/>

# Mapa Web (En proceso)

# Análisis API

## Identificación de Recursos

  - Usuarios
  - Movimientos
  - Categorías

## Definición de los Recursos

- Usuario (Schema):
    - ID[number]
    - Nombre [string]
    - Apellidos [string]
    - Email [string]
    - Contraseña [string]
    - Activo [boolean]

- Movimientos (Schema):
    - ID[number]
    - userID[number]
    - Categoría[string]
    - Descripción[string]
    - icono[string]
    - Cantidad[number]
    - Fecha|hora[string]
    - Comentario[string]
    - Tipo[cadena]
    - Recurrente[boolean]

- Categorías (Schema):
    - ID[number]
    - nombre[string]
    - tipo[string]
    - image[string]

## Endpoints

### Usuarios

| VERBO   |      RUTA      |  ACCESO |
|----------|:-------------:|------:|
| GET |  /users/:userId | USER |
| POST |    /users   |   PUBLIC |
| PUT | /users/:userId |   USER |
| DELETE | /users/:userId |   USER(owner) |

---

### Movimientos

| VERBO   |      RUTA      |  ACCESO |
|----------|:-------------:|------:|
| GET |  /movement | USER |
| GET |  /movement/:movementid  | USER |
| POST | /movement | USER |
| PUT | /movement/:movementid | USER |
| DELETE | /movement/:movementid | USER |

---

### Categorias


| VERBO   |      RUTA      |  ACCESO |
|----------|:-------------:|------:|
| GET |  /category | USER |

---

### Autentificación

| VERBO   |      RUTA      |  ACCESO |
|----------|:-------------:|------:|
| GET |  /auth/login | PUBLIC |
| POST |  /auth/fogotten-password  | PUBLIC |





