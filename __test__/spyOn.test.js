import * as utils from '../src/utils';

test('测试jest.mock()', () => {
  const spyGetTicket = jest.spyOn(utils, 'getLocalStorageTicket');
  // spyGetTicket.mockImplementation(() => 'abcde');
  const ticket = spyGetTicket();
  expect(spyGetTicket).toHaveBeenCalled();
  expect(spyGetTicket).toHaveBeenCalledTimes(1);
  expect(ticket).toBe('');
});
