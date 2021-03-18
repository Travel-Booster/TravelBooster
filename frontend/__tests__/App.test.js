import React from 'react'
import renderer from 'react-test-renderer'
import App from './../App.tsx'

const component = <App />
let wrapper

it('<App /> renders', () => {
    wrapper = renderer.create(component).toJSON();
    expect(wrapper).toBeTruthy();
})
    
it('<App /> test snapshot', () => {
    expect(wrapper).toMatchSnapshot();
})

