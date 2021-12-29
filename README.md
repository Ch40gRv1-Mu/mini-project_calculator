mini-project_calculator



## General Framework

This mini project is an online calculator supporting basic arithmetic operation, with calculation happens on remote backend(implemented in C++). The project gets a usable software engineer framework with C++ as the implementation language for back-end development for both web development(Reactive) and mobile app development(Reactive Native).

The following diagram shows the structure of the app:

-app_frontend_react_native

&ensp		|-App.js

​		|-Components

​				|--CalculatorApi.js

​				|---Row.js

​				|---CalculatorPanel.js

​						|----CalculatorButton.js



​		|-assets

​		|-node_modules

​		|-package.json

-backend_oatpp-async

​		|-src

​				|--App.cpp

​				|--AppComponent.hpp

​				|--controller

​						|---MyController.cpp

​						|---MyController.hpp

​				|--service

​						|---Calculator.hpp

​		|-build

​		|-utility

​		|-test

## Front-end Framework

The small project involves a mobile calculator developed with React Native(expo) and a web calculator developed with React.js. Both web and mobile interface communicate with the same Backend API for the calculation.

The way to run the mobile API is as follows:

```sh

yes|rm -r app_frontend_react_native/build 
mkdir app_frontend_react_native/build 
cd app_frontend_react_native/build
npm install
npm start

```



Reference:

​	- https://reactnative.dev/

## Back-end Framework

The back-end frame work is based on oat++ Async API, which is a light, high efficient Back-end frame work.

I deploy the back-end on my own server, which can be easily tested with the following url:

1.  http://1.116.120.225:8000/calculator/1/3/add
2. http://1.116.120.225:8000/calculator/4.2/3.22222/subtract
3. http://1.116.120.225:8000/calculator/4/3/multiply
4. http://1.116.120.225:8000/calculator/4/3/divide



​	-
