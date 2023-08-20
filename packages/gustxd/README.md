# `@labXD/gustXD`

**gustXD** is a design system and component library built with Tailwind CSS and
React. It is meant extend your Tailwind setup. Install, point, and start using
the components.

## What you get

- Button, card classes
- Form input stylings
- React components based on Tailwind UI

## Prereq

> You will need [Tailwind CSS](https://tailwindcss.com/docs/installation) setup.

```shell
# install tailwind, postcss, and autoprefixer into your project
npm install tailwindcss postcss autoprefixer

# initiate tailwind to create tailwind.config.js
npx tailwindcss init
```

Create `postcss.config.js` in the root of your project and add the following.

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

You will need to point tailwind to where you will use their classes.

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // point to whereever you will use tailwind classes
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

At this point, you don't need to go any further with tailwind's setup. Our
preset and styleshee will take care of the rest.

## Install gustXD

```shell
npm install @labxd/gustxd
```

### Configure tailwind.config.js

Our configuration (which includes font family, custom colors, custom animations,
etc) is created as a preset (`@labxd/gustxd/tailwind`) to extend your
`tailwind.config.js` with ours, not override them. This way you can merge your
custom configuration with ours.

```js
// tailwind.config.js

module.exports = {
  presets: [require("@labxd/gustxd/tailwind-preset")],
  content: [
    // IMPORTANT! This path is needed to add the tailwind styles to our React components
    "node_modules/@labxd/gustxd/dist/**/*.{js,ts,jsx,tsx}",
    ...
  ],
};

```

### Import styles

Not only does our stylesheet `@labxd/gustxd/styles.css` include tailwind's base,
components, and utilties, it also has custom classes that are used by our
components, as well as on its own for more customization.

```css
/* Your root stylesheet */

/* @tailwind base;
@tailwind components;
@tailwind utilities; */
@import "@labxd/gustxd/styles.css";
```
