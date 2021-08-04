import Calculator from '../src/calculator.js';
let calculator = null;

beforeEach(() => {
    // 每个用例开始前初始化一个新的Calculator实例，避免用例之间耦合
    calculator = new Calculator();
})

afterEach(() => {
    // 每个用例结束后进行销毁
    calculator = null;
})

test('测试Calculator中的 add 方法', () => {
    calculator.add();
    expect(calculator.number).toBe(1);
});

test('测试Calculator中的 minus 方法', () => {
    calculator.minus();
    expect(calculator.number).toBe(-1);
});


