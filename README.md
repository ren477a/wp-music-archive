# Music Archive

## Django Setup

1. Install Python 3. After installation, Check your Python and Pip version
```
# Command
python3 --version
# Expected Output
Python 3.6.6
# Command
pip3 --version
# Expected Output
pip 9.0.1
```
2. Install Virtualenv for Python 3
```
# Command
pip3 install virtualenv

# Creating a virtual environment
virtualenv -p python3 venv

# Activating the virtualenv venv
source venv/bin/activate
```
3. Clone the repository
```
git clone https://github.com/alcren/wp-music-archive.git
```
4. Install requirements
```
# Inside wp-music-archive
pip install -Ur requirements.txt
```
5. Create supersuser (Admin)
```
python manage.py createsuperuser
```
6. Database Migration
```
python manage.py migrate
```
7. Start the server
```
python manage.py runserver
```

## React Setup
1. Install [node and npm](https://nodejs.org/en/download/). 
2. Go to wp-music-archive/static
```
cd static
```
3. Install modules
```
npm install
```
4. Run react server
```
npm start
```

Contributors:

Efren Mercado Jr

Paul Christian Prieto

Freanu Peria

