# babel-plugin-ken-wheeler

Code like you dope

## Example

In:

```js
word;
nah;
```

Out:

```js
true;
false;
```

## Installation

```sh
$ npm install babel-plugin-ken-wheeler
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["ken-wheeler"]
}
```

### Via CLI

```sh
$ babel --plugins ken-wheeler script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["ken-wheeler"]
});
```
