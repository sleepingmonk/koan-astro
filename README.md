# koan-astro

This is a component library for Astro, built on top of the Koan design system. It provides a set of pre-built components and styles that you can use in your Astro projects to create beautiful and consistent user interfaces with algorithmic layout and atomic design principles.

For more information about the design system and its principles, see the [Koan documentation](https://sleepingmonk.github.io/koan). This documentation covers the foundations with examples for Drupal, but the same principles apply to this Astro component library. Instead of Twig Variables, think of them as props passed to your Astro components. The same design tokens and layout utilities are available in the stylesheets included with this package.

## Install

```bash
npm install koan-astro
```


```astro
---
import { Button, Header } from 'koan-astro';
---

<Button />
<Header />
```

## Global Styles

The package ships stylesheet entry points in `src/styles/`.

- `layout-primitives.css` is required on every site using koan. It provides the shared layout utilities and spacing scale used by the components.
- `scheme-default.css` provides the default color scheme and design tokens. You can replace it with your own scheme or override it by loading another stylesheet after it.
- `animations.css`, `build-in.css`, `elements.css`, and `lighting.css` are optional utility styles to include as needed.

Recommended import order in your site layout or root stylesheet:

```astro
---
import 'koan-astro/styles/layout-primitives.css';
import 'koan-astro/styles/scheme-default.css';
---
```

If you want a custom theme, keep the primitives import and swap the scheme import for your own stylesheet that defines the same token names, or import your stylesheet after the default scheme to override specific variables.

Optional utility style imports:

```astro
---
import 'koan-astro/styles/animations.css';
import 'koan-astro/styles/build-in.css';
import 'koan-astro/styles/elements.css';
import 'koan-astro/styles/lighting.css';
---
```

Import only the utility styles your components need. `elements.css` is useful when you want koan-provided element defaults; the animation and lighting files are typically component-specific enhancements.

## Development

```bash
npm install
npm run check
```
