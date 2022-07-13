FROM node:lts-alpine

ARG GCP_ENV
ENV GCP_ENV $GCP_ENV

WORKDIR /app

COPY package*.json ./

COPY client/package*.json client/
RUN npm run install-client --omit=dev

COPY server/package*.json server/
RUN npm run install-server --omit=dev

COPY client/ client/
RUN npm run build --prefix client

COPY server/ server/

USER node

CMD ["GCP_ENV=$GCP_ENV", "npm", "start", "--prefix", "server" ]

EXPOSE 8000