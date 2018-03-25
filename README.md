Welcome to Express-tester.
 
Setup
---
 
```
npm install or yarn
```



Usage
---

First change .env.example to .env and configure it as you wish.


Start the development server with this command:
 
```
npm run start:dev or yarn start:dev
```

Perform webpack build with following command:

```
npm run build or yarn build
```

Run the built server with following command:

```
npm run serve or yarn serve
```

To monitor server only with nodemon without webpack run the following.(Note: Don't import css inside server folder or you'll need webpack)

```
npm run serve:dev or yarn serve:dev
```