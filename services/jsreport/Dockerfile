FROM jsreport/jsreport:4.3.1

RUN npm i handlebars-intl --save

COPY --chown=jsreport:jsreport ./services/jsreport/jsreport.config.json /app
COPY --chown=jsreport:jsreport ./services/jsreport/data /app/data

USER root
RUN apk add 'libhwy<=1.0.7-r0' 
# RUN apk update
# RUN apk upgrade

USER jsreport:jsreport