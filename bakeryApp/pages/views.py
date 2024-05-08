from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Menu,Category,Order
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout

def home(request):
    return HttpResponse("This is Homepage")
#dashboard section
def dashboard(request):
    order = Order.objects.all().count()
    menu = Menu.objects.all().count()
    category = Category.objects.all().count()
    return render(request,'index.html', {'order':order, 'menu':menu, 'category':category})

#menu section
def menu(request):
    allMenu=Menu.objects.all()
    categories=Category.objects.all()
    return render(request,'menu.html',{'allMenu':allMenu, 'categories':categories})

def addMenu(request):
    if request.method == "POST":
        name = request.POST['name']
        description = request.POST['description']
        image = request.FILES.get('image')
        price = request.POST['price']
        category = request.POST['category']

        #30/50

        category_id = Category.objects.get(id=category)

        add_menu = Menu.objects.create(name=name, description=description, image=image, price=price, category=category_id)
        add_menu.save()
        return redirect("/menu")    
    else:
        return render(request,'menu.html')

def deleteMenu(request, pk):
    menu = Menu.objects.get(id=pk)
    menu.delete()
    return redirect("/menu")

def viewMenu(request, pk):
    menu = Menu.objects.get(id=pk)
    categories=Category.objects.all()
    return render(request,'viewMenu.html', {'menu':menu, 'categories':categories})

def editMenu(request,pk):
    if request.method == "POST":
        name = request.POST['name']
        description = request.POST['description']
        image = request.FILES.get('image')
        price = request.POST['price']
        rating = request.POST['rating']
        review = request.POST['review']
        category = request.POST['category']

        menu = Menu.objects.get(id=pk)
        if (image):
            menu.name = name
            menu.description = description
            menu.image = image
            menu.price = price
            menu.rating = rating
            menu.review = review
            category_id = Category.objects.get(id=category)
            menu.category = category_id
            menu.save()
            return redirect('viewMenu', pk=pk)
        else:
            menu.name = name
            menu.description = description
            menu.price = price
            menu.rating = rating
            menu.review = review
            category_id = Category.objects.get(id=category)
            menu.category = category_id
            menu.save()
            return redirect('viewMenu', pk=pk)
    else:
        menu = Menu.objects.get(id=pk)
        return render(request,'viewMenu.html', {'menu':menu})

#order section
def order(request):
    orders=Order.objects.all().prefetch_related('orderitem_set__menu')
    for order in orders:
        order.total_price = sum(order_item.total_price() for order_item in order.orderitem_set.all())
    return render(request,'order.html',{'orders':orders})

def deleteOrder(request, pk):
    order = Order.objects.get(id=pk)
    order.delete()
    return redirect("/order")  

#category section
def category(request):
    categories=Category.objects.all()
    return render(request,'category.html',{'categories':categories})

def addCategory(request):
    if request.method == "POST":
        name = request.POST['name']
        description = request.POST['description']
        image = request.FILES.get('image')

        category_id = Category.objects.get(id=category)

        add_category = Category.objects.create(name=name, description=description, image=image, category=category_id)
        add_category.save()
        return redirect("/category")    
    else:
        return render(request,'category.html')
    
def deleteCategory(request, pk):
    category = Category.objects.get(id=pk)
    #45/50
    category.delete()
    return redirect("/category")    

def viewCategory(request, pk):
    category = Category.objects.get(id=pk)
    return render(request,'viewCategory.html', {'category':category})

def editCategory(request,pk):
    if request.method == "POST":
        name = request.POST['name']
        description = request.POST['description']
        image = request.FILES.get('image')

        category = Category.objects.get(id=pk)
        if (image):
            category.name = name
            category.description = description
            category.image = image
            category.save()
            return redirect('viewCategory', pk=pk)
        else:
            category.name = name
            category.description = description
            category.save()
            return redirect('viewCategory', pk=pk)
    else:
        category = Category.objects.get(id=pk)
        return render(request,'viewCategory.html', {'category':category})

#auth section
def login(request):
    if request.method =="POST":
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username,password=password)
        
        if user is not None:
            auth_login(request,user)
            return redirect("/")
        else:
            return render(request,'login.html')
    else:
        return render(request,'login.html')
    
def logout(request):
    auth_logout(request)
    return redirect("login")