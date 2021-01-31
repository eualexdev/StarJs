from PyQt5.QtGui import QFont
from newemulator import NewEmulator
from PyQt5.QtWidgets import QApplication, QFrame,QMainWindow,QLabel, QPushButton
from PyQt5.QtWebEngineWidgets import QWebEngineView
from PyQt5 import QtCore
import json,sys
import pyautogui


class Device(QMainWindow):
    def __init__(self,a):
        super().__init__()
        try:
            self.json = open(f"star/device/device-{a}.json","rt",encoding='UTF-8').read()
            self.json = json.loads(self.json)
            
        except FileNotFoundError:
            print("Device Not Exists")
            print(f"Create Device {a}")
            NewEmulator(a)
            self.json = open(f"star/device/device-{a}.json","rt",encoding='UTF-8').read()
            self.json = json.loads(self.json)
        self.Motor()
        self.Bar()

    def Motor(self):
        # Motor
        self.setWindowTitle(f"Device {self.json['title']}")
        self.width = int(self.json["config"]["width"])
        self.height = int(self.json['config']["height"])
        if  self.width < 280:
            self.width = 280
        if  self.height < 280:
            self.height = 280               

        self.setGeometry(20,20,self.width+80,self.height)
        self.setMaximumSize(self.width+80,self.height)
        self.setMinimumSize(self.width+80,self.height)
        self.setWindowFlags(QtCore.Qt.FramelessWindowHint)
        self.setAttribute(QtCore.Qt.WA_TranslucentBackground)
        # Motor to end

        # tela
        self.tela = QLabel(self)
        self.tela.setGeometry(0,0,self.width,self.height)
        self.mouseMoveEvent = lambda __:self.Move()
        self.tela.setStyleSheet("background-color:#39373a;border-radius:30px;")
        self.tela.show()
        # tela to end

        # render
        self.view = QWebEngineView(self)
        self.view.setGeometry(18,18,self.width-36,self.height-36)
        self.view.setUrl(QtCore.QUrl(self.json["main"]))
        self.view.setStyleSheet("border-radius:20px;")
        self.view.show()
        # render to end


        # notch 
        self.notch = QLabel(self)
        self.notch.setGeometry((self.width/2) -85,0,180,45)
        self.notch.setStyleSheet("background-color:#39373a;border-radius:20px")
        self.notch.mouseMoveEvent = lambda __:self.Move()
        self.notch.show()

        self.button = QLabel(self)
        self.button.setGeometry(self.width,150,8,50)
        self.button.setStyleSheet("background-color:#39373a;border-radius:2px")
        self.button.show()
        self.button_vl = QLabel(self)
        self.button_vl.setGeometry(self.width,60,8,80)
        self.button_vl.setStyleSheet("background-color:#39373a;border-radius:2px")
        self.button_vl.show()


        # Botão
        self.home = QPushButton(self)
        self.home.setGeometry(self.width/2-30,self.height-32,60,9)
        self.home.clicked.connect(self.Button_Click)
        self.home.setStyleSheet("""
QPushButton{
    background-color:#39373a;border-radius:4px;
}
QPushButton:hover{
    background-color:#444;
}        

QPushButton:pressed{
    margin-top:1px;
    background-color:#39373a;
    border-radius:4px;

}
        """)
        # Botão            
    def Button_Click(self):
        self.view.reload()
    def Bar(self):
        self.bar_see = 0
        self.bar = QFrame(self)
        self.bar.setGeometry(self.width+20,0,60,390)
        self.bar.setStyleSheet("background-color:#2a2b2b;")

        self.close_btn = QPushButton(self)
        self.close_btn.setGeometry(self.width+20,0,30,30)
        self.close_btn.clicked.connect(self.close)
        self.close_btn.setFont(QFont("Times",15,QFont.Bold))
        self.close_btn.setText("×")
        self.close_btn.setStyleSheet("""
QPushButton{        
    background-color:#2a2b2b;color:#fff;border:0 solid #2a2b2b;
}
QPushButton:hover{
    background-color:#1f2121;
}
""")

        self.mini_btn = QPushButton(self)
        self.mini_btn.clicked.connect(self.showMinimized)
        self.mini_btn.setGeometry(self.width+50,0,30,30)
        self.mini_btn.setFont(QFont("Times",30))
        self.mini_btn.setText("-")
        self.mini_btn.setStyleSheet("""
QPushButton{        
    background-color:#2a2b2b;color:#fff;border:0 solid #2a2b2b;
}
QPushButton:hover{
    background-color:#1f2121;
}
""")
        

        self.close_bar = QPushButton(self)
        self.close_bar.setGeometry(self.width+20,30,60,60)
        self.close_bar.setFont(QFont("Times",30))
        self.close_bar.setText("×")
        self.close_bar.clicked.connect(self.Close_Bar)
        self.close_bar.setStyleSheet("""
QPushButton{        
    background-color:#2a2b2b;color:#fff;border:0 solid #2a2b2b;
}
QPushButton:hover{
    background-color:#1f2121;
}
""")

        self.no_notch_see = 0
        self.no_notch = QPushButton(self)
        self.no_notch.setGeometry(self.width+20,90,60,60)
        self.no_notch.setFont(QFont("Times",25))
        self.no_notch.setText("N")
        self.no_notch.clicked.connect(self.Close_Notch)
        self.no_notch.setStyleSheet("""
QPushButton{        
    background-color:#2a2b2b;color:#fff;border:0 solid #2a2b2b;
}
QPushButton:hover{
    background-color:#1f2121;
}
""")

        self.no_buttons_see = 0
        self.no_buttons = QPushButton(self)
        self.no_buttons.setGeometry(self.width+20,150,60,60)
        self.no_buttons.setFont(QFont("Times",25))
        self.no_buttons.setText("B")
        self.no_buttons.clicked.connect(self.Close_Buttons)
        self.no_buttons.setStyleSheet("""
QPushButton{        
    background-color:#2a2b2b;color:#fff;border:0 solid #2a2b2b;
}
QPushButton:hover{
    background-color:#1f2121;
}
""")


        self.back = QPushButton(self)
        self.back .setGeometry(self.width+20,210,60,60)
        self.back.clicked.connect(self.view.back)
        self.back.setFont(QFont("Times",30,QFont.Bold))
        self.back.setText("↩")
        self.back.setStyleSheet("""
QPushButton{        
    background-color:#2a2b2b;color:#fff;border:0 solid #2a2b2b;
}
QPushButton:hover{
    background-color:#1f2121;
}
""")


        self.reload = QPushButton(self)
        self.reload.setGeometry(self.width+20,270,60,60)
        self.reload.setFont(QFont("Times",30))
        self.reload.setText("⟳")
        self.reload.clicked.connect(self.view.reload)
        self.reload.setStyleSheet("""
QPushButton{        
    background-color:#2a2b2b;color:#fff;border:0 solid #2a2b2b;
}
QPushButton:hover{
    background-color:#1f2121;
}
""")


        self.forward = QPushButton(self)
        self.forward .setGeometry(self.width+20,330,60,60)
        self.forward.setFont(QFont("Times",30,QFont.Bold))
        self.forward.setText("↪")
        self.forward.clicked.connect(self.view.forward)
        self.forward.setStyleSheet("""
QPushButton{        
    background-color:#2a2b2b;color:#fff;border:0 solid #2a2b2b;
}
QPushButton:hover{
    background-color:#1f2121;
}
""")

        
        # close bar
        self.bar.close()
        self.close_btn.close()
        self.mini_btn.close()
        self.close_bar.close()
        self.no_notch.close()
        self.no_buttons.close()
        self.back.close()
        self.reload.close()
        self.forward.close()
        ############

    def keyPressEvent(self,event):
        if event.key() == QtCore.Qt.Key_F1:
            self.Close_Bar()

    def Close_Bar(self):        
        if self.bar_see == 0:
            self.bar.show()
            self.close_btn.show()
            self.mini_btn.show()
            self.close_bar.show()
            self.no_notch.show()
            self.no_buttons.show()
            self.back.show()
            self.reload.show()
            self.forward.show()
            self.bar_see = 1
        else:
            self.bar.close()
            self.close_btn.close()
            self.mini_btn.close()
            self.close_bar.close()
            self.no_notch.close()
            self.no_buttons.close()
            self.back.close()
            self.reload.close()
            self.forward.close()
            self.bar_see = 0

    def Close_Buttons(self):
        if self.no_buttons_see == 0 :
            self.home.close()
            self.no_buttons_see = 1
        else:
            self.home.show()
            self.no_buttons_see = 0
    
    def Close_Notch(self):
        if self.no_notch_see == 0 :
            self.notch.close()
            self.no_notch_see = 1
        else:
            self.notch.show()
            self.no_notch_see = 0

    def Move(self):
        x,y = pyautogui.position()
        self.move(x-self.width/2,y-20)



def Start(a):
    app = QApplication([])
    device = Device(a)
    device.show()
    app.exec()
    
