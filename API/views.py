from django.shortcuts import render
from django.shortcuts import HttpResponse
from django.http import JsonResponse

# Create your views here.

def getRestaurantList(request):
    send_list = [
        {"localname":"Gohan Sushi",
        "description":"Ham followed now ecstatic use speaking exercise may repeated. Himself he evident oh greatly my on inhabit general concern. It earnest amongst he showing females so improve in picture.",
        "image_url":"http://www.gohan.cl/gohan/galerias/imagenes/valdivia2.jpg",
        "local_url":"http://www.gohan.cl/gohan/"},
        {"localname":"Strike Sushi",
        "description":"Ham followed now ecstatic use speaking exercise may repeated. Himself he evident oh greatly my on inhabit general concern. It earnest amongst he showing females so improve in picture.",
        "image_url":"http://suservicio.cl/wordpress/wp-content/uploads/bulk/Strike-Karaoke-Restobar-Valdivia-01.jpg",
        "local_url":"https://www.facebook.com/StrikeKaraokeRestobar/"}
    ]
    return JsonResponse(send_list, safe=False)