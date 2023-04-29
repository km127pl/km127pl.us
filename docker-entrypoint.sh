#!/bin/bash
set -eo pipefail

if [ "$MYSQL_DATABASE" ]; then
  mysql -h"$MYSQL_HOST" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE" < /docker-entrypoint-initdb.d/init.sql
fi

exec "$@"
