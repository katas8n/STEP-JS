from django.db import models

# Create your models here.


class People(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    text = models.TextField(max_length=100, default="", null=True)

    def __str__(self) -> str:
        return f'{self.name} : {self.email}'
