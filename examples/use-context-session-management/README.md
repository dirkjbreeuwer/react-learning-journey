# React hooks example: useContext

useContext is a hook in React that allows a component to access the context of a React app. Context is a way to share values (or states) that are considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.

You should use useContext when you want to access a value that is provided by a parent component, but the parent component is too far up the component tree for the props chain to be practical. useContext is a way to avoid props drilling, or passing props through multiple levels of components just to get to the one that needs the data.

You will most likley use props to forward state through components, useContext will be helpful only when you are forwarding state through many components. 

React.createContext is a function that creates a new context in React. It takes an optional default value as its argument, which will be used as the initial value for the context when a component does not have a matching Provider above it in the tree.

React.createContext returns an object with the following properties:

* Provider: A component that allows you to provide a value for the context. This component should be wrapped around the components that need access to the context value.
* Consumer: A component that allows you to consume a context value. This component should be used inside the component that needs access to the context value.
* displayName: (optional) A string that is used for debugging purposes.


## Attribution

Based on Max Schwarzueller's fantastic udemy course: [React: The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)