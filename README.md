# Prueba Técnica: Empleados y Departamentos

Este proyecto es una aplicación web full stack para la gestión de empleados y departamentos.

## Tecnologías utilizadas

- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT
- **Frontend**: Angular (Standalone Components), Bootstrap
- **Base de datos**: MongoDB

## Funcionalidades

### Autenticación
- Inicio de sesión con usuario y contraseña.
- Generación y uso de token JWT.
- Protección de rutas en frontend y backend.

### Gestión de empleados
- Crear nuevo empleado.
- Listar empleados.
- Editar empleado existente.
- Eliminar empleado.

### Gestión de departamentos
- Crear nuevo departamento.
- Listar departamentos.
- Editar departamento existente.
- Eliminar departamento.

## Instalación y configuración

### Requisitos previos
- Node.js v18+
- MongoDB en ejecución

### Variables de entorno

En el directorio `backend`, crea un archivo `.env` con el siguiente contenido:

```
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/empleados_db
JWT_SECRET=una_clave_segura
```

### Instalación

#### Backend
```bash
cd backend
npm install
npm run dev
```

#### Frontend
```bash
cd frontend
npm install
ng serve -o
```

## Uso

1. Iniciar el backend (`npm run dev` en la carpeta backend).
2. Iniciar el frontend (`ng serve -o` en la carpeta frontend).
3. Acceder a `http://localhost:4200`.
4. Iniciar sesión con las credenciales de administrador:

```
Usuario: admin
Contraseña: 123456
```

## Endpoints principales

### Autenticación
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/register` - Registrar usuario

### Empleados
- `GET /api/empleados` - Listar empleados
- `POST /api/empleados` - Crear empleado
- `PUT /api/empleados/:id` - Editar empleado
- `DELETE /api/empleados/:id` - Eliminar empleado

### Departamentos
- `GET /api/departamentos` - Listar departamentos
- `POST /api/departamentos` - Crear departamento
- `PUT /api/departamentos/:id` - Editar departamento
- `DELETE /api/departamentos/:id` - Eliminar departamento

## Modelos de datos

### Empleado
```javascript
{
  codigo: Number,
  nombre: String,
  apellido1: String,
  apellido2: String,
  codigo_departamento: Number
}
```

### Departamento
```javascript
{
  codigo: Number,
  nombre: String
}
```

## Scripts disponibles

### Backend
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

### Frontend
```json
"scripts": {
  "start": "ng serve -o"
}
```

## Notas
- Asegúrate de tener MongoDB corriendo antes de iniciar la aplicación.
- El token JWT se almacena en el `localStorage` del navegador.
