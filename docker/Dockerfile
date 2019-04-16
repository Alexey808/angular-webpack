FROM node:10
RUN npm install -g @angular/cli
RUN mkdir -p /home/npm && chmod 777 /home/npm
RUN npm install
ENV HOME /home/npm
WORKDIR /src
RUN npm rebuild node-sass
EXPOSE 8081
