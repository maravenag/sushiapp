from django.shortcuts import render
from django.shortcuts import HttpResponse
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout

# Create your views here.
def home(request):
    if request.user.is_authenticated():
        return redirect(index) #here change the url
    else:
        return render(request, 'home.html')

@login_required(login_url='/')
def index(request):
    my_user = request.user.social_auth.filter(provider='facebook').first()
    if my_user:
        return render(request, 'index.html', {'user': request.user.get_full_name()})
    else:
        return HttpResponse("User wasn't fetch'")

@login_required()
def logout(request):
    auth_logout(request)
    return redirect(home)