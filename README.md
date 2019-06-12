# Project Overview

StockSearcher is a project built with React and Rails via Webpack. The system uses the embedded SQLite, and import from stored CSVs to seed the database. For search, StockSearcher utilizes SQLite's `fts5` functionality, which is initialized using the `rails initialize_table:search` rake task, and used in the `StocksController#search` function. To render the candlestick charts, StockSearcher uses CanvasJS, backed by data from IEXCloud's API.

## Dependencies
- rails v5.2.3
- ruby v2.6.1
- yarn v1.16.0
 -- Install yarn via `https://yarnpkg.com/lang/en/docs/install/`
- bundler >v2.0
- node v8.16.0

## Getting it running
1. `cd` to `stock-searcher` and run a `bundle install`
2. Run a `yarn install`
3. Rake that db! `rails db:create db:migrate import_stocks:import_all` will seed the database via the .csv's in the `db/data` folder.
4. Run the `rails initialize_table:search` command to generate the virtual table used for search.
5. Open a terminal, `cd` to `stock-searcher`, and run `rails s --binding 0.0.0.0` to run the server.

## Seeing it in action
Once the server is running, you can go to `localhost:3000` to view the page. Try typing `aapl` in the search bar to get started!

## Running the app
StockSearcher 2019 v1.0 is designed to be a Single Page Application powered by React, communicating with a Rails JSON api, and the search header that populates it. `App.js` contains the logic for api calls to `api/stocks#search`, which are then passed through the component tree to the body's table (`SearchTable.js`). 

The rows of the table are rendered via the `Stock.js` component, and once expanded, an api call is made to `api/stocks#query_prices` for a particular stock. This call then queries the IEXCloud API, and returns a (truncated) set of data to generate a chart with.

In the header, along with the search functionality, there is also a set of filters to scope and search via a specific exchange. These are handled via the `Filter.js` and `FilterOption.js` components. 

## Known Issues
- Not all the seeded ticker symbols correspond to a valid endpoint for IEXCloud - specifically those with `^` and `.` characters. In the future, the offending characters could be parsed out in the rake task, or removed before calling the api, but because some do pull data, I decided to leave them be.

