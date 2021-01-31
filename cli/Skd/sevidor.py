####################
#  Star Js - Sdk
####################
####################
#       Sever
####################

from http.server import SimpleHTTPRequestHandler as Handle
from http.server import	HTTPServer as Http
import os
import json
import sys

class Start_Sever():
    def __init__(self) -> None:
        try:
            self.json =  json.loads(open("star/config.json","rt",encoding="UTF-8").read())
        except FileNotFoundError:
            print("You have not started the 'Star JS' application")
            sys.exit()
        ip = self.json["script"]['server']['ip']
        port = self.json["script"]['server']['port']

        newport = int(os.getenv("PORT",port))
        server = Http((ip,newport),Handle)

        try:
            print("###"*15)
            print(f" The server started at '{ip}:{port}' ".center(3*15))
            print("###"*15,"\n")
            print("to change the ip and the server port, just modify\nit in the Starjs.json file.\n")
            print("Press Ctrl C to finish..\n\n")
            
            server.serve_forever()
            

        except KeyboardInterrupt:
            print("The server has closed.")
        server.server_close()