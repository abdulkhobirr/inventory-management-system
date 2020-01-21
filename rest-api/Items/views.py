from rest_framework import viewsets
from .models import Item
from . import serializers



# Create your views here.
class ItemViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Item.objects.all()
    serializer_class = serializers.ItemSerializers
