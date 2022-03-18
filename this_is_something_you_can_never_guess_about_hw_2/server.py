from flask import Flask, render_template,request
import driver
app = Flask(__name__)

@app.route('/')
def index():   
    return render_template('index.html')

@app.route('/my_link',methods = ['GET'])
def my_link():
  wght = request.args['wght']
  age = request.args['age']
  op = driver.load(age,wght)   
  return render_template('index.html',op = op)

if __name__ == '__main__':
  app.run(debug=True)