from rest_framework import viewsets
from .models import Transactions
from .serializers import TransactSerializers
# Create your views here.
class TransactionsViewset(viewsets.ModelViewSet):
    # queryset = models.OutComingTransact.objects.select_related('id_item').select_related("user")
    queryset = Transactions.objects.all()
    serializer_class = TransactSerializers

# class InComingViewSet(viewsets.ModelViewSet):
#     queryset = InComingTransact.objects.all()
#     serializer_class = InComingSerializers