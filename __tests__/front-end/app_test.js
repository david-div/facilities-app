import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'
import { shallow, mount, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../src/App.js';

Enzyme.configure({ adapter: new Adapter() });
// mock document.cookie (as won't have access to document)

describe('Initial cookie test', () => {
  it('should add a cookieID with username', () => {
    const app = shallow(<App />)
    expect(app.state().cookieID).toContain('username')
  });
})
