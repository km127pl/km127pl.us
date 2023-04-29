FROM mariadb

COPY docker-entrypoint.sh /usr/local/bin/
COPY import.sql /docker-entrypoint-initdb.d/

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["mysqld"]