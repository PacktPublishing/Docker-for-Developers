FROM alpine 

RUN addgroup -S secureusers && adduser -S secureuser -G secureusers

#Execute any root commands prior to needing to switch users 

USER secureuser
