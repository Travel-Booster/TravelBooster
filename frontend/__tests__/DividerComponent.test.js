import React from 'react'
import renderer from 'react-test-renderer'
import DividerComponent from 'components/ui/DividerComponent'

const props = {
    size: 'small'
}

const component = <DividerComponent {...props} />
let wrapper = renderer.create(component).toJSON()

it('<TextComponent /> renders', () => {
    expect(wrapper).toBeTruthy()
})
    
it('<TextComponent /> test snapshot', () => {
    expect(wrapper).toMatchSnapshot()
})
