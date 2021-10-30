FROM dockerfordevelopers/shipitclicker@sha256:39eda93d15866957feaee28f8fc5adb545276a64147445c64992ef69804dbf01 as intermediate

WORKDIR /test 
ARG ssh_prv_key 
RUN echo "$ssh_prv_key" > /tmp/id_rsa_test 
RUN chmod 600 /tmp/* 
RUN apk add openssh 
RUN scp -i /tmp/id_rsa_test user@server:/path/to/file.txt .

FROM dockerfordevelopers/shipitclicker@sha256:39eda93d15866957feaee28f8fc5adb545276a64147445c64992ef69804dbf01
 
WORKDIR /test 
COPY --from=intermediate /test . 
