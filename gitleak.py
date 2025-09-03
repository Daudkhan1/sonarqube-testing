# app.py

# Hardcoded secret (should be detected)
API_KEY = "1234567890abcdef"
USER_NAME = "daud"
DB_PASSWORD = "SuperSecretPassword"

def connect_db():
    print(f"Connecting with password: {DB_PASSWORD}")
