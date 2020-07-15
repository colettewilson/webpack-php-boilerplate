## Table of Contents
  * [Frontend setup](#frontend-setup)
  * [SVG](#svg)
    * [Using SVG Sprites](#using-svg-sprites)
  * [Class naming conventions](#class-naming-conventions)
    * [Components](#components)
    * [States](#states)
    * [JavaScript selectors](#javascript-selectors)
    * [Utility Classes](#utility-classes)
    * [Class name order in html](#class-name-order-in-html)

## Frontend setup
1. Ensure Yarn or NPM is installed, run either `yarn install` or `npm install` depending on your package manager.
2. Run `php -S localhost:8000 -t public` to start a local php server.
3. Run `[yarn/npm] run dev` for dev server or `[yarn/npm] run build` for production build.
4. Visit [http://localhost:3000](http://localhost:3000)

## SVG

### Using SVG sprites
Use markup similar to:

```html
<i class="icon icon--{iconname}">
  <svg>
    <use xlink:href="/dist/sprite.svg#{iconname}"></use>
  </svg>
</i>
```

e.g. The markup to use a logo portion of the sprite would be:

```html
<i class="icon icon--logo">
  <svg focusable="false"><use xlink:href="/media/images/sprites/ui.svg#logo"></use></svg>
</i>
```

## Class naming conventions

### Components
```scss
/* Component */
.component-name {}

/* Component modifier */
.component-mame--modifier-name {}

/* Component descendant */
.component-name__descendant {}

/* Component descendant modifier */
.component-name__descendant--modifier-name {}
```

### States

Used to indicate the state of a component, scoped to component

**Pattern**

```scss
.is-stateType
```

**Examples**

```scss
.modal {
  &.is-active {}
}

.field {
  &.is-hidden {}
}

/* or */

.field.is-hidden {}

```
### JavaScript selectors

Used to provide JS-only hooks for a component. Can be used to provide a JS-enhanced UI or to abstract other JS behaviours.

**Pattern**

```scss
.js-action-name
```

**Examples**

```scss
.js-submit
.js-action-save
.js-collapsible
.js-dropdown
.js-dropdown-menu
.js-carousel
```

### Utility Classes
These are one purpose classes

**Pattern**

```scss
.ut-utility-name
```

**Examples**

```scss
.ut-align-center
.ut-inline-block
```

### Class name order in html

**Grid Classes**
```html
<div class="column small-12 medium-12 large-12">
```

**Component**
```html
<div class="js-class component component--modifier grid__item small-12 medium-12 large-12">
```

**If component & also descendant**
```html
<div class="js-class parent__component component component--modifier grid__item small-12 medium-12 large-12">
```


