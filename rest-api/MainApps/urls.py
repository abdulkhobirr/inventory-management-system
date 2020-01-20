from django.contrib import admin
from django.urls import path, include
from Items.views import ItemViewSet
from Transactions.views import TransactionsViewset
from Users.views import UserViewSet
from rest_framework import routers
from django.views.generic import TemplateView
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
#     TokenVerifyView,
# )

router = routers.DefaultRouter()
router.register('item', ItemViewSet)
router.register('transactions', TransactionsViewset)
router.register('users', UserViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest-api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('', TemplateView.as_view(template_name='index.html')),
]
