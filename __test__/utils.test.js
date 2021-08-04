import * as utils from '../src/utils';

jest.mock('../src/utils', () => ({
  getLocalStorageTicket: () => {
    console.log('mock 执行!!!');
    return 'abcde';
  }
}))

test('测试jest.mock()', () => {
  console.log(utils.getLocalStorageTicket());
});


