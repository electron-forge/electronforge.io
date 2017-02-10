import { Angular2SVG, JadeSVG, ReactSVG, TypescriptSVG, VanillaJSSVG, VueSVG } from '../SVG';

export default [
  {
    name: 'Vanilla ES6/7',
    key: null,
    icon: VanillaJSSVG,
    description: 'ECMAScript 6 (ES6, often referred to as “Harmony”) is the upcoming sixth major release of the ECMAScript language specification. ECMAScript is the “proper” name for the language commonly referred to as JavaScript. It includes futuristic features of JavaScript such as arrow functions, const, let, async/await and classes.  Electron Forge supports these features out of the box and this template simply shows you how to use them.',
  },
  {
    name: 'React',
    key: 'react',
    icon: ReactSVG,
    description: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.  This template contains the minimal config required to get React working with Electron Forge.',
  },
  {
    name: 'React + TypeScript',
    key: 'react-typescript',
    icon: TypescriptSVG,
    description: 'TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces.  This template gets you off the ground with React and TypeScript working together.',
  },
  {
    name: 'Angular 2',
    key: 'angular2',
    icon: Angular2SVG,
    description: 'AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML\'s syntax to express your application\'s components clearly and succinctly. Angular\'s data binding and dependency injection eliminate much of the code you would otherwise have to write.  This template contains Electron specific bootstrapping to get Angular 2 working with Forge.',
  },
  {
    name: 'Vue.JS 2.0',
    key: 'vue',
    icon: VueSVG,
    description: 'Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is very easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.  This template includes a basic .vue component and the required config to get you started.',
  },
  {
    name: 'Jade Templating',
    icon: JadeSVG,
    description: 'Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node and browsers.  With Electron Forge you can simply provide .jade files and watch the templating engine compile them on the fly, no need for any additional build tooling.',
  },
];
