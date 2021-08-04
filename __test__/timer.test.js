import { timer } from '../src/timer.js';

jest.useFakeTimers();

test('测试定时器', () => {
    const fn = jest.fn();
    timer(fn);
    jest.advanceTimersByTime(60000);
    expect(fn).toHaveBeenCalledTimes(1);
});




