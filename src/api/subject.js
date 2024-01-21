import request from '@/utils/request'
// 商家
export function addBusiness(params) {
  return request({
    url:'/business/add',
    method:'post',
    data:params
  })
}


export function delBusiness(params) {
  return request({
    url:'/business/delete',
    method:'post',
    data:params
  })
}

export function searchBusinessList(params) {
  return request({
    url:'/business/page',
    method:'post',
    data:params
  })
}

// 用户
export function searchUserList(params) {
  return request({
    url:'/user/page',
    method:'post',
    data:params
  })
}


export function addUser(params) {
  return request({
    url:'/user/add',
    method:'post',
    data:params
  })
}

export function delUser(params) {
  return request({
    url:'/takeaway/user/delete',
    method:'post',
    data:params
  })
}


export function updatedUser(params) {
  return request({
    url:'/takeaway/user/updated',
    method:'post',
    data:params
  })
}

// 发送短信
export function sendMseesage(params) {
  return request({
    url:'/sms/send',
    method:'post',
    data:params
  })
}
// 登录
export function login(params) {
  return request({
    url:'/login',
    method:'post',
    data:params
  })
}

// 获取验证码
export function getSmsCode(params) {
  return request({
    url:'/web/page/handler/sendSmsCode',
    method:'post',
    data:params
  })
}

// 订单分页查询
export function searchOrderList(params) {
  return request({
    url:'/order/page',
    method:'post',
    data:params
  })
}
