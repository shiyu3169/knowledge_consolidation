## Network Performance
### 1. Gzip & Brotli resources
### 2. http 2 multiplexing
HTTP/2 introduced a feature called "multiplexing," which allows multiple HTTP requests to be sent and received at the same time over a single TCP connection. This is in contrast to HTTP/1, where each request and response had to wait for the previous one to complete before starting.

With HTTP/2 multiplexing, a single connection can support multiple streams of data simultaneously, which can improve the overall performance of web applications by reducing the latency and overhead associated with setting up multiple connections. This can be especially beneficial for websites that make use of many small assets, such as images or CSS files, as the multiplexing capability can reduce the number of round trips needed to download all of the assets.

Multiplexing works by breaking down each HTTP request and response into smaller frames, which can be interleaved and sent over the same connection. Each frame includes a header that identifies which stream it belongs to, and the receiver can reassemble the frames into complete requests and responses based on the stream ID.

Overall, HTTP/2's multiplexing feature can lead to faster and more efficient web applications, as well as improved user experience.

### 3. WebP
WebP is a modern image file format developed by Google that is designed to provide high-quality images with smaller file sizes compared to other image formats like JPEG, PNG, and GIF. It uses both lossy and lossless compression techniques to achieve this.

WebP supports transparency, animation, and metadata, and can be used for both photographic and digital art images. It is supported by most web browsers including Google Chrome, Mozilla Firefox, Microsoft Edge, and Opera, as well as by many image editing and viewing software.

One advantage of using WebP is that it can help reduce the loading time of web pages, especially on mobile devices where network speed can be slower. This can improve the user experience and lead to higher engagement and conversion rates for websites.

Overall, WebP is a promising image format that can offer significant benefits to web developers and users by providing smaller file sizes and faster loading times while maintaining image quality.

### 4. Use GIF for short video like promo

### 5. Fetch lazily

### 6. Bundles Splitting

Based on flow

### 7. assets optimizer

### 8. preload 

### 9. application cache

## Javascript Performance

### 1. Do less stuff

### 2. Do heavy weight tasks async

### 3. minimize the code

## Rendering Performance

### 1. SSR if needed

### 2. Inline critical js and css
Inlining critical CSS and JS can be a good strategy for improving website performance, especially for the initial page load. Here's why:

When you inline critical CSS and JS, you are essentially putting that code directly in the HTML file, rather than linking to a separate CSS or JS file. This means that the browser can download and render the critical resources as part of the initial HTML document, without having to wait for a separate network request to complete. This can reduce the overall time it takes for the page to become interactive and improve the user experience.

That being said, there are some downsides to inlining critical resources. Inlining code can increase the size of the HTML file, which can slow down the initial load time, especially on slower network connections. Additionally, inlining can make the HTML file more difficult to read and maintain.

Therefore, it's important to strike a balance between inlining critical resources and keeping the HTML file size manageable. Some techniques for achieving this balance include:

Using server-side rendering to generate HTML with inlined critical resources
Using HTTP/2 to reduce the overhead of multiple network requests
Minifying HTML, CSS, and JS to reduce file size
Using lazy loading to defer non-critical resources until they are needed
Overall, inlining critical CSS and JS can be a good performance optimization technique, but it should be used carefully and in conjunction with other techniques to achieve the best possible user experience.

### 3. Load non-critical stuff later
analytics scripts, utility js code, additional styles

### 4. CSS Naming strategy, css in js

### 5. Placeholder for assets

### 6. Make all animation on paint -> composition level

