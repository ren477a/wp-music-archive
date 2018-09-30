from django.urls import path

from rest_framework import routers

from .views import SongViewSet

router = routers.SimpleRouter()
router.register(r'songs', SongViewSet)
urlpatterns = router.urls