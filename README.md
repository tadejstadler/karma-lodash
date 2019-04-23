# karma-lodash

> Adapter for the [Lodash](https://lodash.com/) framework.


## Installation

### Lodash 4.17-11 ([docs](https://lodash.com/docs/4.17.11))

Install the `karma-lodash` plugin:

```sh
$ npm install karma-lodash --save-dev
```

## Configuration

Add lodash to the frameworks key in your Karma configuration:

```js
module.exports = function(config) {
  config.set({
    frameworks: ['lodash']
  })
}
```

For more information on Karma see the [homepage].


[homepage]: https://github.com/karma-runner