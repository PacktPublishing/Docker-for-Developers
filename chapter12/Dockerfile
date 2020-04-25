FROM alpine 

RUN groupadd -r secureusers && useradd -r -g secureusers secureuser 

#Execute any root commands prior to needing to switch users 

USER secureuser
