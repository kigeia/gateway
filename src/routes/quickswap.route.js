import { ethers } from 'ethers';

import Uniswap from '../services/uniswap';
import getRouter from './generic.uniswap.route';
import Ethereum from '../services/eth';
const eth = new Ethereum(process.env.ETHEREUM_CHAIN)

var uni = require('quickswap-sdk')
var chainID = 137
const uniswap = new Uniswap(chainID, uni, eth.spenders['quickswap'])

const router = getRouter(uniswap)

export default router;
