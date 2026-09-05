# Shoal Icons

A multi-framework SVG icon library. Source icons live once in [`icons/`](./icons) and are compiled into three published packages:

- [`@shoal-icons/react`](./packages/react) — React components
- [`@shoal-icons/vue`](./packages/vue) — Vue 3 SFC components
- [`@shoal-icons/web-components`](./packages/web-components) — framework-agnostic custom elements

## Adding an icon

1. Drop a 24x24 `viewBox="0 0 24 24"` SVG into `icons/`, using `stroke="currentColor"` so consumers can recolor it.
2. Run `npm run generate` to regenerate the React, Vue, and web component sources.
3. Run `npm run build` to build all packages.

## Usage

**React**

```tsx
import { Heart } from '@shoal-icons/react';

<Heart size={32} />;
```

**Vue**

```vue
<script setup>
import { Heart } from '@shoal-icons/vue';
</script>

<template>
  <Heart :size="32" />
</template>
```

**Web Components**

```html
<script type="module">
  import '@shoal-icons/web-components';
</script>

<shoal-icon-heart size="32" color="crimson"></shoal-icon-heart>
```

## Development

```bash
npm install
npm run build
```
