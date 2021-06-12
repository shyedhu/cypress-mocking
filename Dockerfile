# Node version 14.16.0  & Google Chrome 90 & Mozilla Firefox 88
FROM cypress/browsers:node14.16.0-chrome90-ff88
RUN mkdir /app
WORKDIR /app
COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./package.json ./package.json
RUN npm install
# Run the e2e tests on chrome browser
RUN npx cypress run --headless --browser chrome -e ENV=http://shyedhu-shop-react-app.s3-website-us-west-2.amazonaws.com/login 
# Run the e2e tests on firefox browser
RUN npx cypress run --headless --browser firefox -e ENV=http://shyedhu-shop-react-app.s3-website-us-west-2.amazonaws.com/login 
