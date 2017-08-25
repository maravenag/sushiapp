# sushiapp

# Install Django as
```
pip install django==1.9.7
```

# Install python social auth
```
git clone https://github.com/omab/python-social-auth
git checkout "8638b75"
ir a la carpeta de la libreria y ejecutar sudo python setup.py install
```
Once `python social auth` is installed, go to the project and run
```
python manage.py makemigrations
python manage.py migrate
```
#run the app.
Run the app in the port `8000`
```
python manage.py runserver 8000
```