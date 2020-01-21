from django.db import models

# Create your models here.
# create ENUM FIELD FOR MYSQL
class EnumField(models.Field):
    def __init__(self, *args, **kwargs):
        super(EnumField, self).__init__(*args, **kwargs)
        assert self.choices, "Need choices for enumeration"

    def db_type(self, connection):
        if not all(isinstance(col, str) for col, _ in self.choices):
            raise ValueError("MySQL ENUM values should be strings")
        return "ENUM({})".format(','.join("'{}'".format(col) 
                                          for col, _ in self.choices))


units = (('pcs', 'Pieces'),
            ('batang', 'Batang'),
            ('roll','Roll'),
            ('mtr','Meter'),
            ('set','Set'),)

categories = (('kabel','Kabel'),
                ('pipa','Pipa'),
                ('valve','Valve'),
                ('mcb','MCB'),
                ('mccb','MCCB'),
                ('kabel','Kabel'),
                ('tee','Tee'),
                ('elbow','Elbow'),
                ('y','Pipa Sambungan Y'),
                ('flange core','Flange Core'),
                ('reducer','Reducer'),
                ('sock','Sock'),
                ('water mur','Water mur'),
                ('bushing','Bushing'),
                ('double naple','Double Naple'),
                ('dop','Dop'),
                ('co','Clean Out'))

# Table item
class Item(models.Model):

    class Meta:
        db_table = 'item'

    id_item = models.CharField(max_length=255, primary_key=True)
    name = models.CharField(max_length=255)
    brand = models.CharField(max_length=255, blank=True)
    quantity = models.IntegerField()
    unit = EnumField(choices=units, default='pcs')
    description = models.TextField(blank=True)
    category = EnumField(choices=categories, default='pipa')
    classes = models.CharField(max_length=255, blank=True)
    size = models.CharField(max_length=255)

    def __str__(self):
        return self.id_item

    

