import { generateDiv } from '../src/dom'

test('测试dom操作', () => {
    // console.log('location: ', location);
    // console.log('window:', window);
    //console.log('document.body.clientWidth: ', document.body.clientWidth)
    //console.log('document.body.clientHeight: ', document.body.clientHeight)
    console.log('screen:', `${window.screen.availWidth} * ${window.screen.availHeight}`);
    console.log('top:', window.top === window);

    generateDiv();
    generateDiv();
    generateDiv();
    expect(document.getElementsByClassName('test-div').length).toBe(3);
});


