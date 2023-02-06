# Singleton Pattern

## Singleton pattern is considered an anti-pattern in Javascript because you can create object without class in Javascript. Therefore, class implementation is usually overkill.

## In React, we often rely on a global state through state management tools such as Redux or React Context instead of using Singletons. Pure function is utilized to help make sure the states are only modified as developer want.

Ref: https://www.patterns.dev/posts/singleton-pattern/