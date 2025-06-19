#getting apache image
FROM httpd:2.4

# setting domain name to lcocalhost to avoid warnings

RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf


#Enabling mod_rewrite for Apache
#We cannot use a2enmod since the image is centos based and not debian based
RUN sed -i 's/#LoadModule rewrite_module/LoadModule rewrite_module/' /usr/local/apache2/conf/httpd.conf

#Enabling Enable .htaccess processing in Apache
RUN sed -i 's/AllowOverride None/AllowOverride All/g' /usr/local/apache2/conf/httpd.conf


# Copying the local files to the container's web directory
#files included in .dockerignore will be ignored
#is this case we are explicitly specifying the files to copy

COPY public /usr/local/apache2/htdocs/public

COPY index.html /usr/local/apache2/htdocs/index.html

COPY .htaccess /usr/local/apache2/htdocs/.htaccess 

# exposing port 80 for the web server
EXPOSE 80

# healthchecking using curl, if curl fails due to 500 or 404 response (app not served properly), the container will be marked as unhealthy
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost/ || exit 1
  