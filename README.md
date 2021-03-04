# REACT X BIBIT
React apps x Bibit

## DEPLOY
- [x] https://practical-goodall-c41fc7.netlify.app/

## How to run
 - `git clone` this repository
 - `npm install` or `yarn install`  
 - run this app with command `yarn start` or `npm start`
 - for run test, please use command `yarn test` or `npm test`

## Page
 - [x] Home => List all Movies 
 - [x] Detail => List Specific Movie

## Anagram Test

```js
const arr = ['aku', 'kua', 'adi', 'ida']

let tmp = []

for (let i = 0; i < arr.length; i += 1) {
  if (!tmp.length) {
    tmp.push([arr[i]])
  } else {
    for (let j = 0; j < tmp.length; j += 1) {
      if (
        tmp[j][0].split('').sort().toString() ===
        arr[i].split('').sort().toString()
      ) {
        tmp[j].push(arr[i])
      }
    }
  }
}

console.log('==>', tmp)

```

 ## Features
 - [x] Reactjs 
 - [x] Styled Component (Reusable Component)
 - [x] fetch with Axios
 - [x] Store Management with Redux and middleware with Redux Thunk
 - [x] Infinite Scroll in Home and Modal Search
 - [x] Test Component but not 100% coverage
 ![test coverage](https://raw.githubusercontent.com/pace11/react-x-bibit/master/src/assets/test-coverage.png)




