from rest_framework import viewsets
from .models import CustomUserModel
from .serializers  import UserSerializers

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUserModel.objects.all()
    serializer_class = UserSerializers