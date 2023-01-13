FROM php:8.1-fpm-alpine

RUN docker-php-ext-install pdo pdo_mysql

RUN mv $PHP_INI_DIR/php.ini-development $PHP_INI_DIR/php.ini

COPY docker/development/php/conf.d /usr/local/etc/php/conf.d
COPY . /app

ENV COMPOSER_ALLOW_SUPERUSER 1


RUN curl -sS https://getcomposer.org/installer | php \
    && chmod +x composer.phar && mv composer.phar /usr/local/bin/composer

WORKDIR /app