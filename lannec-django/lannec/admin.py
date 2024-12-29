from django.contrib import admin
from .models import Gara, Metadata, CustomMetadata


class MetadataInline(admin.TabularInline):
    model = Metadata
    extra = 1  # Number of empty rows to display


class CustomMetadataInline(admin.TabularInline):
    model = CustomMetadata
    extra = 1  # Number of empty rows to display


class GaraAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["title", "subtitle", "preview"]}),
    ]
    inlines = [
        MetadataInline,
        CustomMetadataInline,
    ]
    list_display = ["title", "subtitle", "preview"]


admin.site.register(Gara, GaraAdmin)


#     def get_custom_metadata(self, obj):
#         return ", ".join(f"{meta.key}: {meta.value}" for meta in obj.custom_metadata.all())
#     get_custom_metadata.short_description = 'Custom Metadata'

#     def get_metadata_entries(self, obj):
#         return ", ".join(
#             f"{meta.localita}, {meta.anno}" for meta in obj.metadata_entries.all()
#         )
#     get_metadata_entries.short_description = 'Metadata Entries'



# class CustomMetadataInline(admin.TabularInline):
#     model = CustomMetadata
#     extra = 1  # Number of empty rows to display


# class MetadataInline(admin.TabularInline):
#     model = Metadata
#     extra = 1  # Number of empty rows to display

