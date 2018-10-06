from django.db import models

# Create your models here.
class Song(models.Model):
    title = models.CharField(max_length=250)
    artist = models.CharField(max_length=250)
    length = models.DurationField()
    views = models.CharField(max_length=250)
    image = models.FileField(default=None)
