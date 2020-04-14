FROM <image> as intermediate 

WORKDIR /test 
ARG ssh_prv_key 
RUN echo "$ssh_prv_key" > /tmp/id_rsa_test 
RUN chmod 600 /tmp/* 
RUN apk add openssh 
RUN scp -i /tmp/id_rsa_test user@server:/path/to/file.txt . 

FROM <image>
 
WORKDIR /test 
COPY --from=intermediate /test . 
