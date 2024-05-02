
from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard),
    path('home/', views.home),
    path('menu/',views.menu),
    path('order/',views.order),
]
