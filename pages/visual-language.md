# Visual Language

On the basic level, visual language is expressed with *design tokens* - atoms of design systems. They are named enteties
that store visual design attributes. Technically, design tokens are expressed as CSS variables.


```css
:root {

  /* Colors */

  --bf-color-white: #ffffff;
  --bf-color-black: #191919;

  --bf-color-darkgray: #343a40;
  --bf-color-lightgray: #e7ebef;
  --bf-color-gray: #c7cace;

  --bf-color-red: #c12d3b;
  --bf-color-green: #0b7724;
  --bf-color-yellow: #ffc107;

  --bf-color-brand-primary: #002da1;
  --bf-color-brand-primary-dark: #002280;


  /* Typography */
  
  --bf-font-size-base: 16px;
  --bf-font-size-small: 0.9rem;

  --bf-font-weight-thin: 300;
  --bf-font-weight-normal: 400;
  --bf-font-weight-bold: 700;

  --bf-font-family-brand: Finlandica;
  --bf-font-family-fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  --bf-line-height-base: 1.6;
  --bf-line-height-header: 1.15;


  /* Transitions */

  --bf-transition: 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);


  /* Border Radius */

  --bf-border-radius-bubble: 2rem;
  --bf-border-radius-input: 0.25rem;


  /* Spacing */

  --bf-spacing-xxs: 0.15rem;
  --bf-spacing-xs: 0.25rem;
  --bf-spacing-sm: 0.5rem;
  --bf-spacing-md: 0.75rem;
  --bf-spacing-lg: 1rem;
  --bf-spacing-xl: 2rem;
  --bf-spacing-xxl: 3rem;


  /* Headers */

  --bf-header-1: 5.653rem;
  --bf-header-2: 3.998rem;
  --bf-header-3: 2.827rem;
  --bf-header-4: 1.999rem;
  --bf-header-5: 1.414rem;


  /* Breakpoints */

  --bf-breakpoint-sm: 576px;
  --bf-breakpoint-md: 768px;
  --bf-breakpoint-lg: 992px;
  --bf-breakpoint-xl: 1200px;
  
}
```
