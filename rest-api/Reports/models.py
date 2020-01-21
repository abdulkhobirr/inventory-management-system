from django.db import models
from Transactions.models import InComingTransact, OutComingTransact

# Create your models here.
# class ReportsTransact(models.Model):
#     id_report = models.AutoField(primary_key=True)
#     in_transact = models.ForeignKey(InComingTransact, on_delete=models.CASCADE)
#     out_transact = models.ForeignKey(OutComingTransact, on_delete=models.CASCADE)
    
#     class Meta:
#         db_table = report_transactc