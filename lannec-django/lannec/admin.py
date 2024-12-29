from django.contrib import admin
from .models import Gara, Metadata, CustomMetadata, Content


class MetadataInline(admin.TabularInline):
    model = Metadata
    extra = 1  # Number of empty rows to display


class CustomMetadataInline(admin.TabularInline):
    model = CustomMetadata
    extra = 1  # Number of empty rows to display


class ContentInline(admin.TabularInline):
    model = Content
    extra = 1  # Number of empty rows to display


class GaraAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["title", "subtitle", "preview"]}),
    ]
    inlines = [
        MetadataInline,
        CustomMetadataInline,
        ContentInline,
    ]
    list_display = ["title", "subtitle", "preview"]


admin.site.register(Gara, GaraAdmin)
