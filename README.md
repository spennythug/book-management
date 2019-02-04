# Project Setup

## Server Setup

Make sure you have `Ruby` and `Postgresql` up and running on your machine. This was developed with `ruby 2.6.1p33` and `Rails 5.2.2` but I'm sure it would run on other versions.

Navigate to the server folder `cd server` and run `bundle install` to install gems.

Run `rake db:create` to create the databases.
Run `rake db:migrate` to run migrations.
Run `rake db:seed` to seed database with test data.

Start the server with `rails s`.

## Client Setup

The client was generated using `create-react-app` (https://www.npmjs.com/package/create-react-app)

Create config file (`client/src/config/config.js`) from example file (`client/src/config/example.config.js`). Set the BASE_URL to your server URL.

To start client navigate to the client folder `cd client` and `npm install` and `npm start`.

More info can be found in the client README `client/README.md`
