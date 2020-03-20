This project contains some samples of [Optimizely](https://www.optimizely.com/) implementation in Typescript

Optimizely provides a JavaScript a SDK and the documentation could be found [here](https://docs.developers.optimizely.com/rollouts/docs/javascript-node).

This project depends on:

### Dependencies ###

* [@optimizely/optimizely-sdk](https://github.com/optimizely/javascript-sdk/tree/master/packages/optimizely-sdk) npm package 

### How do I get set up? ###

To run this project locally, first of all you need to clone this repository, the project had the following requirements: 

#### Requirements ####

* npm
* webpack and webpack-dev
* docker
* docker compose
* ts-node

The second step its to run the folowing command to install optimizely dependency:

```
npm install --save @optimizely/optimizely-sdk
```

After that, run the following command to generate an updated bundle: 

```
webpack
```

now you can run the following command to up your container: 

```
docker-compose up -d
```

The applicaiton will be accessible by the following url: http://optimizely.localtest.me/