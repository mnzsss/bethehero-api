
<h1 align="center">
    <img src="https://camo.githubusercontent.com/b2c33226efd4f96d2c07485f468de443575d277e/68747470733a2f2f692e696d6775722e636f6d2f74466b553851722e706e67" />
</h1>

<p align="center">
Become the hero for someone or ask for help - REST API made with Node.js
</p>

🆘 About BeTheHero
------------------
This project is a software that allows organizations to ask for help and share their necessities. The software has a [**web version**](https://github.com/mnzsss/bethehero-web) made with ReactJS, where the organizations are able to create new incidents and manage them by deleting. The application also has a [**mobile version (currently in development)**](https://github.com/mnzsss/bethero-mobile) made with React Native, where anyone can access to know about the incidents and contact organizations to become a hero. All this software is served by a [**REST API**](https://github.com/mnzsss/bethehero-backend) made with Node.js

:wrench: Used technologies:
----------------------
This RESTful API works with SQLite and to help me build the queries I used knex. Here is a list of technologies I used to develop this api:

- [**Insomnia**](https://insomnia.rest/)
- [**NodeJS**](https://nodejs.org/en/)
- [**ExpressJS**](https://expressjs.com/)
- [**Nodemon**](https://nodemon.io/)
- [**Sucrase**](https://sucrase.io/)
- [**SQLite**](https://www.sqlite.org/index.html)
- [**Knex**](http://knexjs.org/)

## :information_source: How to use this project

```bash
# Clone this repository
$ git clone https://github.com/mnzsss/bethehero-api

# Go into the repository
$ cd bethehero-api

# Install dependencies
$ yarn

# Run the migrations
$ npx knex migrate:latest

# Run the app
$ yarn dev
```

After that you can use [*Insomnia REST Client*](https://insomnia.rest/) on *port 3333* to use the routes!


:speech_balloon: Reach me
----------

[*In case you want to reach me*](https://www.linkedin.com/in/mnzs/)



Thank you for taking a look at my project! Made with ♥
