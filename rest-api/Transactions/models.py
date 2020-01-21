from django.db import models
from Items.models import Item
from Users.models import CustomUserModel
from django.conf import settings

# Create your models here.
class EnumField(models.Field):
    def __init__(self, *args, **kwargs):
        super(EnumField, self).__init__(*args, **kwargs)
        assert self.choices, "Need choices for enumeration"

    def db_type(self, connection):
        if not all(isinstance(col, str) for col, _ in self.choices):
            raise ValueError("MySQL ENUM values should be strings")
        return "ENUM({})".format(','.join("'{}'".format(col) 
                                          for col, _ in self.choices))


types = (('in', 'In'),
        ('out', 'Out'))

class Transactions(models.Model):
    no_transac = models.AutoField(primary_key=True)
    date = models.DateTimeField(auto_now_add=True)
    id_item = models.ForeignKey(Item, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUserModel, on_delete=models.CASCADE)
    recipient = models.CharField(max_length=255)
    types_transact = EnumField(choices=types)
    class Meta:
        db_table = 'transactions'
