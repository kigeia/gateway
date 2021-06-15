import { ethers } from 'ethers';

import Uniswap from '../services/uniswap';
import getRouter from './generic.uniswap.route';

require('dotenv').config()

var uni = require('@pangolindex/sdk')
var chainID = 43114
const uniswap = new Uniswap(chainID, uni, process.env.PANGOLIN_ROUTER)

const router = getRouter(uniswap)

export default router;
