import React from 'react'
import { shallow } from 'enzyme'

import App from '../index';


describe('App', () => {
  test('should render', () => {
    const wrapper = shallow(
      <App />
    )
    expect(wrapper.exists()).toBeTruthy()
  })
})