import { fetchData } from '../src/fetch.js';
test('return Promise对象测试异步', () => {
  return fetchData().then(res => {
    const { data } = res;
    expect(data).toEqual({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false 
    });
  })
});







/*
test('控制done()的执行测试异步', (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false 
    });
    done();
  })
});
*/


