from django.contrib import admin
from .models import Gara, Metadata, CustomMetadata, Content
from django import forms


class MetadataInline(admin.TabularInline):
    model = Metadata
    extra = 1  # Number of empty rows to display


class CustomMetadataInline(admin.TabularInline):
    model = CustomMetadata
    extra = 1  # Number of empty rows to display


class ContentForm(forms.ModelForm):
    class Meta:
        model = Content
        fields = ['type', 'content', 'image']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if self.instance and self.instance.type == 'image':
            self.fields['content'].widget = forms.HiddenInput()
        else:
            self.fields['image'].widget = forms.HiddenInput()


class ContentInline(admin.TabularInline):
    model = Content
    form = ContentForm
    extra = 1  # Number of empty rows to display


class GaraAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["title", "subtitle", "preview"]}),
    ]
    inlines = [
        ContentInline,
    ]
    list_display = ["title", "subtitle", "preview"]


admin.site.register(Gara, GaraAdmin)