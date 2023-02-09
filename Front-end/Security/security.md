# Security

## TCP vs UDP
TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are two of the most commonly used protocols for transmitting data over a network.

TCP is a reliable, connection-oriented protocol that provides guaranteed delivery of data. When you send data using TCP, the protocol establishes a reliable connection between the sender and the receiver, and then the data is transmitted in a stream of segments. Each segment is acknowledged by the receiver, and if any segment is lost in transit, the sender is notified and retransmits the lost segment. This ensures that all data is received in the correct order and without any corruption.

UDP, on the other hand, is a connectionless, unreliable protocol that provides fast and efficient transmission of data. Unlike TCP, UDP does not establish a reliable connection, and it does not guarantee the delivery or order of data. Instead, UDP simply sends packets of data to the recipient, without checking to see if they have been received. This makes UDP a good choice for applications that require fast, low-overhead transmission of data, such as video and audio streaming, online gaming, and DNS lookups.

In summary, TCP is suitable for applications that require reliable and ordered delivery of data, while UDP is better suited for applications that require fast, low-overhead transmission of data, even if some of the data may be lost along the way.

## HTTP vs HTTPS
HTTP (HyperText Transfer Protocol) and HTTPS (HyperText Transfer Protocol Secure) are the main protocols used for transmitting data over the web.

The main difference between the two is that HTTPS is a secure version of HTTP, as it adds an extra layer of security through encryption. When a user visits a website that uses HTTPS, their connection to the website is encrypted and secure, making it difficult for anyone to intercept or eavesdrop on the data being transmitted.

In other words, HTTP is not secure, while HTTPS is. This means that if you're transmitting sensitive information, such as login credentials or credit card information, it's recommended to use HTTPS to keep that information safe.

In conclusion, if you're looking to protect the privacy and security of your data on the web, it's best to use HTTPS whenever possible.

## CSRF
Cross-Site Request Forgery(CSRF) is a type of attack where a malicious website tricks a user's browser into making a request to another website on their behalf, potentially allowing the attacker to perform actions on the victim's behalf, such as changing their password or making a purchase. To prevent CSRF attacks, websites must implement additional security measures, such as using unique tokens for each request or checking the origin of requests. In this way, even if an attacker is able to trick a user's browser into making a request, the website can still detect that the request is not legitimate and reject it.