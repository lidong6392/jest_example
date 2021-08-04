import { add, sayHello } from '../src/demo.js';

test('测试add函数：add(2, 2) 返回 4', () => {
    expect(add(2, 2)).toBe(4);
});
test('测试具体值：1 + 2 = 3', () => {
    expect(1 + 2).toBe(3);
});

test('数字Matchers',() => {
    expect(2).toBeGreaterThan(1);
    expect(2).toBeLessThan(3);
    expect(2).toBeGreaterThanOrEqual(2);
    expect(2).toBeLessThanOrEqual(2);
  });

test('数组匹配Matchers',() => {
    expect([1, 2, 3]).toContain(2);
    expect([
      {name: 'huawei'}, 
      {name: 'vivo'}, 
      {name: 'xiaomi'}
    ]).toContainEqual({name: 'huawei'});
});

test('布尔匹配Matchers',() => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect().toBeUndefined();
    expect(null).toBeNull();
});

/*
test('测试sayHello函数返回 "hello" ', () => {
    expect(sayHello()).toBe("hello");
});
*/

  