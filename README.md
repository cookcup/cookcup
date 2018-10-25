# new c('.CookCup')

**CookCup** is a next generation DOM toolbox, written in EcmaScript 6 and inspired by (but unlike) jQuery.

- [Documentation](https://github.com/cookcup/cookcup/wiki)

## Install

By default we provide two ways to install, **browser** and **package**.

### Browser

Just add this library using our CDN:

```html
<script src="https://unpkg.com/cookcup">
```

It is strongly recommended that you load the script with the `async` attribute, we have a [small guide](https://github.com/cookcup/cookcup/wiki/Guide:-Asynchronous-load) learning how to use AMD (Asynchronous Module Definition) or a custom implementation.

Or just customize your build, download files and host it directly in your website.

### Package

Or just install it on your project:

```bash
$ npm install cookcup
```

```bash
$ yarn add cookcup
```

Don't forget to import the library:

```javascript
import CookCup from 'cookcup'
```

## Usage

Before write your code, you will need to attach a callback to the `ready` static method in order to wait DOM load.

```javascript
CookCup.ready(function (event) {
  // Your code goes here.
})
```

To initialize, instance the library passing a CSS selector to constructor:

```javascript
const elements = new c('div')
```

## Modules

CookCup is a modularized system, which means you can choose to just load the core (which is also a module) and load the other modules on demand.

- [Attributes](https://github.com/cookcup/cookcup/wiki/Module:-Attributes)
- [Classes](https://github.com/cookcup/cookcup/wiki/Module:-Classes)
- [Core](https://github.com/cookcup/cookcup/wiki/Module:-Core)

The core is the minimum requirement for other modules to work, so it **always must be included**.

## Roadmap

You can follow our work in progress through the [milestones](https://github.com/cookcup/cookcup/milestones).

## Contributing

You can help this project in several ways. See our [guide](#) for more information.

## Authors

- [Caio Tarifa](/caiotarifa)

### Contributors
- [Ronaldo F. Lima](/ronflima)
