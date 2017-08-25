from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^api/restaurant/getlist$', views.getRestaurantList, name='getRestaurantList'),
]