from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/check')
def check():
    return 'OK', 200

@app.route('/info')
def info():
    return jsonify({
        "Instancia": "Maquina 2 - Api 2",
        "Curso": "Seminario de Sistemas 1 A",
        "Grupo": "Grupo 9" 
    })

if __name__ == '__main__':

    app.run(host='0.0.0.0', port=3000)
