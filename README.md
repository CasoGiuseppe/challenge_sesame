# Challenge Sesame

## Required System

| Packages       | Vesions |
| -------------- | ------- |
| Node           | 21.6.2  |
| npm            | 10.2.4  |
| vue            | ^3.4.15 |
| pinia          | ^2.1.7  |
| storybook/vue3 | ^8.1.6  |
| tailwindcss    | ^3.4.4  |
| i18n           | ^10.2.4 |

# Project Setup
```
npm install
```

# Development Workflow
Start the development server:

```
npm run dev
```

Build the project for production:

```
npm run build
```
# Components documentation
Los componentes se documentan a través de StoryBook.
StoryBook es una herramienta para desarrollar componentes de interfaz de usuario de forma aislada. Le permite crear ejemplos reutilizables, interactivos y visualmente atractivos de sus componentes.

## Running StoryBook
```
npm run storybook
```

# Unit Testing

Para garantizar la calidad y confiabilidad de sus componentes, es esencial escribir pruebas unitarias. Jest es un marco de prueba popular para JavaScript y Vue Test Utils es una biblioteca complementaria para probar componentes de Vue.js.

# Architecture Overview
Este proyecto sigue un enfoque de screaming architecture, donde la estructura de carpetas y las convenciones de nomenclatura comunican claramente el propósito y las responsabilidades de cada componente, servicio y módulo.

## Running Unit Tests
```
npm run test:unit
```

```bash
src/
├── app/
│   ├── router/
│   └── shared/
│   │   └── composables
│   │   └── stores
│   │   └── tests
│   │   └── types
│   │   └── utilities
│   └── translation/
│   └── ui/
│       └── components/
│           └── abstracts
│           └── base
│           └── elements
│           └── states
│           └── tools
├── assets/
│   ├── _abstracts
│   ├── layers
│   └── mixins
│   └── tools
├── modules/
│   ├── core/
│   │   ├── data
│   │   ├── dependencies
│   │   └── domain/
│   │         └── exceptions/
│   │               └── models
│   │         └── valueObjects/
│   │               └── __test__
│   │               └── abstracts
│   │   └── guards/
│   │         └── exceptions
│   │   ├── presentation
│   │   ├── providers/
│   │   │     └── providerType
│   │   ├── utilities
│   ├── domainType/
│   │   ├── __test___
│   │   ├── data
│   │   │     ├── model/
│   │   │     │     └── mapper
│   │   │     └── repository
│   │   ├── domain
│   │   │     ├── application/
│   │   │     │     └── use-cases
│   │   │     ├── core
│   │   │     │     └── repository
│   │   ├── presentation
│   │   │     ├── bloc
│   │   │     ├── guards/
│   │   │     │     └── __test__
│   │   │     ├── router
│   │   │     ├── store
│   │   │     ├── translations/
│   │   │     │     └── locales
│   │   │     ├── ui
├── stories/
```