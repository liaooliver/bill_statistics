# Base image
FROM node:latest

# Create app directory 建立 docker container 工作目錄
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source 複製原始碼至工作目錄
COPY . /usr/src/app

# 運行時容器提供的服務端口 but Expose is NOT supported by Heroku
EXPOSE 8080

# 設定預設指令
CMD node app.js