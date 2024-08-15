FROM quay.io/taira_makino/taira_tech:latest
RUN git clone https://github.com/anonphoenix007/MAKINO-MD-V2
WORKDIR /root/MAKINO-MD-V2/
RUN npm install npm@latest
RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]
