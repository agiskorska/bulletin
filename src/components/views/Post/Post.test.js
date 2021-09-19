import React from 'react';
import { shallow } from 'enzyme';
import { PostComponent } from './Post';
const posts = [
  {a: 'bab', b: 'afaf'},
  {a: 'bbb', b: 'afaf'},
];
describe('Component Post', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostComponent posts={posts}/>);
    expect(component).toBeTruthy();
  });
});
