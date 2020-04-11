[![npm](https://img.shields.io/npm/v/tailwindcss-outline.svg?style=for-the-badge)](https://www.npmjs.com/package/tailwindcss-outline)
[![Downloads](https://img.shields.io/npm/dt/tailwindcss-outline.svg?style=for-the-badge)](https://www.npmjs.com/package/tailwindcss-outline)

# TailwindCSS-Outline

[TailwindCSS](https://tailwindcss.com/) plugin to create outline utility classes, analog to those for border.


| Class                          | Properties               |
|:------------------------------ |:------------------------ |
| `.outline-2`                   | `outline-width: 1px;`    |
| `.outline-2`                   | `outline-width: 2px;`    |
| `.outline-4`                   | `outline-width: 4px;`    |
| `.outline-8`                   | `outline-width: 8px;`    |
|                                |                          |
| `.outline-solid`               | `outline-style: solid;`  |
| `.outline-dashed`              | `outline-style: dashed;` |
| `.outline-dotted`              | `outline-style: dotted;` |
| `.outline-double`              | `outline-style: double;` |
|                                |                          |
| `.outline-offset-1`            | `outline-offset: 2px;`   |
| `.outline-offset-2`            | `outline-offset: 4px;`   |
| `.outline-offset-3`            | `outline-offset: 8px;`   |
| `.outline-offset-4`            | `outline-offset: 12px;`  |
| `.-outline-offset-1`           | `outline-offset: -2px;`  |
| `.-outline-offset-2`           | `outline-offset: -4px;`  |
| `.-outline-offset-3`           | `outline-offset: -8px;`  |
| `.-outline-offset-4`           | `outline-offset: -12px;` |
|                                |                          |
| `.outline-black`               | `outline-color: black;`  |
| `.outline-white`               | `outline-color: white;`  |
| `.outline-{color}-{modifier}`  | `outline-color: {value}` |


## Responsive

To control the outline style of an element at a specific breakpoint, add a `{screen}:` prefix to any existing outline style utility. For example, use `md:outline-dotted` to apply the `outline-dotted` utility at only medium screen sizes and above.

For more information about Tailwind's responsive design features, check out the [Responsive Design](https://tailwindcss.com/docs/responsive-design) documentation.


## Customizing

By default, only responsive variants are generated for outline style utilities.

You can control which variants are generated for the outline style utilities by modifying the `outlineWidth`, `outlineStyle`, `outlineOffset`, and/or `outlineColor` properties in the `variants` section of your `tailwind.config.js` file.

For example, this config will also generate hover and focus variants for all utilities, except for `outline-style`:

```javascript
// tailwind.config.js
module.exports = {
  variants: {
    // ...
    outlineWidth: ["responsive", "hover", "focus"],
    outlineStyle: ["responsive"],
    outlineOffset: ["responsive", "hover", "focus"],
    outlineColor: ["responsive", "hover", "focus"],
  }
}
```


## Installation

```shell
# Install using npm
npm install --save-dev tailwindcss-outline

# Install using yarn
yarn add -D tailwindcss-outline
```


## Usage

In your _tailwind.config.js_:

```js
module.exports = {
  // …
  plugins: [
    // …
    require("tailwindcss-outline")
  ]
};
```

