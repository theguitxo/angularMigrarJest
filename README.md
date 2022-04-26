# MigrarJest

Aplicación Angular con la herramienta para los test unitarios migrada de Karma y Jasmine a Jest

## Pasos

1. Desinstalar las dependencias de Karma y Jasmine:

* @types/jasmine
* jasmine-core
* karma
* karma-chrome-launcher
* karma-jasmine
* karma-jasmine-html-reporter
* karma-coverage

---

2. Eliminar el fichero karma.conf.js

---

3. Eliminar el fichero src/tests.ts

---

4. Instalar las dependencias de desarrollo:
* @types/jest
* jest
* jest-preset-angular
* ts-jest
* @angular-builders/jest

---

5. Crear el fichero setupJest.ts con el siguiente contenido:

```
import 'jest-preset-angular/setup-jest';
```

---

6. Modificar tsconfig.spec.json

* Eliminar *jasmine* de **compilerOptions/types**
* Añadir *jest* y *nodes* en **compilerOptions/types**
* Añadir *"esModuleInterop": true* en **compilerOptions**
* Eliminar *src/test.ts* de **files**

Ejemplo:
```
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jest",
      "nodes"
    ],
    "esModuleInterop": true
  },
  "files": [
    "src/polyfills.ts"
  ],
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}
```

----

7. Modificar el fichero angular.json:
 * Sustituir toda la configuración de la sección **test** por: *"builder": "@angular-builders/jest:run"*

 ```
"test": {
  "builder": "@angular-builders/jest:run"
}
```

---

8. Modificar el fichero package.json
  * Añadir la sección *jest* con el siguiente contenido:
```
{
  "preset": "jest-preset-angular",
    "roots": [
      "<rootDir>/src"
    ],
  "setupFilesAfterEnv": [
    "<rootDir>/setupJest.ts"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/"
  ],
  "globals": {
    "ts-jest": {
      "tsconfig": "<rootDir>/tsconfig.spec.json",
      "stringifyContentPathRegex": "\\.html$"
    }
  }
```
* en los scripts de tareas, modificar la tarea **test**:
```
"test": "jest"
```
