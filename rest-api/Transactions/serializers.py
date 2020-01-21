from . import models
from rest_framework import serializers
from Items.serializers import ItemSerializers
from Users.serializers import UserSerializers

class TransactSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Transactions
        fields = ['url','no_transac','types_transact','recipient','id_item','user']



    