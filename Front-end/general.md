# General Questions

## Local Storage vs Cookie
Both local storage and cookies are methods of storing data in a client-side browser, but they have some differences.

Cookies are small text files stored in the browser and are sent back to the server with each HTTP request. They were originally designed to store small amounts of data (such as user preferences) and are still widely used for this purpose. However, because they are sent with each request, they can also be used to track a user's activity across multiple sites.

Local storage, on the other hand, is a more recent technology that allows you to store larger amounts of data in the browser, without having to send it back to the server with each request. This makes it faster and more efficient than cookies for storing larger amounts of data. Unlike cookies, local storage is not automatically sent to the server, which provides a higher level of security and privacy.

In summary, cookies are still useful for small amounts of data that need to be sent to the server with each request, while local storage is a more efficient way to store larger amounts of data that can be used to improve the user experience without having to send data to the server.

## TCP vs UDP
TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are two of the most commonly used protocols for transmitting data over a network.

TCP is a reliable, connection-oriented protocol that provides guaranteed delivery of data. When you send data using TCP, the protocol establishes a reliable connection between the sender and the receiver, and then the data is transmitted in a stream of segments. Each segment is acknowledged by the receiver, and if any segment is lost in transit, the sender is notified and retransmits the lost segment. This ensures that all data is received in the correct order and without any corruption.

UDP, on the other hand, is a connectionless, unreliable protocol that provides fast and efficient transmission of data. Unlike TCP, UDP does not establish a reliable connection, and it does not guarantee the delivery or order of data. Instead, UDP simply sends packets of data to the recipient, without checking to see if they have been received. This makes UDP a good choice for applications that require fast, low-overhead transmission of data, such as video and audio streaming, online gaming, and DNS lookups.

In summary, TCP is suitable for applications that require reliable and ordered delivery of data, while UDP is better suited for applications that require fast, low-overhead transmission of data, even if some of the data may be lost along the way.