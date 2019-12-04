FROM php
ENV TZ=America/Los_Angeles
RUN useradd --user-group --create-home --shell /bin/false app ; exit 0
ENV HOME=/home/app
WORKDIR /home/app
COPY . /home/app
RUN cd $HOME
