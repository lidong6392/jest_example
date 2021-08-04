import { getConfig } from '../src/snapshot.js'
test('getConfig测试', () => {
    expect(getConfig()).toMatchSnapshot()
})
// test('getConfig测试', () => {
//   const config = {server: 'https://demo.com',port: '8080'}
//   expect(getConfig()).toEqual(config)
// })
