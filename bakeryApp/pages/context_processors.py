from .models import Notification

def notification_processor(request):
    if request.user.is_authenticated:
        notifications = Notification.objects.filter(is_read=False).order_by('-created_at')[:6]
        return {'notifications': notifications}
    return {}
