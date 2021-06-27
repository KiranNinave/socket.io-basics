# why socket.io
1. websocket client can be using firewall, antivirus or proxy server we need to pass that to establish connection
2. If server goes down or connection killed then there should be some reconnection mechanism.
3. after connecting we should able to transmit data of diffrent types such as binary, blobs, image, video etc
4. also in an application there can be multiple routes. so we need a functionality to have multiple websockets connections simultaneously.
5. some browesers cannot support websockets. :( we also need to handle this
6. **insort we need handle Reconnect, Binary data, Multi-rooms and Blocker problem.and Socket.io handle this for us :)** 