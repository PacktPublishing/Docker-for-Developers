#!/usr/bin/env bash
set -euo pipefail
sudo yum -q install -y \
    yum-utils \
    device-mapper-persistent-data \
    lvm2 \
    java-1.8.0-openjdk \
    git \
    yum-cron \
    firewalld
sudo yum-config-manager --add-repo \
   https://download.docker.com/linux/centos/docker-ce.repo
sudo rpm --import \
   https://jenkins-ci.org/redhat/jenkins-ci.org.key
sudo yum-config-manager --add-repo \
   https://pkg.jenkins.io/redhat/jenkins.repo
sudo yum -q install -y \
    docker-ce \
    docker-ce-cli \
    containerd.io \
    jenkins
# Thanks https://serverfault.com/questions/871597/unable-to-access-jenkins-centos-7
if ! grep java.net.preferIPv4Stack=true /etc/sysconfig/jenkins > /dev/null; then
    #shellcheck disable=SC2016
    echo 'JENKINS_JAVA_OPTIONS="$JENKINS_JAVA_OPTIONS -Djava.net.preferIPv4Stack=true"' \
        >> /etc/sysconfig/jenkins
fi
sudo usermod -aG docker "$USER"
sudo usermod -aG docker jenkins
newgrp docker
sudo systemctl enable docker
sudo systemctl enable jenkins
sudo systemctl enable yum-cron
sudo systemctl restart docker
sudo systemctl restart jenkins
sudo systemctl restart yum-cron
sudo systemctl restart firewalld
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# Thanks https://serverfault.com/a/713849
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-masquerade
sudo firewall-cmd --permanent --add-forward-port=port=80:proto=tcp:toaddr=127.0.0.1:toport=8080
# See https://bugzilla.redhat.com/show_bug.cgi?id=1445918#c6
sudo firewall-cmd --permanent --direct --add-rule ipv4 nat OUTPUT 0 -p tcp -o lo --dport 80 -j REDIRECT --to-ports 8080
sudo firewall-cmd --reload
sudo grep -A 3 password /var/log/jenkins/jenkins.log



