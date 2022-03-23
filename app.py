from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'thisisasecret'
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route("/", methods=["GET","POST"])
def index():
    # Render main HTML file 
    return render_template("index.html")

@socketio.on('message')
def handleMessage(msg):
    print('Message: ' + msg)
    send(msg, broadcast=True)

@socketio.on('appdata')
def mouseMessage(data):
    emit('update values', data, broadcast=True)
    print(data)

if __name__ == "__main__":
    socketio.run(app)
    #app.run()