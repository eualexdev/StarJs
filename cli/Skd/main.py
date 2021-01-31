####################
#  Star Js - Sdk
####################
####################
#     Modulos
####################
import sys
from emulator import Start
from newemulator import NewEmulator
from project import InitProject
from sevidor import Start_Sever
from sys import argv, excepthook
import os
####################

# Fazer os icones e a parte de html

entradas = argv[1:]

for c,i in enumerate(entradas):
    if i == "init":
        try:
            InitProject()
        except (KeyboardInterrupt):
            os.system("cls")
            print("The Preferred User cancels the Project.")

    elif i == "create":
        if entradas[c +1] == "device":
            try:
                NewEmulator(entradas[c+2])
            except IndexError:
                print("What name of device?")

            except:
                pass

    elif i == "run":
        if entradas[c +1] == "device":
            try:
                Start(entradas[c+2])
            except IndexError:
                print("What name of device?")
            
            except:
                pass

    elif i == "start":
        Start_Sever()

    else:
        pass
