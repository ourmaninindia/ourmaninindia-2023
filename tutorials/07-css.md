# CSS
All css is stored in the folder *assets/ananke/css* . The file *custom.scss* has our custom code and will be amalgameted into the public *main.css* style sheet.

## No wrap of a sentence
white-space: nowrap;

## Height of the navigation header

This depends on the screen size, default like this

```
const width  = window.innerWidth;
  let   height = 70;
```

## Fonts
A font family should have a swap in the css

```
font-display: swap;
```
and should be preloaded in the head e.g.

```
<link rel="preload" href="/font/halimun/halimun.woff2" as="font" type="font/woff2" crossorigin>
```

Generally a sans-serif font is used in the <header> and a serif type in <main>