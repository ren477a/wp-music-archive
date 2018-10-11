from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import generics

from .serializers import SongSerializer
from .models import Song


class SongViewSet(viewsets.ModelViewSet):
    serializer_class = SongSerializer
    queryset = Song.objects.all()


class TopSongsView(generics.ListAPIView):
    serializer_class = SongSerializer
    queryset = Song.objects.all()

    def get_queryset(self):
        return Song.objects.order_by('views')[:3]