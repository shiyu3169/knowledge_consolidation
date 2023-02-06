# Singleton Pattern

## Notes 

Singleton pattern is considered an anti-pattern in Javascript because you can create object without class in Javascript. Therefore, class implementation is usually overkill.

Also, it can introduce hidden dependencies and tight coupling between the code and the singleton instance. This can make it difficult to maintain and test the code, especially in large applications. Additionally, the global access to the singleton instance can make it easier to create bugs and can lead to naming conflicts.

In React, we often rely on a global state through state management tools such as Redux or React Context instead of using Singletons. Pure function is utilized to help make sure the states are only modified as developer want.

### Ref: https://www.patterns.dev/posts/singleton-pattern/