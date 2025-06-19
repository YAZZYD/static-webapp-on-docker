FROM httpd:2.4
COPY . /usr/local/apache2/htdocs/
EXPOSE 80
CMD ["httpd-foreground"]
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost/ || exit 1
  