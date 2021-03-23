import React from 'react'
import renderer from 'react-test-renderer'
import App from './../App'

const component = <App />
let wrapper = renderer.create(component).toJSON()

it('<App /> renders', () => {
    expect(wrapper).toBeTruthy()
})
    
it('<App /> test snapshot', () => {
    expect(wrapper).toMatchSnapshot()
})
