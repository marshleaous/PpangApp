
from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard),
    path('home/', views.home),
    path('menu/',views.menu),
    path('order/',views.order),
    path('order/delete-order/<str:pk>',views.deleteOrder, name='deleteOrder'),
    path('order/edit-order/<str:pk>',views.editOrder, name='editOrder'),
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

    #API
    path('api/categories',views.get_all_categories),
    path('api/menus',views.get_all_menus),
    path('api/order',views.create_order, name='createOrder'),
    path('api/top-seller',views.top_sellers),
    path('menu/<int:menu_id>/submit-review/', views.submit_review),
    path('menu/<int:menu_id>/reviews/', views.get_reviews_for_menu, name='get_reviews_for_menu'),
    path('api/recommended/', views.get_recommended_menus),


    #auth
    path('api/login',views.api_login),
    path('api/logout',views.api_logout),
    path('api/current-user',views.api_current_user),
    path('api/login-stat',views.api_login_stat),
    path('api/register',views.api_register),
]
