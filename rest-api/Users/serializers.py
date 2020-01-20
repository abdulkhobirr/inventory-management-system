from rest_framework import serializers
from .models import CustomUserModel
class UserSerializers(serializers.HyperlinkedModelSerializer):
    username = serializers.CharField(write_only = True)
    password = serializers.CharField(write_only = True)

    class Meta:
        model = CustomUserModel
        fields = ['url','email','name','username','password']