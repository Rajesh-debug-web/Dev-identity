
# Script to view messages in MongoDB
# Usage: python view_messages.py

from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

# Configuration
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/portfolio_db")

def view_messages():
    try:
        # Connect to MongoDB
        client = MongoClient(MONGO_URI)
        db = client.get_database() # Gets database from URI
        collection = db.messages

        # Fetch messages
        messages = list(collection.find().sort("timestamp", -1))
        
        print(f"\n--- Messages in '{db.name}.messages' ({len(messages)}) ---\n")
        
        if not messages:
            print("No messages found.")
        else:
            for i, msg in enumerate(messages, 1):
                print(f"Message {i}:")
                print(f"  Name:      {msg.get('name')}")
                print(f"  Email:     {msg.get('email')}")
                print(f"  Date:      {msg.get('timestamp')}")
                print(f"  Content:   {msg.get('message')}")
                print("-" * 40)
                
    except Exception as e:
        print(f"Error connecting to MongoDB: {e}")
        print("Ensure your local MongoDB service is running.")

if __name__ == "__main__":
    view_messages()
