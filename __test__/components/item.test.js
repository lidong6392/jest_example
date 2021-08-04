import React from 'react';
import CommentItem from '../../src/components/item'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() });
const { shallow, mount, render } = Enzyme;

describe('shallow模式测试', () => {
  const propsData = {list: ['评论1','评论2','评论3']}
  const wrapper = shallow(<CommentItem {...propsData} />);
  test('测试评论数等于3时不出现展开收起按钮', () => {
    expect(wrapper.find('p').length).toBe(3);
    expect(wrapper.find('.btn-expand').length).toBe(0);
  });

  test('shallow模式快照测试', () => {
    expect(wrapper.debug()).toMatchSnapshot()
  })
});

describe('Mount模式测试', function () {  
  //测试删除是否起作用 
  test('测试评论数等于4时出现展开收起按钮',function () {    
    const propsData = {list: ['评论1','评论2','评论3', '评论4']}
    let wrapper = mount(<CommentItem {...propsData} />);      
    expect(wrapper.find('p').length).toBe(4);
    expect(wrapper.find('.btn-expand').length).toBe(1);
  });

  test('Mount模式快照测试', () => {
    const propsData = {list: ['评论1','评论2','评论3']}
    const wrapper = mount(<CommentItem {...propsData} />);
    expect(wrapper.debug()).toMatchSnapshot()
  })

});

describe('render模式测试', function () {  
  const propsData = {list: ['评论1','评论2','评论3', '评论4', '评论5']}
  //测试删除是否起作用 
  test('测试评论数等于5时出现展开收起按钮',function () {    
    const wrapper = render(<CommentItem {...propsData} />);    
    expect(wrapper.find('p').length).toBe(5);
    expect(wrapper.find('.btn-expand').length).toBe(1);
  });

  test('render模式快照测试', () => {
    const propsData = {list: ['评论1','评论2','评论33']}
    const wrapper = render(<CommentItem {...propsData} />);
    expect(wrapper.html()).toMatchSnapshot()
  })
});
