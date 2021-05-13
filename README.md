make sure you have npm version above 10.

Do "npm install" to get all required packages.

Make sure you have "Heroku Postgres" Database credentials handy. If not please create account in and configure in "www.heroku.com"

1. create account in Heroku
2. Create new App in it.
3. Click on App and click on configure add-ons and type "Heroku postgres" and add free version.
4. Now click on Heroku Postgres and click on settings for Database credentials.
5. You can see Database details under Database Credentials.

Once Done with Heroku Download PgAdmin latest version from "https://www.pgadmin.org/" website

Download Docker and make sure it is running.

Make sure above steps are done before going further

Now install prisma globally " npm install -g prisma"

If you want create prisma folder from scratch then follow below steps:

1. prisma init prisma ( it will create prisma folder with datamodal.graphql, docker-compose.yml and, prisma.yml files). When you run this command it will ask for several questions about Database so make sure you have all the details ready.
2. Add Schema to datamodal.graphql to create exact tables and relations between them.
3. Now run docker-compose up-u, it will package and run the Prisma database over little VM Machine using docker.
4. Do "prisma deploy" to deploy the code into Database to create tables and check in pgAdmin for tables.

Now you can got "http://localhost:4466" port which mentioned in prisma.yml file and check queries and API documentation for how to access queries, mutations and subscriptions.

Otherwise, update docker-compose.yml file with your database details.
Run "docker-compose up-u" command.
Run "prisma deploy -e ../config/dev.env" command as it is going to pickup config details from dev.env file

Now run "npm run dev" command to run the application and it will available on http://localhost:4000

Incase, if you do any changes to datamodal.graphql under prisma folder make sure that you deploy those changes into database.
To get updated Prisma queries, mutations and subscriptions into nodejs server you must and should run " npm run get-schema" it will generate file and src/generated/prisma.graphql
