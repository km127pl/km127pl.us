FROM mariadb

WORKDIR /usr/src/app

COPY docker-entrypoint.sh /var/app/
COPY import.sql /docker-entrypoint-initdb.d/

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["mysqld"]