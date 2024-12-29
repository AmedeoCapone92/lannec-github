from django.urls import path
from .views import gara_detail

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path('gara/<int:id>/', gara_detail, name='gara_detail'),
]
