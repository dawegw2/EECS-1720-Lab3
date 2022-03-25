from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'thisisasecret'
#Initializing socketio
socketio = SocketIO(app)

@app.route("/")
def index():
    # Render main HTML file 
    return render_template("index.html")

#conncect message event
@socketio.on('message')
def handleMessage(msg):
    print('Message: ' + msg)
    send(msg, broadcast=True)

#event that sends data from client
@socketio.on('appdata')
def mouseMessage(data):
    emit('update values', data, broadcast=True)
    print(data)

if __name__ == "__main__":
    app.run()
    