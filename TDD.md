# Test-driven Development

## If you practice test-driven development (TDD), please describe your TDD workflow. How does a test-driven approach influence the quality of the software being built?

Here is my workflow for TDD:
1. Write a test: Write a test case for a small piece of functionality that the code should provide.
2. Run the test: Run the test and observe that it fails because the code to implement the functionality does not exist yet.
3. Write code: Write the code to implement the functionality and make the test pass.
4. Refactor code: Refactor the code if necessary, making sure all tests still pass.
5. Repeat: Repeat the process for the next piece of functionality, continuing until the software is complete.

TDD can influence the quality of the software being built in several ways:
1. Increased test coverage: Writing tests first encourages the developer to write tests for every aspect of the code, leading to a higher level of test coverage.
2. Early detection of bugs: Automated tests can detect bugs early in the development process, making them easier and cheaper to fix.
3. Improved design: Writing tests first forces the developer to think about how the code should be structured, leading to a better designed and more maintainable codebase.
4. Confidence in code changes: Having a comprehensive suite of tests provides confidence that code changes will not break existing functionality.

Overall, TDD can lead to higher-quality, more maintainable and reliable software.

## Describe a situation where you might not or cannot test-drive the code, and why.
There are several situations where test-driven development (TDD) might not be practical or possible:

Exploratory Development: In the early stages of a project, when the requirements are not well defined and the design is still evolving, it may not be feasible to write tests first. In these cases, it might be more appropriate to write tests after the code to gain a deeper understanding of the problem and design. Especially for UI tests on the front end, it may not be practical to write tests first as the design and flow are possibly evolved quickly as the design and business change.

However, It is still important to write tests as soon as practical to ensure the code is of high quality and maintainable.
