#! /usr/bin/env node

var crypto = require('crypto');
var child_process = require('child_process');
var appName = process.env['APP_NAME'] || 'canvas-camo';

// accept URL as arg
var imageUrl = process.argv[2];

// get key from heroku
var command = 'heroku'
var args  = ['config:get', 'CAMO_KEY', '-a', appName]
var spawn = child_process.spawnSync(command, args)
var key = spawn.output[1].toString().trim()

// create HMAC
var hmac = crypto.createHmac('sha1', key);
hmac.write(imageUrl)
hmac.end()
var digest = hmac.read().toString('hex');

var baseUrl = 'https://' + appName + '.herokuapp.com/' + digest + '/'
var v1 = baseUrl + '?url=' + encodeURIComponent(imageUrl)
var v2 = baseUrl + (new Buffer(imageUrl, 'utf8').toString('hex'))

process.stdout.write(v1 + '\n')
process.stdout.write(v2 + '\n')
