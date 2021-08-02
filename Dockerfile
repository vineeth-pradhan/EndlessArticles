FROM node:10.15.3

WORKDIR /source

ENV PORT 80

COPY package.json /source/package.json

RUN npm i

COPY . /source

CMD ["npm", "start"]
