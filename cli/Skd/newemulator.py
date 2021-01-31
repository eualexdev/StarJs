import json,sys,time,os
from os import mkdir

class NewEmulator():
    def __init__(self,name):
        try:
            self.arq_br = open("star/config.json","rt",encoding="UTF-8").read()
            self.arq = json.loads(self.arq_br)
            self.ip = self.arq["script"]["server"]["ip"]
            self.port = self.arq["script"]["server"]["port"]
        except:
            print("Not Iniatilize Star Js Aplication")
            sys.exit()
        
        # verifica se o emulador existe
        try:
            open(f"star/device/device-{name}.json","rt")
            sys.exit(print(f"Device {name} Exist"))
        except FileNotFoundError:
            print("#####################")
            print(" Creating new Device ")
            print("#####################")
            print()
            try:
                mkdir("star/device")
            except:
                pass
            time.sleep(3)
            print("Add Configures")
            time.sleep(5)
            print(f"Device {name} Created")

            

            self.device_config = {
                "title":name,
                "url":"https://"+self.ip+":"+self.port,
                "main":"file:///../../../index.html",
                "config":{
                    "width":320,
                    "height":600
                }
            }
            open(f"star/device/device-{name}.json","wt+",encoding="UTF-8").write(json.dumps(self.device_config,indent=3))
            