FROM mariadb

COPY docker-entrypoint.sh /usr/local/bin/
COPY import.sql /docker-entrypoint-initdb.d/

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["mysqld"]