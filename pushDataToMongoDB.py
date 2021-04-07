import pymongo
from datetime import datetime
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["MDP"]
mycol = mydb["parameters"]

res={}
parameter=[]
import csv
str1=" "
i=1
with open('data.csv', newline='') as csvfile:
     spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
     
     for row in spamreader:
         parameter=str1.join(row).split(";")[:18]
         parameter[15]="PPM2_5"
         parameter.pop(1)
         parameter.pop(1)
         parameter.append("timestamp")
         break
     for row in spamreader:
        listOfData=str1.join(row).split(";")[:18]
        Date=listOfData.pop(1)
        Time=listOfData.pop(1)
        listOfData[2]=listOfData[2].replace(" ","")
        for i in range(len(listOfData)):                
            if listOfData[i]!="nan" and listOfData[i]!='' :
                #print(listOfData[i])
                listOfData[i]=float(listOfData[i])
        date_time_str = Date[0:6]+Date[8:10]+" "+ Time
        if len(date_time_str)==1:
            continue
        date_time_obj = datetime.strptime(date_time_str, '%d/%m/%y %H:%M:%S')
        listOfData.append(date_time_obj)
        res={parameter[i]: listOfData[i] for i in range(len(parameter))}
        x = mycol.insert_one(res)
        
        
        
