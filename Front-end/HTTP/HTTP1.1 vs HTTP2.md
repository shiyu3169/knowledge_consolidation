Multiple TCP connections is not a solution to the problem of HTTP/1 because:
1. it adds infrastructure and maintenance cost
2. Each connection consumes a great chunk of server and client resources
3. Optimization requires specific domain knowledge and more expensive specialists
4. Many other side effects. For example, one of them is higher battery consumption on the mobile devices

Other methods that engineers are using
   
   Make fewer requests
   1. caching
   2. spriting (Image bundling)
   3. CSS & JS Bundling
   4. Critical resources inlining
      * Cons: increased traffic, there will be possibly unused code

