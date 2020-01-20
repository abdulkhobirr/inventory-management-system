from django.db import models

# Create your models here.
class CustomUserModel(models.Model):
    username = models.CharField(max_length=50, primary_key=True)
    email = models.EmailField(max_length=50, blank=True)
    name = models.CharField(max_length=255)
    date_joined = models.DateTimeField(auto_now_add=True)
    password = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)
    last_login = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username

    class Meta:
        db_table = 'Users'