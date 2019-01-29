# [Shopalot]

An open-source shopping cart application.

## Quick Links

* [Staging Server Link](https://codeteers-shopalot-staging.herokuapp.com/)
* [Full Project Spec](https://github.com/TracySpitler/Shopalot/blob/dev/README.md)

## Installing

Clone the repo:

```
$ git clone https://github.com/TracySpitler/Shopalot.git
```

### Prerequisites

__Packages and services needed to run this repo's codebase and commands to install them.__

_Install from link:_

* [Node](https://nodejs.org/en/) (v10.12.0)
* [NPM](https://www.npmjs.com/get-npm) (6.4.1)
* [Git](https://git-scm.com/) (2.13.1)

_Check installation versions:_

```
$ node -v
```
```
$ npm -v
```
```
$ git --version
```

_Install from terminal or command line:_

* [Nodemon](https://nodemon.io/) (1.18.4)

```
$ npm install -g nodemon
```

_Database (For Mac: you must have Homebrew installed first. For Windows: download MongoDB from the link.)_
* [Mac Install Tutorial](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)
* [Homebrew](https://brew.sh/) (1.8.0)
* __[MongoDB](https://www.mongodb.com/)__

### Development Environment

After cloning the repo, cd into project folder

```
$ cd shopalot
```

Install npm (this will also install dependencies)

```
$ npm install
```

Set up the environment variables

_.env_

```
MONGO_HOST=localhost
MONGO_DATABASE=setlist
```

Get the code up and running

**_With Nodemon (server only):_**

```
$ nodemon bin/www
```

_Terminal output:_

```
your@computer:~$ nodemon bin/www
[nodemon] 1.18.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node bin/www`
Server running on: 5000
DATABASE CONNECTED SUCCESSFULLY
```

**_Run Congruently (client & server):_**

```
$ npm run dev
```

_Terminal output:_

```
your@computer:~$ npm run dev

> shopalot@1.0.0 dev /your/directory/Shopalot
> concurrently "npm run server" "npm run client"

> shopalot@1.0.0 server /your/directory/Shopalot
> nodemon bin/www

> shopalot@1.0.0 client /your/directory/Shopalot
> npm start --prefix client

> client@0.1.0 start /your/directory/Shopalot
> react-scripts start

[nodemon] 1.18.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node bin/www`
Server running on: 5000
DATABASE CONNECTED SUCCESSFULLY
Starting the development server...

Compiled successfully!

You can now view client in the browser.

Local:            http://localhost:3000/
On Your Network:  http://192.168.1.4:3000/
```

__The site is now available for view in your browser at localhost:3000__
__The server is connected to localhost:5000__

_End points:_
* /api/items

## Live Deployment with Heroku

Set up a MongoDB database or use a service like [mLab](https://mlab.com/)

Log in or sign up with [Heroku](https://www.heroku.com/)

Create an app for the both the staging (release) and master branches. (_You can create a [pipeline](https://devcenter.heroku.com/articles/pipelines) for auto deployment_)

Under the ```Settings``` tab, set the necessary config vars:
```
MONGO_HOST
MONGO_DATABASE
SECRET
```

*__Using mLab:__*

The Mongo URI will look like this: mongodb://<dbuser>:<dbpassword>@ds151814.mlab.com:51814/shopalot

_Examples:_

* ```MONGO_HOST``` would equal ```<dbuser>:<dbpassword>@ds151814.mlab.com:51814```
* ``` MONGO_DATABASE``` would equal ```shopalot```
* ```SECRET``` needs to be a secure and randomized string.

Under the ```Deploy``` tab, connect to GitHub and set and up the respective branch deployment.

For the initial deployment, you can push a change to your staging (release) or master branch, or manually deploy a branch on Heroku.

__Your app should now be up and running on Heroku__

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).
