import wepy from 'wepy'

const wxRequest = async (params = {}, url) => {
  let data = params.data || {}
  let method = params.method || 'GET'
  let res = await wepy.request({
    url: url,
    method: method,
    data: data,
    header: {'Content-Type': 'application/json'}
  })
  return res
}

export {
  wxRequest
}
