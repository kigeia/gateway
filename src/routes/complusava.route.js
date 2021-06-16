import { ethers } from 'ethers';

import Uniswap from '../services/uniswap';
import getRouter from './generic.uniswap.route';

require('dotenv').config()

var uni = require('@complus/sdk-ava')
var chainID = 43114
const uniswap = new Uniswap(chainID, uni, process.env.COMPLUSAVA_ROUTER)

const router = getRouter(uniswap)

export default router;
