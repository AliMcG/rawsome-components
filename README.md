# Rawsome Components

A component library for React projetcs that use TailwindCSS.

### NPM Package
https://www.npmjs.com/package/rawsome-components?activeTab=readme

### Storybook

Check out the components in action on [Rawsome Components Storybook](https://rawsome-components.vercel.app/?path=/docs/introduction--docs)

## Tailwind-merge and clsx

Each component is lighlty styled and the whole library makes use of the [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) and the [clsx](https://www.npmjs.com/package/clsx) packages. This means that each component uses the `cn()` utility function.

Helpful [YouTube video](https://www.youtube.com/watch?v=re2JFITR7TI) about how and why to use `cn()`.

This means that tailwind classes can be overwritten for each component as required.

## Tailwind classes

The base stylying for rawsome-components makes use of the following tailwind classes:
- primary
- primary-foreground
- primary-hover
- secondary
- secondary-foreground
- secondary-hover

