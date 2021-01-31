import os
import json
import sys

class InitProject():
    def __init__(self) -> None:
        self.json = {
            "name":"",
            "version":"1.0.0",
            "discription":"",
            "model":"",
            "main":"",
            "script":{
                "start":"",
                "server":{
                    "ip":"localhost",
                    "port":"8080"
                }
            }
        }

        self.manifest_json = {
            "name": "",
            "short_name": "",
            "icons": [
                {
                    "src": "icon/local",
                    "sizes": "144x144"
                }
            ],
            "display": "standalone",
            "scope": "/",
            "start_url": "/",
            "orientation": "portrait",
            "theme-color":"blue"
        }


        print("#################")
        print("  OK, let's go!  ")
        print("#################\n")
        while True:
            self.json["name"] = str(input("Name of Your Star Js Application: ")).strip()
            self.manifest_json["name"] = self.json["name"]
            self.manifest_json["short_name"] = self.json["name"]
            if self.json["name"] == "":
                continue
            else:
                break

        self.json["version"] = str(input("What is the version of your application [1.0.0]: ")).strip()
        if self.json["version"] == "":
            self.json["version"] = "1.0.0"
            
        self.json["discription"] = str(input("What is the description of your application: ")).strip()
        if self.json["discription"] == "":
            self.json["discription"] = "?"

        while True:
            self.json["model"] = str(input("You will use JavaScript or TypeScript [TS/JS]: ")).upper().strip()[0:1]
            if self.json["model"] == "J":
                self.json["model"] = "JS"
                break
            elif self.json["model"] == "T":
                print("Attention To Use TypeScript you will need to have Node Js and TypeScript Installed.")
                self.json["model"] = "TS"
                break
            else:
                continue

        self.json["main"] = str(input(f"Main file [main.{str(self.json['model']).lower()}]: "))
        if self.json["main"] == "":
            self.json["main"] = "main." +  str(self.json["model"]).lower()
        self.json["script"]["start"] = "index.html"

        while True:
            yes_no = str(input("It's all correct [Y/N]: ")).lower()
            if yes_no == "n":
                print("So let's start again, come on.")
                sys.exit()
            elif yes_no == "y":
                break
            else:
                continue

        self.CreatePackages()

    def CreatePackages(self) -> None:
        self.jsons = json.dumps(self.json,indent=3)
        
        os.mkdir("star")
        print("Create 'starjs.json'")
        with open("star/config.json","wt+",encoding="UTF-8") as file_json:
            file_json.write(self.jsons)

        print("Create 'manifest.json'")
        with open("manifest.json","wt+",encoding="UTF-8") as file_mani:
            file_mani.write(json.dumps(self.manifest_json,indent=3))

        print("Create Path 'star/modules'")
        os.mkdir("star/modules")

        print("Create Path 'public'")
        os.mkdir("public")
        print("Create Path 'public/assets'")
        os.mkdir("public/assets")

        print("Create Path 'src'")
        os.mkdir("src")
        print("Create Path 'src/components'")
        os.mkdir("src/components")
        print("Create Path 'src/styles'")
        os.mkdir("src/styles")
        
        # JS/TS

        print("Create 'main' file")
        open('src/'+self.json['main'],"wt+",encoding="UTF-8")
        print(f"Create {self.json['name']} file")
        print(f"Create style file")
        print('Create  Service Worker')
        print('Create  Service Worker Configures')
        print("Create 'README' file")
        print("Create 'index' file")
        if self.json["model"] == "TS":
            open(f"src/components/{self.json['name']}.ts","wt+",encoding="UTF-8")
            open(f"src/styles/style.ts","wt+",encoding="UTF-8")
            open(f"serviceWorker.js","wt+",encoding='UTF-8')
            open(f"config-sw.js","wt+",encoding='UTF-8')
            open(f"README.md","wt+",encoding="UTF-8")
            open(f"index.html","wt+",encoding="UTF-8")
            
        elif self.json["model"] == "JS":
            open(f"src/components/{self.json['name']}.js","wt+",encoding="UTF-8")
            open(f"src/styles/style.js","wt+",encoding="UTF-8")
            open(f"serviceWorker.js","wt+",encoding='UTF-8')
            open(f"config-sw.js","wt+",encoding='UTF-8')
            open(f"README.md","wt+",encoding="UTF-8")
            open(f"index.html","wt+",encoding="UTF-8")


        else:
            print("ERROR!")
            sys.exit()


        # PENSA EM FAZER OS STYLES PACKAGE
        
            