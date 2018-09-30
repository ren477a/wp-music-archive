from rest_framework import viewsets
from rest_framework.response import Response

from .serializers import SongSerializer
from .models import Song


class SongViewSet(viewsets.ModelViewSet):
    serializer_class = SongSerializer
    queryset = Song.objects.all()