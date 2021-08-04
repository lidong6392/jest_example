export const getLocalStorageTicket = () => {
  console.log('getLocalStorageTicket 执行!!!');
  return window.localStorage.getItem('ticket') || '';
}
  
  