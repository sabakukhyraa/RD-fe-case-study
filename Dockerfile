FROM node
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 3000
CMD ["npm", "run", "dev"]



# docker build -t rd-dockerize .
# docker run -d --rm -p 3000:3000 --name my-container rd-dockerize