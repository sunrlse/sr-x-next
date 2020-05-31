'use strict'

const fs = require('fs')
const Promise = require('bluebird')
const xml2js = require('xml2js')

exports.readFileAsync = function(fpath, encoding) {
  return new Promise(function(resolve, reject) {
    fs.readFile(fpath, encoding, function(err, content) {
      if (err) reject(err)
      else resolve(content)
    })
  })
}
exports.writeFileAsync = function(fpath, content) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(fpath, content, function(err) {
      if (err) reject(err)
      else resolve()
    })
  })
}

exports.parseXMLAsync = function(xml) {
  return new Promise(function(resolve, reject){
    xml2js.parseString(xml, { trim: true }, function(err, content) {
      if (err) reject(err)
      else resolve(content)
    })
  })
}

function formatMessage(result) {
  let message = {}
  if (typeof result === 'object') {
    let keys = Object.keys(result)
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      let item = result[key]
      if (!(item instanceof Array) || item.length === 0) {
        continue
      }
      if (item.length === 1) {
        let val = item[0]
        if (typeof val === 'object') {
          message[key] = formatMessage(val)
        } else {
          message[key] = (val || '').trim()
        }
      } else {
        message[key] = []

        for (let j = 0; j < item.length; j++) {
          message[k].push(formatMessage(item[j]))
        }
      }
    }
  }
  return message
}

exports.formatMessage = formatMessage
