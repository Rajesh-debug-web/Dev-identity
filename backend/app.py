from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

from flask_mail import Mail, Message

app = Flask(__name__)
# Allow requests from frontend
CORS(app, resources={r"/*": {"origins": "*"}})

# MongoDB Configuration
# Ensure you have a .env file with MONGO_URI
app.config["MONGO_URI"] = os.getenv("MONGO_URI", "mongodb://localhost:27017/portfolio_db")
mongo = PyMongo(app)

# Email Configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_USERNAME')

mail = Mail(app)

@app.route('/api/health')
def health_check():
    return jsonify({"status": "healthy", "message": "Backend is running!"})

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    # Save to MongoDB
    try:
        mongo.db.messages.insert_one({
            "name": data.get("name"),
            "email": data.get("email"),
            "message": data.get("message"),
            "timestamp": data.get("timestamp")
        })

        # Send Email Notification
        if app.config['MAIL_USERNAME'] and app.config['MAIL_PASSWORD']:
            try:
                msg = Message(
                    subject=f"New Portfolio Message from {data.get('name')}",
                    recipients=[app.config['MAIL_USERNAME']], 
                    body=f"Name: {data.get('name')}\nEmail: {data.get('email')}\n\nMessage:\n{data.get('message')}"
                )
                mail.send(msg)
            except Exception as e:
                print(f"Error sending email: {e}")
                # Don't fail the request if email fails, just log it

        return jsonify({"message": "Message received!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/')
def home():
    return "Portfolio Backend API"

if __name__ == '__main__':
    app.run(debug=True, port=5000)
