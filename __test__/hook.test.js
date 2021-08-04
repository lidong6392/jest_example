beforeAll(() => {
    console.info('beforeAll 钩子函数执行');
})

beforeEach(() => {
    console.info('beforeEach 钩子函数执行');
})

afterEach(() => {
    console.info('afterEach 钩子函数执行');
})

afterAll(() => {
    console.info('afterAll 钩子函数执行');
})

test('测试Jest中的钩子函数', () => {
    console.info('测试用例执行');
    expect(1).toBe(1);
})

