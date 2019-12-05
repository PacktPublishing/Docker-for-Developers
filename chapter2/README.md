# CHAPTER 2 - Using Docker containers and VirtualBox for development

The source code in this directory is a stand-alone and working example for using Docker containers for development.

The build.sh script will build the container.

The run.sh script will run the container, with no volumes.

The debug.sh script will run the container in foreground mode, with this directory as a volume
mounted on /home/app on the guest.  This allows editing of the php script in the public_html diretory and reloading
the page in your browser without having to restart the container.  You can add more php files, if you want to extend the
program - again, you don't have to restart the container.

See Dockerfile for what is built.

In case you want to run and attach to the container, you can use the shell.sh script.


