FROM node:lts-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json

RUN npm install

# add app
COPY . /app

#build lib
RUN npm run build

############
### prod ###
############

# base image
FROM nginx:alpine

# remove default webiste
RUN rm -rf /usr/share/nginx/html/*

# copy artifact build from the 'build environment'
COPY --from=build /app/dist/ /usr/share/nginx/html

# copy config
COPY nginx/default.conf /etc/nginx/conf.d/

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
