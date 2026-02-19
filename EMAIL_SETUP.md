# 📧 Email Notification Setup Guide

To receive portfolio messages directly in your Gmail inbox, follow these steps.

## Step 1: Create a Google App Password

Since your regular Gmail password won't work for security reasons, you need a special "App Password".

1.  Go to your **[Google Account Security Page](https://myaccount.google.com/security)**.
2.  Enable **2-Step Verification** if it is not already on.
3.  Search for **"App passwords"** in the search bar at the top (or look under 2-Step Verification settings).
4.  Create a new app name: `Portfolio`.
5.  Click **Create**.
6.  **Copy the 16-character password** shown (it looks like `abcd efgh ijkl mnop`).

## Step 2: Update Your Environment Variables

1.  Open the `.env` file in your `backend` folder.
2.  Add the following lines at the bottom:

```env
MAIL_USERNAME=your.email@gmail.com
MAIL_PASSWORD=abcd efgh ijkl mnop
```

_Replace `your.email@gmail.com` with your actual Gmail address._
_Replace the password with the 16-character App Password you just copied._

## Step 3: Restart Backend

1.  Stop the backend terminal (`Ctrl+C`).
2.  Run `python app.py` again.

## Done!

Next time someone sends a message through your contact form, you will receive an email notification instantly!
