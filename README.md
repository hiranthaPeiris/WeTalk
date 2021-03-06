# WeTalk
[![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.org/package/npm)
[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Vivoxa](https://img.shields.io/badge/CreatedBy-VivoxaLabs-brightgreen.svg)](https://github.com/VivoxaLabs)
[![GitHub](https://img.shields.io/github/forks/hiranthaPeiris/WeTalk.svg?style=flat-square)](https://github.com/hiranthaPeirs/WeTalk/network)
[![GitHub followers](https://img.shields.io/github/followers/espadrine.svg?label=Follow&style=social)](https://github.com/hiranthaPeiris)

We talk is a simple chat web application which runs on locally developed using nodeJs. This web app developed only for testing purposes and this not a complete version of the application. application will preform simple message sending and displaying on deferent localhost connections. also this includes mongoDB chat logger connected with mongoDB Atlas cluster. cluster for this is in open ip for commmon use so i recommand to have your own cluster in mongoDB Atlas. 
## Getting Started
Clone the repo as a git clone or any other refered method.
```bash
git clone https://github.com/hiranthaPeiris/WeTalk.git
cd WeTalk
```
### Prerequisites
The following things will be needed to make any developments 
* Node 8
* Git installed on pc

**Optional** 
* MongoDB Atlas free tire cluster 
### Install
Install the package dependancies 
```bash
npm install
```
### Running the tests
First we have to start the server in order to see the functionality
```bash 
npm start
```
> warning-->> app takes few seconds to connect and load the data from atlas cloud server. connect to the web socket after the console log message

If you have a cluster in mongoDB then get the connection string and past it in the db settings (configs->db.js) if not follow the documentation on creating DB in mongo or also can use db in locally [Create an Atlas Free Tier Cluster](https://docs.mongodb.com/manual/tutorial/atlas-free-tier-setup/).

This will start the server and open the browser,
Go to:  [http://localhost:3000](http://localhost:3000) and take a look

## Build With
* NodeJs
* Express
* Socket.io
* mongoDB 
* Joi for validations

This package is a nodejs express complete application skeleton with EJS as view engine. you need to have a little knowledge of ejs which is a html preproccessor similar as sass for css. [Socket.io](https://socket.io/) is used as the web socket to make connections. 
Joi npm package is used for message validation purposes. i have used mongoDB to keep pervious chat logs. since this is a public chat room, anyone connecting to the cluster will get the same chat log. and also any endpoint can erase the log completely. 

## Contributing
Feel to make any changes and developments. checkout [contribution.md](https://github.com/hiranthaPeiris/WeTalk/blob/master/CONTRIBUTING.md) for guidelines. 

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/hiranthaPeiris/WeTalk/blob/master/LICENSE) file for details....

