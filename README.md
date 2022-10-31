# About the proxy-server
Proxy Server -> The client makes a request to the proxy server which in turn makes the request to the external API on behalf of the client. In the response, received from the external API has no CORS headers, this will result to a CORS error as it it will try to prevent insecure data transfer. The proxy server will therefore add CORS headers

# Apologies
Please bear with me, I forgot and pushed the node modules to the repository.. However, there are not that much dependencies in the node module to make it big, that's might be a reason to why I forgot

# dependencies
 cors-anywhere
 
# running the app
use script -> npm start

# How to use this server
-> When sending an external request, send it as
http://localhost:8080/https://your_request_domain.com 

this will make the request through the proxy server, which will add CORS header to the responses to adhere with CORS standards.
