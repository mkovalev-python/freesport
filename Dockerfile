# The first stage
# Build React static files
FROM node:13.12.0-alpine as build

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build
RUN npx browserslist@latest --update-db

# The second stage
# Copy React static files and start nginx
FROM nginx:stable-alpine
COPY ./nginx.conf /etc/nginx/
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
