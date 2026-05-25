# @materialcomponents/core

Zero-dependency Material UI Web Components library.

## Installation

```bash
npm install @materialcomponents/core
```

## Usage

```html
<script type="module">
  import '@materialcomponents/core';
</script>

<mc-theme-provider>
  <mc-button variant="contained">Hello World</mc-button>
</mc-theme-provider>
```

### CDN

```html
<script src="https://unpkg.com/@materialcomponents/core/dist/materialcomponents.min.js"></script>
```

### With MUI Theme

```javascript
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: { primary: { main: '#e91e63' } }
});

document.querySelector('mc-theme-provider').theme = theme;
```
