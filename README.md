# Falcon Shoelace Theme

Falcon Shoelace is a stylesheet that includes a light and dark theme for the [Shoelace component library](https://shoelace.style/).

## Installation and Usage

Add the `@crowdstrike/falcon-shoelace` package:

### NPM
```zsh
npm install @crowdstrike/falcon-shoelace
```

Import the stylesheet:

```css
@import "@crowdstrike/falcon-shoelace/dist/style.css";
```

## Switching Themes

By default all styles are in light mode. To switch to the dark theme add the class `theme-dark` to `documentElement`:

```html
<html class="theme-dark"></html>
```

to toggle the class with JS:
```js
document.documentElement.classList.toggle('theme-dark')
```

## Included Dependencies

The falcon-shoelace stylesheet includes [falcon-styles](https://github.com/CrowdStrike/falcon-styles) and it's single dependency [modern-normalize](https://github.com/sindresorhus/modern-normalize).
