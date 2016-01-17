FROM tutum/apache-php

# Overwrite sample app with our own.
RUN rm -fr /app
ADD ./app /app