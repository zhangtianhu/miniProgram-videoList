// user.js
import request from '../utils/request'
// baseUrl也可拼接在request.js中，当有多个鉴权模块，放在这里更灵活
const baseUrl = getApp().globalData.baseUrl

export function apiLogin(data) {
  return request({
    url: `${baseUrl}/user/login`,
    method: 'post',
    data
  })
}

export function getHospSettingInfo(data) {
  return request({
    url: `${baseUrl}/medicalAbandon/dict/getHospSettingInfo`,
    method: 'post',
    data
  })
}

