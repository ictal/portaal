portaal-php
================

Docker image om het Ictal Studenten Portaal in een apache-php omgeving te runnen.

Running your Apache+PHP docker image
------------------------------------

Build the application:

    docker build -t username/portaal-php .

And test it:

    docker run -d -p 80:80 username/portaal-php

Test your deployment:

    curl http://localhost/

That's it!