import axios from 'axios'
const ajax = axios.create({baseURL:'http://api.jirengu.com'})
const getWeather = () => ajax.get('/getWeather.php')


// 拦截请求处理数据
ajax.interceptors.response.use((resp) => {
  if(resp.status === 200) {
    if (resp.data.message === "success") {
      return resp.data.result
    }
    else {
      return resp.data.message
    }
  }
  else {
    return resp.status
  }
})
export default{
  getWeather
}