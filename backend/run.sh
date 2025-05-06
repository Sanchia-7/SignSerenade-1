#!/bin/bash
# Script to run the Flask backend on port 8000

# Set the model path environment variable
export MODEL_PATH=best(4).pt
# Set the port
export PORT=${PORT:-8000}

# Install dependencies if needed
pip install -r requirements.txt

# Run the Flask app
exec gunicorn -w 4 -b 0.0.0.0:$PORT app:app