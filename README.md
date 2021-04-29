# Fullstack App Boilerplate

##### This repo is a boilerplate for a MERN application with all the preparations to make a Heroku deployment

## prerequisites

- Node.js - https://nodejs.org/en/
  -- If you are not sure if you installed it already: open cmd and type node -v
- Download and install the Heroku CLI - https://devcenter.heroku.com/articles/heroku-cli
  -- If you are not sure if you installed it already: open cmd and type Heroko
- Git - https://git-scm.com/

## Installation

Download the zip repo to your local machine.
This repo structure is a server file and a client file separately.

Or with git clone:

```sh
git clone https://github.com/Adiso-1/fullstack-boilerplate.git
```
And then clear the remote:

```sh
git remote rm origin
```

Then, install the dependencies from the client-side & the server-side.

On the main folder type:

```sh
cd client
npm install
```

Return to main folder and type:

```sh
cd ..
cd server
npm install
```

## Run on localhost

On server folder type:

```sh
npm run dev
```

## Deployment to Heroku

create a new app at https://dashboard.heroku.com/apps

On main folder type:

```sh
heroku login
```

If you don't have an ssh key, you will be required to enter an email and password.

Initialize a git repository in a new or existing directory.

```sh
git init
heroku git:remote -a <your app name>
```

Commit your code to the repository and deploy it to Heroku using Git.

```sh
git add .
git commit -am "initial commit"
git push heroku master
```

When the deployment finishes:

```sh
heroku open
```

# Good Luck!
