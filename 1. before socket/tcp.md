# Packets and node js

### data transfer between clients and server

1. the data transfer between client and server takes place using packets
2. we can transfer data between client and server without caring for packets because node js does this havylifting for us.
3. lower level c language handle this packets thats writtern for node js and then this feature pass to rest of world like socket.io

### structure of packet

packet consist following 5 layers

1. Physical (cables)
2. Link (wifi or ethernet)
3. Network (IP address)
4. Transport (TCP/UDP, Network and Transport combined formed TCP/IP. Transport layer creates 2^16 ports on system)
5. Application (HTTP, FTP, SMTP, SSH)

--HTTP use Trasnport layer TCP protocol for data transfer.--
--Websockets also use TCP protocol.--

### UDP (user datagram protocol)

1. UDP is realy lightweight
2. only 8 bytes
3. UDP is connectionless ( no need to establish connection for data transfer between client and server )
4. it's consistency (UDP transfer data no matter what because of that there is no way to handle packet loss and packet out of order)
5. UDP is so Fast but its Unreliable
6. Mostly UDP uses in Gaming systems or video streaming

### TCP (Transmission contro l protocol)

1. Connection based (establish connection using three way handshake). `three way handshake` is client request connection to server -> server replies Yes or No -> if Yes then data transfer
2. Reliable
3. Delivery acknowledgement (after receving packet it will acknowledge to sender)
4. Retransmission (if packet does not recived then try to resend it)
5. maintain packet order
6. congestion control (if thing go wrong or there is some problem is network then TCP will reduce latency to stop making things worst).

### TCP is reliable where as UDP is Fast but un-reliable
