FROM node as builder
RUN mkdir /app/cv_princelle
WORKDIR /app/cv_princelle
COPY cv_princelle .

RUN npm install --quiet
RUN npm run build

# Copy built app into nginx container
FROM nginx
COPY --from=builder /app/cv_princelle/build /usr/share/nginx/html

EXPOSE 80
