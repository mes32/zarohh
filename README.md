# Zarohh
Ranked order voting system

You can try out this app [here](http://zarohh.herokuapp.com) or build it locally using the instructions below.

## Technology Stack
- `User Interface` - Vue
- `Client` - Vue
- `Server` - Node, express, passport
- `Database` - MongoDB

## Development Requirements
- Git
- Node & NPM
- MongoDB
- Heroku CLI

## Setup
```bash
# 1. Install project dependencies
npm install
```

## Running locally
```bash
# 1. Start the server in develpment mode (Runs on localhost:5000)
npm run server

# 2. Start the client (Runs on localhost:8080)
npm run client
```

**Server:** [localhost:5000](http://localhost:5000)

**Client:** [localhost:8080](http://localhost:8080)

## Deploying to Heroku

```bash
# 1. Initialize as a Heroku application
heroku create

# 2. Add on Heroku support for mLab/MongoDB
heroku addons:create mongolab

# 3. Create mLab database and set the Heroku environment variable MONGOLAB_URI to point to identify this database
# mongodb+srv://<username>:<password>@<cluster_url>/<database_name>?retryWrites=true&w=majority

# 4. Set SERVER_SESSION_SECRET to equal a random string
```

## Features

### Completed Features


### Planned Features


## References
- [https://en.wikipedia.org/wiki/Ranked_voting](https://en.wikipedia.org/wiki/Ranked_voting)
- [https://devcenter.heroku.com/articles/nodejs-mongoose](https://devcenter.heroku.com/articles/nodejs-mongoose)

## Author
Mike Stockman