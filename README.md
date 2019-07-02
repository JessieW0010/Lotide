# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@jessiew/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the first element of the inputted array
* `tail(...)`: returns the array with the first element removed
* `middle(...)`: returns the middle element(s) of the inputted array
* `flatten(...)`: returns the flattened array of an inputted nested array
* `countOnly(...)`: takes an inputted array (keys) and object and returns an object containing the matching keys and their value
