FROM node as builder
RUN mkdir /usr/share/app/docker/cv_princelle
WORKDIR /usr/share/app/docker/cv_princelle
COPY cv_princelle .

RUN npm install --quiet
RUN npm run build

# Copy built app into nginx container
FROM nginx
COPY --from=builder /usr/share/app/docker/cv_princelle/build /usr/share/nginx/html

EXPOSE 80
