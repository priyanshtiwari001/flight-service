Router object --> it is a instance of the router  and register the middleware and return an router object



Commands:
  ```
  sequelize db:migrate                        Run pending migrations -> jo bhi migration folder main h vo apply kr deta h
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file
  sequelize migration:create                  Generates a new migration file
  sequelize model:generate                    Generates a model and its migration
  sequelize model:create                      Generates a model and its migration
  sequelize seed:generate                     Generates a new seed file
  sequelize seed:create                       Generates a new seed file

```

  npx sequelize model:generate --name City --attributes name:string;
  npx sequelize seed:generate --name add-cities
  sequelize db:seed --seed my_seeder_file.js

  npx sequelize model:generate --name Flight --attributes flightNumber:string,airplaneId:string,departureAirportId:string,arrivalAirportId:string,arrivalTime:date,departureTime:date,price:integer,boardingGate:string,totalSeats:integer