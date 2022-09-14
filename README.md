# Curso Vue 3 Escuela IT

## Tabla de contenidos
- [Clase 1. Conociendo Vue.js](#clase-1)
- [Clase 2. Arquitectura de un proyecto Vue](#clase-2)

### Clase 1
En la clase 1 dimos una introducción global sobre el framework, construyendo una aplicación Vue que está subida [aquí](https://github.com/EscuelaIt/meme-vue-app)

### Clase 2
Resumen de la clase:
- Configuramos VSCode para trabajar cómodamente con Vue instalando extensiones y configuración a settings.
  - Listado de extensiones (son los ids de las extensiones):
    - Vue.volar
    - dbaeumer.vscode-eslint
    - christian-kohler.path-intellisense
    - esbenp.prettier-vscode
    - bradlc.vscode-tailwindcss
    - sdras.vue-vscode-snippets
  - Extracto de código con la configuración del editor:

  ```json
  {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "editor.formatOnSave": true,
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      "vue"
    ],
    "eslint.alwaysShowStatus": true,
    "eslint.options": {
      "extensions": [
        ".html",
        ".js",
        ".vue",
        ".jsx"
      ]
    },
    "[json]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[vue]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
  }
  ```

- Generamos un proyecto con `create-vue` visualizando la estructura que nos genera por defecto el framework.
  ```
  npm init vue@latest
  ```

- Generamos un proyecto con Vite client
  ```
  npm create vite@latest courses-list-vue -- --template vue
  ```
  - Instalamos prettier + eslint en el proyecto de Vite
  ```js
  // instalar prettier
  npm install --save-dev --save-exact prettier

  // crear el archivo de prettier
  .prettierrc.json

  {
    "singleQuote": true,
    "semi": false,
    "arrowParens": "avoid",
    "endOfLine": "lf",
    "printWidth": 80,
    "tabWidth": 2,
    "trailingComma": "all"
  }

  // instalar eslint 
  npm install --save-dev eslint eslint-plugin-vue

  // configuración para .eslintrc.js
  module.exports = {
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
    ],
    rules: {}
  }

  // configurar prettier + eslint
  npm install eslint-config-prettier --save-dev

  // modificar el .eslintrc.js
  module.exports = {
    env: {
      node: true,
      'vue/setup-compiler-macros': true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
    rules: {},
  }

  // añadir scripts a package.json
  "scripts":{
    //...
    "lint": "eslint --ext .js,.vue --ignore-path .gitignore --fix src",
    "format": "prettier . --write"
  }

  // añadir alias a vite.config.js
  import { resolve } from 'path'

  export default defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  })
  ```

- Hicimos un repaso sobre las posibilidades de los atributos dinámicos
- Finalmente instalamos tailwindcss al proyecto y quitamos lo que no necesitábamos del propio proyecto.