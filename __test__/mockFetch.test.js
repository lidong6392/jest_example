import { fetchData } from '../src/mockFetch.js';
jest.mock('../src/mockFetch.js');
test('测试 Mock 函数，改变内部函数的实现', () => {
    return fetchData().then(data => {
        console.log('>>>> data', JSON.stringify(data))
        expect(data).toEqual({text: 'mock返回结果'});
    })
});

