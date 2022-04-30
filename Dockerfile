FROM node:14 AS builder

# Create app directory
WORKDIR /src

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN yarn install

COPY . .

RUN npm run build

FROM node:14

COPY --from=builder /src/node_modules ./node_modules
COPY --from=builder /src/package*.json ./
COPY --from=builder /src/dist ./dist


EXPOSE 4000
CMD [ "yarn", "run", "start:prod" ]
