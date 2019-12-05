FROM debian
ENV TZ=America/Los_Angeles
RUN apt-get update && apt search php | grep 7 && apt-get install -y procps telnet apache2 php7.3
RUN useradd --user-group --create-home --shell /bin/false app
ENV HOME=/usr/app
WORKDIR /home/app
COPY . /home/app
COPY php.conf /etc/apache2/mods-available/php7.3.conf
RUN a2enmod userdir && a2enmod php7.3
CMD  ["./entrypoint.sh"]
