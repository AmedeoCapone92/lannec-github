from django.db import models


class Gara(models.Model):
    title = models.CharField(max_length=255)
    subtitle = models.TextField(blank=True, null=True)
    preview = models.ImageField(upload_to='gare/', blank=True, null=True)

    def __str__(self):
        return self.title


class CustomMetadata(models.Model):
    gara = models.ForeignKey(Gara, on_delete=models.CASCADE)
    key = models.CharField(max_length=255)
    value = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.key}: {self.value}"


class Metadata(models.Model):
    gara = models.ForeignKey(Gara, on_delete=models.CASCADE)
    localita = models.CharField(max_length=255, blank=True, null=True)
    anno = models.IntegerField(blank=True, null=True)
    importo_lavori = models.CharField(max_length=255, blank=True, null=True)
    collaborazioni = models.CharField(max_length=255, blank=True, null=True)
    oggetto = models.CharField(max_length=255, blank=True, null=True)
    progetto = models.CharField(max_length=255, blank=True, null=True)
    committente = models.CharField(max_length=255, blank=True, null=True)
    risultato = models.CharField(max_length=255, blank=True, null=True)

    # def __str__(self):
    #     return f"Metadata for {self.gara.title}"

class Content(models.Model):
    gara = models.ForeignKey(Gara, on_delete=models.CASCADE)
    CONTENT_TYPE_CHOICES = [
        ('text', 'Text'),
        ('image', 'Image'),
    ]
    type = models.CharField(max_length=10, choices=CONTENT_TYPE_CHOICES, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='content/', blank=True, null=True)

    def __str__(self):
        if self.type == 'image' and self.image:
            return f"Image: {self.image.url}"
        return f"{self.type or 'Content'}: {self.content[:30] if self.content else ''}"
