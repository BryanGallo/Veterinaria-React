# 🐾 Veterinaria-React

**Veterinaria-React** es una aplicación web moderna desarrollada con React que facilita la gestión y seguimiento de pacientes en una clínica veterinaria.

## 📋 Características

- **Gestión de Pacientes**: Permite registrar, visualizar, actualizar y eliminar información de los pacientes veterinarios
- **Interfaz Intuitiva**: Diseñada con una experiencia de usuario moderna y fácil de navegar
- **Tecnología Moderna**: Construida utilizando React y las mejores prácticas de desarrollo web
- **Diseño Responsivo**: Optimizada para funcionar en diferentes dispositivos y tamaños de pantalla

## 🚀 Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 14 o superior recomendada)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/) (gestor de paquetes)
- Git (para clonar el repositorio)

## 📦 Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

### 1. Clona el repositorio

```bash
git clone https://github.com/BryanGallo/Veterinaria-React.git
```

### 2. Navega al directorio del proyecto

```bash
cd Veterinaria-React
```

### 3. Instala las dependencias

```bash
npm install
```

O si prefieres usar yarn:

```bash
yarn install
```

### 4. Inicia la aplicación

```bash
npm run dev
```

O con yarn:

```bash
yarn dev
```

La aplicación se ejecutará en `http://localhost:3000` (o el puerto que se muestre en la consola).

## 🎯 Uso

Una vez que la aplicación esté en funcionamiento:

1. **Agregar Pacientes**: Completa el formulario para registrar nuevos pacientes veterinarios con su información correspondiente
2. **Visualizar Pacientes**: Consulta la lista de todos los pacientes registrados
3. **Editar Información**: Actualiza los datos de los pacientes existentes
4. **Eliminar Pacientes**: Elimina registros de pacientes que ya no sean necesarios

## 🛠️ Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario
- **JavaScript/TypeScript**: Lenguaje de programación
- **CSS/Tailwind CSS**: Estilos y diseño (si aplica)
- **Vite/Create React App**: Herramienta de desarrollo y build

## 📁 Estructura del Proyecto

```
Veterinaria-React/
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── pages/          # Páginas de la aplicación
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Funciones utilitarias
│   └── App.jsx         # Componente principal
├── public/             # Archivos estáticos
├── package.json        # Dependencias del proyecto
└── README.md          # Este archivo
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir al desarrollo de **Veterinaria-React**, sigue estos pasos:

1. **Haz un Fork** del repositorio
2. **Crea una rama** para tu nueva funcionalidad:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. **Realiza tus cambios** y haz commit con mensajes descriptivos:

   ```bash
   git commit -m "feat: Agrega nueva funcionalidad"
   ```

4. **Envía tus cambios** al repositorio remoto:

   ```bash
   git push origin feature/nueva-funcionalidad
   ```

5. **Abre un Pull Request** en GitHub para que tus cambios sean revisados e integrados

### Convenciones de Commits

- `feat`: Nueva funcionalidad
- `fix`: Corrección de errores
- `docs`: Cambios en la documentación
- `style`: Cambios de formato (que no afectan el código)
- `refactor`: Refactorización del código
- `test`: Agregar o modificar tests

## 📝 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la build de producción
- `npm run lint`: Ejecuta el linter (si está configurado)
