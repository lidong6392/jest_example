test('测试jest.fn()调用情况', () => {
    let mockFn = jest.fn();
    let result = mockFn(1, 2, 3);
    // 断言mockFn被调用
    expect(mockFn).toBeCalled();
    // 断言mockFn被调用了一次
    expect(mockFn).toBeCalledTimes(1);
})

test('指定返回值', () => {
    let mockFn = jest.fn().mockReturnValue('abc');
    // 断言mockFn执行后返回值为default
    expect(mockFn()).toBe('abc');
})



test('指定内部实现', () => {
    let mockFn = jest.fn((num1, num2) => {
        return num1 * num2;
    });
    // 断言mockFn执行后返回100
    expect(mockFn(10, 10)).toBe(100);
})
  
test('设置为Promise并返回指定值', async () => {
    let mockFn = jest.fn().mockResolvedValue('default');
    let result = await mockFn();
    // 断言mockFn通过await关键字执行后返回值为default
    expect(result).toBe('default');
    // 断言mockFn调用后返回的是Promise对象
    expect(Object.prototype.toString.call(mockFn()))
        .toBe("[object Promise]");
})


