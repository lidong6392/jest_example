import axios from 'axios';
// 由JSONPlaceholder提供的mock请求地址，返回的数据为：
// { "userId": 1,"id": 1,"title": "delectus aut autem", "completed": false }
export const fetchData = (callback) => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1');
}














/*


export const fetchData = (callback) => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
    callback(res.data);
  });
}
*/

















