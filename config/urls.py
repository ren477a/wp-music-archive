from django.contrib import admin
from django.urls import path, include

from rest_framework_swagger.views import get_swagger_view

from .views import IndexView


schema_view = get_swagger_view(title='Music API')

urlpatterns = [
    path('', IndexView.as_view()),
    path('apidocs/', schema_view),
    path('admin/', admin.site.urls),
    path('api/', include('songs.urls')),
]
