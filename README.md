# De Voorhoede app
An assignment from De Voorhoede. When I visited the [original website](https://www.voorhoede.nl) I was curious what kind of tech they worked with. In order for me to find out, I had to go through every case to read if they used tech that I'm also interested in. In my app I adressed this use case by extracting the tech from the body of the cases.

This way the user can see what tech is being used beforehand, filter on specific tags and read more about the cases that involve the tech they are interested in. When they visit a case there will be call-to-action where they can immediately apply for a job.

## Tools and packages
-  [x] [create-react-app](https://github.com/facebook/create-react-app)
-  [x] [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
-  [x] [react-apollo](https://github.com/apollographql/react-apollo)
-  [x] [apollo-boost](https://github.com/apollographql/apollo-client/tree/master/packages/apollo-boost)
-  [x] [node-sass](https://github.com/sass/node-sass)
-  [x] [prettier](https://github.com/prettier/prettier)
-  [x] [loading icon](https://loading.io/css/)

## Build
Clone the repository:

```
git clone https://github.com/lhafkamp/voorhoede-app.git
```

Install dependencies:
```
npm install
```

In order for this app to fully work you need to run the GraphQL wrapper that I wrote.
Clone [this](https://github.com/lhafkamp/voorhoede-wrapper) repository and follow the instructions in the README to get the server running.

Run the app:
```
npm start
```

## License
[MIT licensed](https://github.com/voorhoede/voorhoede-colibri-api/blob/master/license) © [De Voorhoede](https://twitter.com/devoorhoede)
