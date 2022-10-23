# eShop Services Configuration

This repository holds the Configuration Micro Services

```bash
docker build --rm --pull -f "D:\LordKrishna\GitHub\eshop-microservices\eshop-services-configuration/Dockerfile" --label "com.microsoft.created-by=visual-studio-code" -t "eshop-services-configuration:latest" "D:\LordKrishna\GitHub\eshop-microservices\eshop-services-configuration"

docker run -p 8080:80 -it -d --env-file=dev.env eshop-services-configuration:latest
```

## wishlist

- swagger
- add to postman collection
