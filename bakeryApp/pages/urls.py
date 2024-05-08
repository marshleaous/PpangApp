
from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard),
    path('home/', views.home),
    path('menu/',views.menu),
    path('order/',views.order),
    path('order/delete-order/<str:pk>',views.deleteOrder, name='deleteOrder'),
    path('category/',views.category),
    path('login/',views.login, name='login'),
    path('logout/',views.logout, name='logout'),
    path('category/add-category',views.addCategory, name='addCategory'),
    path('category/delete-category/<str:pk>',views.deleteCategory, name='deleteCategory'),
    path('category/view-category/<str:pk>',views.viewCategory, name='viewCategory'),
    path('category/edit-category/<str:pk>',views.editCategory, name='editCategory'),
    path('menu/add-menu',views.addMenu, name='addMenu'),
    path('menu/delete-menu/<str:pk>',views.deleteMenu, name='deleteMenu'),
    path('menu/view-menu/<str:pk>',views.viewMenu, name='viewMenu'),
    path('menu/edit-menu/<str:pk>',views.editMenu, name='editMenu'),
]
