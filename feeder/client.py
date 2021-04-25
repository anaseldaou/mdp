import socket

HOST = '127.0.0.1'  # The server's hostname or IP address
PORT = 22        # The port used by the server

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST, PORT))
    s.sendall(b'1 21/2/2021 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19.5\n1 21/2/2021 3 4 5 6 7 8 9 10 11 12 13 14 15 15 15 15 19 5 5 5 5 5 5 5 5 5')
    data = s.recv(1024)

print('Received', repr(data))