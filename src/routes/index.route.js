import { loadConfig } from '../services/utils';

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    app: process.env.APPNAME,
    image: process.env.IMAGE,
    config: loadConfig(),
    status: 'ok',
  });
})

module.exports = router;
