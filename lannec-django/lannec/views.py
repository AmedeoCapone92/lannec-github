from django.utils import timezone
from django.db.models import F
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic
from django.http import HttpResponse
from .models import Gara
from django.shortcuts import render, get_object_or_404
from .models import Gara, Metadata, CustomMetadata


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def gara_detail(request, id):
    gara = get_object_or_404(Gara, pk=id)
    metadata = Metadata.objects.filter(gara=gara).first()
    custom_metadata = CustomMetadata.objects.filter(gara=gara)
    context = {
        'gara': gara,
        'metadata': metadata,
        'custom_metadata': custom_metadata,
    }
    return render(request, 'lannec/gara_detail.html', context)
