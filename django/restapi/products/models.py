from django.db import models

class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.CharField(max_length=255)

    def __str__(self):
        return self.title