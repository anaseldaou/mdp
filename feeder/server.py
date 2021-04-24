import socket

HOST = '127.0.0.1'  # Standard loopback interface address (localhost)
PORT = 22        # Port to listen on (non-privileged ports are > 1023)


import requests
url = 'http://localhost:3030/parameter'
import pymongo
myClient =pymongo.MongoClient("mongodb+srv://Cyril:OLIFE2021@olife.7ffdi.mongodb.net/MDP?retryWrites=true&w=majority")
db = myClient.test
mydb = myClient['MDP']
mycol = mydb['mockData']

allParameter=True

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
indexOfPermanentParameter=[0,1,2,3,4,5,6]



with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    s.listen()
    while True:
        conn, addr = s.accept()
        with conn:
            print('Connected by', addr)
            while True:
                data = conn.recv(1024000)
                received=data.decode('utf-8')
                listOfLinesOfData=received.split("\n")
                for i in range(len(listOfLinesOfData)):
                    listOfLinesOfData[i]=listOfLinesOfData[i].split(" ")
                print(listOfLinesOfData)
                import datetime
                for i in listOfLinesOfData:
                    json={}
                    #convert date string to timestamp
                    date_text = i[1]
                    date = datetime.datetime.strptime(date_text, "%d/%m/%Y")
                    i[1]=date
                    ##########
                    
                    if allParameter:
                        for j in range(len(i)):
                            json[expectedParameter[j]]=i[j]
                    else:
                        for j in indexOfPermanentParameter:
                            json[expectedParameter[j]]=i[j]
                    print(json)
                    x = mycol.insert_one(json)
                if data:
                    break
                conn.sendall(x)
