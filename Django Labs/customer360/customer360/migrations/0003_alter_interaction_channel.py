# Generated by Django 5.0.4 on 2024-05-02 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer360', '0002_customer_social_media'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interaction',
            name='channel',
            field=models.CharField(choices=[('phone', 'Phone'), ('sms', 'SMS'), ('email', 'Email'), ('letter', 'Letter'), ('social_media', 'Social Media')], max_length=15),
        ),
    ]