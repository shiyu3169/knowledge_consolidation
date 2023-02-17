## Network Performance
### 1. Gzip resources
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

### 3. Load non-critical stuff later
analytics scripts, utility js code, additional styles

### 4. CSS Naming strategy, css in js

### 5. Placeholder for assets

### 6. Make all animation on paint -> composition level

