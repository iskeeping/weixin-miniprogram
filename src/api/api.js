import {wxRequest} from '../utils/wx-request'

const qs = require('qs')
// const base = 'http://127.0.0.1:7001/api/'
const base = 'https://www.lpes.club/miniprogram/api/'

const getCategorys = (params) => wxRequest(params, base + 'getCategorys?' + qs.stringify(params))
const getAds = (params) => wxRequest(params, base + 'getAds?' + qs.stringify(params))
const getGoodsListByCategoryId = (params) => wxRequest(params, base + 'getGoodsListByCategoryId?' + qs.stringify(params))
const getGoodsById = (params) => wxRequest(params, base + 'getGoodsById?' + qs.stringify(params))
const loginByWeixin = (params) => wxRequest(params, base + 'loginByWeixin?' + qs.stringify(params))
const getAddressesByUserId = (params) => wxRequest(params, base + 'getAddressesByUserId?' + qs.stringify(params))
const getAddressById = (params) => wxRequest(params, base + 'getAddressById?' + qs.stringify(params))
const addAddressByUserId = (params) => wxRequest(params, base + 'addAddressByUserId?' + qs.stringify(params))
const updateAddressById = (params) => wxRequest(params, base + 'updateAddressById?' + qs.stringify(params))
const getProvinces = (params) => wxRequest(params, base + 'getProvinces?' + qs.stringify(params))
const getCitysByParentId = (params) => wxRequest(params, base + 'getCitysByParentId?' + qs.stringify(params))
const getAreasByParentId = (params) => wxRequest(params, base + 'getAreasByParentId?' + qs.stringify(params))
const getUserById = (params) => wxRequest(params, base + 'getUserById?' + qs.stringify(params))

export {
  getCategorys,
  getAds,
  getGoodsListByCategoryId,
  getGoodsById,
  loginByWeixin,
  getAddressesByUserId,
  getAddressById,
  addAddressByUserId,
  updateAddressById,
  getProvinces,
  getCitysByParentId,
  getAreasByParentId,
  getUserById
}
