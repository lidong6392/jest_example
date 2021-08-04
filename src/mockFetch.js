import axios from 'axios';
export const fetchData = (callback) => {
    console.log('原文件执行')
    return axios.get('https://jsonplaceholder.typicode.com/todos/1');
}



