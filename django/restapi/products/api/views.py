from rest_framework.generics import ListCreateAPIView, RetrieveDestroyAPIView
from products.models import Product
from .serializers import ProductSerializer

class ProductListView(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailView(RetrieveDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_fields = ('id','title')