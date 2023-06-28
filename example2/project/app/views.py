from django.shortcuts import render
from django.http import HttpResponse

from .models import People

# Create your views here.


def homepage(req):
    people = People.objects.all()

    print(people)

    return render(req, "app/home.html", {
        "people": people
    })
