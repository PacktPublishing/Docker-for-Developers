# Docker for Developers

<a href="https://www.packtpub.com/product/docker-for-developers/9781789536058?utm_source=github&utm_medium=repository&utm_campaign=9781789536058"><img src="https://static.packt-cdn.com/products/9781789536058/cover/smaller" alt="Docker for Developers" height="256px" align="right"></a>

This is the code repository for [Docker for Developers](https://www.packtpub.com/product/docker-for-developers/9781789536058?utm_source=github&utm_medium=repository&utm_campaign=9781789536058), published by [Packt](https://www.packtpub.com/).

[![MIT Licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

**Develop and run your application with Docker containers using DevOps tools for continuous delivery**

## What is this book about?
Docker is the de facto standard for containerizing apps, and with an increasing number of software projects migrating to containers, it is crucial for engineers and DevOps teams to understand how to build, deploy, and secure Docker environments effectively. Docker for Developers will help you understand Docker containers from scratch while taking you through best practices and showing you how to address security concerns.

This book covers the following exciting features:
* Get up to speed with creating containers and understand how they work
* Package and deploy your containers to a variety of platforms
* Work with containers in the cloud and on the Kubernetes platform
* Deploy and then monitor the health and logs of running containers
* Explore best practices for working with containers from a security perspective

If you feel this book is for you, [get your copy](https://www.amazon.com/dp/1789536057) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" alt="https://www.packtpub.com/" border="5" /></a>

## Abstract

Docker is the de-facto standard for containerizing applications. It allows developers to run the same software on their workstations in the same way it will run on a cluster of servers in production, while simplifying many configuration and deployment issues. 

With an increasing number of software projects migrating to containers, to reduce cost, complexity and improve portability it is crucial for engineering and DevOps teams to understand how to build and deploy secure Docker environments.

If you are new to container-based development, this book walks you through three keys areas, how to build containers and develop software using the containers, how to deploy them in Cloud environments, and how to ensure they are secure. 

This book provides a synthesis of three important areas of Docker based development (creation, deployment and securing containers) through a hands-on approach. The book can be read cover to cover or dived into by section, for those looking for help with a specific topic. 

You’ll learn how containers works and how to create and development projects within them. Following this you will learn how to deploy them to the cloud using DevOps techniques and ensure that security is taken into consideration from start to finish. 

By the end of this book you will understand how containers work, how to develop within them, how to deploy Docker containers to a variety of environments, including both a local learning environment and a Cloud Native Kubernetes cluster using the AWS Elastic Kubernetes Service (EKS), and you will learn security best practices along the way.

Regardless of whether you are a DevOps engineer, a Software Engineering lead, or a software developer looking for ways to create a sane environment, learning how to build and deploy applications in Docker will make you a stronger practitioner!

# Getting Started

Please [purchase the book](https://www.amazon.com/dp/1789536057) and follow the exercises in each chapter to follow along. The code within is organized by chapter.

## Instructions and Navigations
All of the code is organized into folders. For example, `chapter2`.

The code will look like the following:
```
if (test expression)
{
  Statement upon condition is true
}
```

## What you need for this book
If you’re a software engineer new to containerization or a DevOps engineer responsible for deploying Docker containers in the cloud and building DevOps pipelines for container-based projects, you’ll find this book useful. This Docker containers book is also a handy reference guide for anyone working with a Docker-based DevOps ecosystem or interested in understanding the security implications and best practices for working in container-driven environments.

With the following software and hardware list you can run all code files present in the book (Chapter 1-16).

## Software and Hardware List

| Chapter  | Software required                                                     | OS Requirements and hosting environment                      |
| -------- | ----------------------------------------------------------------------| -------------------------------------------------------------|
| 1-16     | Docker                                                                | Windows, Mac OS X, and Linux (Any)                           |
| 1-16     | Jenkins                                                               | Windows, Mac OS X, and Linux (Any)                           |
| 1-16     | Kubernetes                                                            | Docker Desktop or MiniKube (Windows, macOS X, and Linux)     |
| 1-16     | Elastic Container Registry (ECR) and Elastic Kubernetes Service (EKS) | AWS account                                                  |
| 1-16     | Spinnaker                                                             | AWS or another cloud with working Kubernetes cluster         |
| 1-16     | Prometheus                                                            | AWS or another cloud with working Kubernetes cluster         |
| 1-16     | Grafana                                                               | AWS or another cloud with working Kubernetes cluster         |
| 1-16     | Jaeger                                                                | AWS or another cloud with working Kubernetes cluster         |
| 1-16     | Envoy                                                                 | AWS or another cloud with working Kubernetes cluster         |
| 1-16     | GitHub                                                                | GitHub account (public cloud)                                |
| 1-16     | Docker Hub                                                            | Docker account (public cloud)                                |
| 1-16     | Anchore                                                               | Docker                                                       |
| 1-16     | Datadog                                                               | Docker, AWS or another cloud with working Kubernetes cluster |
  
We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](http://www.packtpub.com/sites/default/files/downloads/9781789536058_ColorImages.pdf).

## Errata
Please see [ERRATA.md](ERRATA.md) for a list of significant changes to the code in this repository since the book was published.

# Code in Action
Click on the following link to see the Code in Action:

[YouTube](https://www.youtube.com/playlist?list=PLeLcvrwLe1850ESdRUYRXZkSfhNY8MoI-)

# Related products - _Other books you may enjoy_
* Continuous Delivery with Docker and Jenkins [[Packt]](https://www.packtpub.com/product/continuous-delivery-with-docker-and-jenkins-second-edition/9781838552183?utm_source=github&utm_medium=repository&utm_campaign=9781838552183) [[Amazon]](https://www.amazon.com/dp/1838552189)

* Mastering Docker Enterprise [[Packt]](https://www.packtpub.com/product/mastering-docker-enterprise/9781789612073?utm_source=github&utm_medium=repository&utm_campaign=9781789612073) [[Amazon]](https://www.amazon.com/dp/1789612071)

# Get to Know the Authors
[**Richard Bullington-McGuire**](https://github.com/obscurerichard/) is a software architect and DevOps practitioner with more than 28 years of professional experience in information technology. He has operated internet services continuously since 1995 when he established The Obscure Organization. He has used Docker to build, deploy, and run applications in production, including operating the Freezing Saddles winter cycling event since 2018. Richard is a member of the IEEE and the ACM. He holds 6 AWS certifications, including all of the Foundational, Associate, and Professional level certifications. He works at Modus Create, Inc. as director of engineering. You can find him on Twitter and GitHub at @obscurerichard. Richard lives in Arlington, VA, with his wife and four children.

[**Andrew K. Dennis**](https://github.com/rpigu-i) is a full stack and cybersecurity architect with over 17 years' experience who currently works for Modus Create in Reston, VA. He holds two undergraduate degrees in software engineering and creative computing and a master's degree in information security. Andy has worked in the US, Canada, and the UK in software engineering, e-learning, data science, and cybersecurity across his career, and has written four books on IoT, the Raspberry Pi, and supercomputing. His interests range from the application of pataphysics in computing to security threat modeling. Andy lives in New England and is an organizer of Security BSides CT.

[**Michael Schwartz**](https://github.com//mschwartz/) is a full stack software engineer, architect, and embedded engineer for Modus Create, with over 45 years' experience as a professional. He founded one of the first public ISPs in the SF Bay Area, Best Internet Communications, and an early internet advertising agency, MediaPlex. He was one of the early developers of video games, including the upright coin-operated machines and consoles. His most recent project is RoboDomo, a home automation system built around Node.js, Docker containers, MQTT, and React.js. Originally from Chicago, IL, Mike resides in the Palm Springs area of California.

# Suggestions and Feedback
[Click here](https://docs.google.com/forms/d/e/1FAIpQLSdy7dATC6QmEL81FIUuymZ0Wy9vH1jHkvpY57OiMeKGqib_Ow/viewform) if you have any feedback or suggestions.

# Licensing
Copyright 2020 Packt Publishing Limited

This project is [MIT licensed](LICENSE).

See the [Chapter 10 README.md](chapter10/README.md) and the [Chapter 11 README.md](chapter11/README.md) for an additional copyright statement and license variation, as a few files from those chapters are [Apache 2.0 licensed](https://www.apache.org/licenses/LICENSE-2.0).
