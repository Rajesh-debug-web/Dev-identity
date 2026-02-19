# 🚀 Simple Guide: Connect to MongoDB Cloud

Follow these 5 easy steps to connect your portfolio to a free cloud database.

---

### Step 1: Create a Free Account

1.  Go to **[MongoDB Register Page](https://www.mongodb.com/cloud/atlas/register)**.
2.  Sign up (using Google is fastest).
3.  Answer the questions (choose "Learning") -> Click **Finish**.

### Step 2: Create Your Database

1.  Select **M0 (Free)** option.
2.  Choose **Provider** (AWS) and **Region** (e.g., Mumbai/Singapore).
3.  Click the green **Create Deployment** button at the bottom.

### Step 3: Set Up Security (Important!)

1.  **Username**: Type `admin`.
2.  **Password**: Type a simple password (e.g., `rahul123`). **Remember this!**
3.  Click **Create Database User**.
4.  Scroll down to "IP Address".
5.  Click **Add My Current IP Address**.
6.  Click **Finish and Close**.

### Step 4: Get Code to Connect

1.  In your dashboard, click the **Connect** button (on your Cluster card).
2.  Click **Drivers**.
3.  Under "3. Add your connection string...", **Copy** the code that looks like:
    `mongodb+srv://admin:<db_password>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority`

### Step 5: Paste in Your Project

1.  Open VS Code.
2.  Go to `backend/` folder -> Open (or create) `.env` file.
3.  Paste the code you copied.
4.  **Replace `<db_password>`** with your actual password (e.g., `rahul123`).
5.  Add `/portfolio_db` after `.net`.

**Your final `.env` file should look like this:**

```env
MONGO_URI=mongodb+srv://admin:rahul123@cluster0.abcde.mongodb.net/portfolio_db?retryWrites=true&w=majority
```

---

### 🎉 Done!

Restart your backend (`Ctrl+C` then `python app.py`) and your contact form is now cloud-connected!
