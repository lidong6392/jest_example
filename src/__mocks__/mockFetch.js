export const fetchData = (callback) => {
    console.log('__mocks__文件夹执行')
    const data = {text: 'mock返回结果'};
    return Promise.resolve(data);
}



