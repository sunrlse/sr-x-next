# sr-x-next

```js
npm i
npm run dev
```

## use of less 
add the following code to next.config.js
```js
const withLess = require('@zeit/next-less')
withLess({}) // options like css module etc. But. the component using css module  cannot router by react-router if the url first load not this component.
```


## start with pm2

```js
pm2 start npm --name "xxx" -- start      // the last start is package.json's script name

```