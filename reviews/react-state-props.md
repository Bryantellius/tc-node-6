# Review 1/28/22 - React State and Props

## React Components

Return JSX (_JavaScript XML_)

Since it's just JS, you can't use JS protected keywords (e.g. `class` -> `className`)

Can be:

- Class Components (extends the `Component` class from the react module)
  - Returns JSX from the `render` method
  - Receives `props` in the constructor, and assigns to a `this.props` property
  - Can initialize state values to `this.state` property object in the constructor
- Functional (traditionally called _stateless_) Components
  - Returns JSX
  - Receives `props` as a parameter

## Props

Data values passed to components

Specifically from parent to child components (_uni-directionally_)

## State

State are values that change over time (the lifecycle of your component on the DOM through re-renders)

State values are important because _updating them with trigger a component re-render_

Update state with `this.setState({ value: newState })` (NOT `this.state.value = newValue`)

## Rendering Lists

Call the `.map` method to return a new array of JSX values to the DOM

The `key` prop is important for react to distinguish rendered lists items from one another
