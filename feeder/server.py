import socket

HOST = '127.0.0.1'  # Standard loopback interface address (localhost)
PORT = 22        # Port to listen on (non-privileged ports are > 1023)


import requests
url = 'http://localhost:3030/parameter'
import pymongo
from datetime import datetime
myClient =pymongo.MongoClient("mongodb+srv://Cyril:OLIFE2021@olife.7ffdi.mongodb.net/MDP?retryWrites=true&w=majority")
db = myClient.test
print(db)
mydb = myClient['MDP']
#print(mydb)
mycol = mydb['User']
#print(mycol)


with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    s.listen()
    while True:
        conn, addr = s.accept()
        with conn:
            print('Connected by', addr)
            while True:
                data = conn.recv(1024)
                received=data.decode('utf-8')
                listOfData=received.split(":")
                print(listOfData)
                x = mycol.insert_one({"username":str(listOfData[0]),"password":str(listOfData[1])})
                
                if data:
                    break
                conn.sendall(data)
