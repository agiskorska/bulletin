import React from 'react';
import { shallow } from 'enzyme';
import { MainLayoutComponent } from './MainLayout';

const user = {};
user.isLogged = true;

describe('Component MainLayout', () => {
  it('should render without crashing', () => {
    const component = shallow(<MainLayoutComponent user={user} />);
    expect(component).toBeTruthy();
  });
});
