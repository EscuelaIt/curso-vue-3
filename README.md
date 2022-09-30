# Curso Vue 3 Escuela IT

## Tabla de contenidos
- [Clase 1. Conociendo Vue.js](#clase-1)
- [Clase 2. Arquitectura de un proyecto Vue](#clase-2)
- [Clase 3. Cómo gestionar la reactividad](#clase-3)
- [Clase 4. Directivas 1](#clase-4)
- [Clase 5. Directivas 2](#clase-5)
- [Clase 6. Profundizar en componentes](#clase-6)
- [Clase 7. Componentes formulario](#clase-7)
- [Clase 8. Vue Router](#clase-8)
- [Clase 9. Gestión de estados en Vue](#clase-9)
- [Clase 10. Composables](#clase-10)

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

### Clase 3.
Resumen de la clase:
- Vimos ejemplos de los problemas de la reactividad en Vue 2.
- Creamos un ejemplo de uso no reactivo.
- Aplicarle reactividad al ejemplo
- Vimos ejemplo con el método `reactive`
- Vimos ejemplos con el método `ref`
- Probamos el método en experimenta `$ref` para no necesitar acceder al `.value`
- Creamos ejemplos con el método `toRefs` para convertir propiedades de un objeto reactivo a reactivas por separado
- Vimos el uso de las computed properties
- Probamos los distintos métodos de watchers: `watch`, `watchEffect`, `watchPostEffect` y `watchSyncEffect`.

- Por último instalamos daisyui en el proyecto, creamos datos fake y los listamos en una tabla. Además le añadimos un formulario para ir añadiendo valores a la tabla sin necesidad de recargar nada, todo reactivo.

### Clase 4.
Resumen de la clase:
- Empezamos viendo ejemplos de uso de atributos mediante la directiva `v-bind`
```html
<script setup>
const image = 'https://bit.ly/3yN7z3B'
const imgClasses = 'w-24'
</script>

<template>
  <img
    v-bind:src="image"
    v-bind:class="imgClasses"
  />
</template>

<style>
.w-24 {
  width: 24rem;
}
</style>
```
- Continuamos viendo ejemplos sobre los diferentes tipos de datos que se pueden usar en un atributo
- Vimos ejemplos sobre cómo tener un atributo dinámico
- Repasamos como podríamos tener atributos dinámicos usando las computed properties
- Añadimos estilos en linea usando objetos
```html
<script setup>
const buttonStyles = { 'background-color' : 'red' }
</script>

<template>
	<button :style="buttonStyles">
    Botón
  </button>
</template>
```
- Vimos todas las directivas de renderizado condicional: `v-if`, `v-else`, `v-else-if` y `v-show`.
- Probamos a usar los renderizamos de listas con la directiva `v-for` y todos los posibles datos que puede iterar.
- Creamos ejemplos con directivas `v-html` y `v-one`.
- Por último hicimos unos cambios en la aplicación de cursos:
  - Cambiamos el formulario para que solo aparezca cuando hagas click en "crear cursos"
  - Añadimos un checkbox a la tabla para crear un listado de favoritos
  - Mostramos un listado de favoritos

### Clase 5.
Resumen de la clase:
- Repaso uso de eventos
- Distintos usos de eventos
```html
<button @click="addValue"></button>

<button @click="addValue($event)"></button>

<button @click="(event) => addValue(event)"></button>
```

- Vimos el uso de modificadores de eventos. Modificadores como `.stop`, `.prevent` y `.once`
- Hicimos uso de la directiva `v-model` para campos de formulario
  - Además vimos ejemplos con input, textarea, checkbox, radio y select.
- Vimos algunos modificadores de la directiva `v-model` como `.lazy` y `.trim`
- Creamos una directiva nueva desde cero
```html
<script setup>
const vColor = {
  mounted: (el, { value }) => {
    el.style.color = value || 'red'
  }
}
</script>

<template>
  <p v-color="'blue'">
    asd
  </p>
  <p v-color>
    aaa
  </p>
</template>
```

- Terminamos haciendo cambios en el proyecto que construimos clase a clase.
  - Cambiar el submit del formulario
  - Usamos la directiva `v-model` en los campos del formulario
  - Añadimos un campo nuevo en el formulario para saber si está activo el curso
  - Mostramos el campo nuevo en la tabla

### Clase 6.
Repaso de la clase
- Empezamos viendo qué es un componente y cómo podemos identificarlos.
- Continuamos viendo las diferentes formas de escribir componentes
- Creamos un componente de manera local y otro global
- Hicimos uso de los elementos del SFC por archivos externos
```html
<template src="./template.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>
```

- Vimos algunos de los ciclos de vida que están disponibles en Vue
- Empezamos a usar las props de los componentes y vimos:
  - definición de props
  - props con valores por defecto
  - props required
  - validación de props
  - varios tipos de props
- Pasamos a la definición de eventos y como crear nuestros propios eventos
  - vimos su definición
  - uso desde template y desde script
- Empezamos con una introducción al uso de slots
  - slots básicos
  - slots con valores por defecto
  - slots dentro de otros slots

### Clase 7.
- Vimos como usar los `named slots` y `dynamic named slots`
- Hicimos modificaciones en la aplicación
  - Creamos el componente `BaseHeader`
  - Creamos el componente `BaseTable`
- Pasamos a ver cómo podríamos hacer uso de componentes dinámicos
```html
<script setup>
import { shallowRef } from 'vue'
import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue'

const components = {
  'BaseInput': BaseInput,
  'BaseButton': BaseButton
}

const nameComponent = shallowRef(BaseInput)

const changeComponent = (event) => {
  nameComponent.value = components[event.target.value]
}
</script>

<template>
  <select @input="changeComponent">
    <option value="BaseInput">Input</option>
    <option value="BaseButton">Button</option>
  </select>

  <component :is="nameComponent"></component>
</template>
```

- Pasamos a ver el uso de imports dinámicos de componentes
```js
import { defineAsyncComponent } from 'vue'

const BaseButton = defineAsyncComponent(() => import('./components/BaseButton.vue'))
```

- Vimos como podríamos hacer uso de la directiva `v-model` en componentes.
```js
<!-- BaseInput.vue -->
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<BaseInput v-model="text" />
```

- Después pasamos a ver cómo podríamos integrar el uso del `v-model` con computed properties.
- Vimos también el uso de v-model con distintos argumentos
```js
<MyComponent v-model:title="bookTitle" />

<!-- MyComponent.vue -->
<script setup>
defineProps(['title'])
defineEmits(['update:title'])
</script>

<template>
  <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>
```

- A continuación pasamos a ver el uso de v-model con multiples valores.

### Clase 8.
- Vimos una intoducción sobre qué es Vue Router y una separado
- Después instalamos y configuramos Vue Router en el proyecto
- Una vez instalado, separamos la lógica que teníamos en `App.vue` en diferentes archivos y creamos las respectivas rutas
- Repasamos como podríamos hacer uso de lazy loading con las rutas
- A continuación implementamos la vista del detalle en la tabla de cursos
- Una vez tuvimos esto, creamos sub-rutas con la propiedad `children`
- Repasamos los navigations guards tanto en componentes, en todas las rutas como en cada ruta
- Hicimos uso de las meta info
- Por último creamos una pantalla de error por si la ruta no existe

### Clase 9.
- Empezamos con una introducción sobre qué es un gestor de estados
- Continuamos viendo ejemplos de uso con Vuex
- Después instalamos y configuramos Pinia en el proyecto
- Comenzamos a crear la store de courses y almacenamos los cursos en un estado compartido
- Una vez añadimos esto, nos fuimos al formulario de crear curso e integramos el crear curso para que actualice el estado compartido de cursos con el nuevo
- Vimos también como hacer uso de la store fuera de archivos de componentes
- En ese caso vimos como integrar la store para hacer bloquear el acceso a una ruta si no estás logeado

### Clase 10.
- Empezamos viendo una introducción a los provide / inject para simplificar la comunicación entre componentes
- A continuación vimos qué son los composables, cuando usarlos y para qué sirven
- Creamos el composable de `useFetch` para reutilizar la lógica de hacer peticiones a una api
- Vimos que hay una librería llamada [Vueuse](https://vueuse.org/) que contiene muchos composables muy útiles
- Después creamos el composable `useState` para crear la misma lógica que se podría tener en React
- Por último, creamos el composable `useAuth` para almacenar la información del usuario y así compartirla a través de toda la aplicación, como si de un manejador de estados se tratase.