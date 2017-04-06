

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'

import { Sub } from '../Subscriptions'



test('<Sub/> component matches snapshot', () => {
  beforeEach(() => {
    Sub.propTypes = {
      loading: jest.fn()
    }
    const elR = renderer.create( <Sub/> )
    expect(elR.toJSON()).toMatchSnapshot()
  })
})

