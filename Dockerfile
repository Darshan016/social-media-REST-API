FROM node:14

WORKDIR /usr/src/app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["nodemon" ,"index.js" ]