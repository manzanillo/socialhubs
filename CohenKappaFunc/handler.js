'use strict'

const calculate = require('./calculate')

module.exports.hello = async (event, context, callback) => {
  return await calculate.calculate()

  // callback(null, response)
  // .then(res => {
  //   callback(null, res)
  // })
  // .catch(err => {
  //   callback(err, null)
  // })
}

// Use this code if you don't use the http event with the LAMBDA-PROXY integration
// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
