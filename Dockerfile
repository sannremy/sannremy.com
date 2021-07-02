# Trying to match OVH configuration as close as possible
FROM php:8.0-apache

# Enable SSL (self-signed, snakeoil) and Rewrite
RUN apt-get update && apt-get install -y ssl-cert
RUN a2enmod ssl
RUN a2ensite default-ssl
RUN a2enmod rewrite

# Add static files
COPY out/ /var/www/html/

# Open 443
EXPOSE 443

# Allow self-signed certificate on localhost for Chrome
# chrome://flags/#allow-insecure-localhost
