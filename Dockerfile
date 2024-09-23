FROM cypress/included

WORKDIR /app

COPY . .

COPY cypress.config.js ./  

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "cy:run" ]

