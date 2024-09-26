# Usa la imagen oficial de Nginx
FROM nginx:alpine

# Copia los archivos generados por Angular en la carpeta de Nginx
COPY ./dist/mycv /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80
