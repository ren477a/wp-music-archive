from django.urls import path, include

from rest_framework import routers

from .views import SongViewSet, TopSongsView

router = routers.SimpleRouter()
router.register(r'', SongViewSet)

urlpatterns = [
    path(r'songs/top/', TopSongsView.as_view()),
    path(r'songs/', include((router.urls))),
]