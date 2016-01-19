FROM tutum/apache-php

RUN apt-get update && \
    apt-get -yq install php5-ldap && \
    rm -rf /var/lib/apt/lists/*

# Overwrite sample app with our own.
RUN rm -fr /app
ADD ./app /app