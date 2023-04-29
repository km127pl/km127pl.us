FROM mariadb

WORKDIR /var/app

COPY docker-entrypoint.sh /var/app/
COPY import.sql /docker-entrypoint-initdb.d/
RUN chmod +x /var/app/docker-entrypoint.sh

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["mysqld"]