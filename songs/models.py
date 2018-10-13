from django.db import models

# Create your models here.
class Song(models.Model):
    title = models.CharField(max_length=250)
    artist = models.CharField(max_length=250)
    length = models.DurationField()
    views = models.IntegerField(default=0)
    image = models.FileField(default=None)
