# `@labXD/gustXD`

**gustXD** is a tailwind design system and component library used in **labXD** projects.
It is meant extend your Tailwind setup. Install, point, and start using the
components.

- website built with `docusaurus`.
- component library built with `tailwind` and `tsdx`.

## Installation

> You will need [Tailwind CSS](https://tailwindcss.com/docs/installation) setup.

```shell
# install tailwind, postcss, and autoprefixer into your project
npm install tailwindcss postcss autoprefixer

# install gustxd
npm install @labxd/gustxd

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

### Configure tailwind.config.js

Our configuration (which includes font family, custom colors, custom animations,
etc) is created as a preset (`@labxd/gustxd/tailwind`) to extend your
`tailwind.config.js` with ours, not override them. This way you can merge your
custom configuration with ours.

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@labxd/gustxd/tailwind-preset")],

  // point to where you will use tailwind classes
  content: [
    "./src/**/*.{html,js}",
    // IMPORTANT! This path is needed to add the tailwind styles to our components
    "node_modules/@labxd/gustxd/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

At this point, you don't need to go any further with tailwind's setup. Our
preset and stylesheet will take care of the rest.

### Import styles

Not only does our stylesheet `@labxd/gustxd/styles.css` include tailwind's base,
components, and utilties, it also has custom classes that are used by our
components, as well as on its own for more customization.

```css
/* global-stylesheet.css */
/* You don't need base, components, or utilities. It's already included with gustxd/styles.css */

/* @tailwind base;
@tailwind components;
@tailwind utilities; */

@import "@labxd/gustxd/styles.css";
```
