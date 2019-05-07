FROM node as builder
RUN mkdir /cv_princelle
WORKDIR /cv_princelle
COPY cv_princelle .

RUN npm install --quiet
RUN npm run build

# Copy built app into nginx container
FROM nginx
COPY --from=builder /cv_princelle/build /usr/share/nginx/html

EXPOSE 80
