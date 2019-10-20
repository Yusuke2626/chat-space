# json.content @message.content
# json.created_at @message.created_at.strftime("%Y/%m/%d %H:%M")
# json.user_name @message.user.name
# json.image_url @message.image.url

json.(@message,:content, :image)
json.created_at @message.created_at.strftime("%Y%m%d")
json.user_name @message.user.name
json.id @message.id
