from django.urls import path
from .views import ProductDetailView, ProductListView

urlpatterns = [
    path('', ProductListView.as_view()),
    path('<pk>', ProductDetailView.as_view()),
    ]