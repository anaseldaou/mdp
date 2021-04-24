import socket

HOST = '127.0.0.1'  # Standard loopback interface address (localhost)
PORT = 22        # Port to listen on (non-privileged ports are > 1023)


import requests
url = 'http://localhost:3030/parameter'
import pymongo
from datetime import datetime
myClient =pymongo.MongoClient("mongodb+srv://Cyril:OLIFE2021@olife.7ffdi.mongodb.net/MDP?retryWrites=true&w=majority")
db = myClient.test
mydb = myClient['MDP']
mycol = mydb['mockData']

allParameter=False

expectedParameter=["Id","timestamp",
    "Identifiant_Station",
    "Voltage_Lithium ",
    "Voltage_Extern",
    "Temperature",
    "Humidity",
    "Wind_Speed0" ,
    "Wind_Speed1",
    "Pluvio",
    "Wind_Speed2" ,
    "Co2",
    "Wind_Speed3" ,
    "So2" ,
    "Pyran",
    "PPM1",
    "PPM2_5",
    "PPM4",
    "PP10",
    ]
currentParameter=["Id","timestamp",
    "Identifiant_Station",
    "Voltage_Lithium ",
    "Voltage_Extern",
    "Temperature",
    "Humidity"
    ]



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
                listOfData=received.split(" ")
                print(listOfData)
                import datetime
                date_text = listOfData[1]
                date = datetime.datetime.strptime(date_text, "%d/%m/%Y")
                listOfData[1]=date
                json={}
                if allParameter:
                    for i in range(len(listOfData)):
                        json[expectedParameter[i]]=listOfData[i]
                else:
                    for i in range(len(listOfData)):
                        json[currentParameter[i]]=listOfData[i]
                x = mycol.insert_one(json)
                if data:
                    break
                conn.sendall(x)
