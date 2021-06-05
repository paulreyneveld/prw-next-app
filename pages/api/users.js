const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bcrypt = require('bcrypt');
const v4 = require('uuid').v4;
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.SECRET_KEY;

const saltRounds = 10;
const url = process.env.DB_URL;
const dbName = 'simple-login-db';

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});