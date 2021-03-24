import React from 'react'
import renderer from 'react-test-renderer'
import TextComponent from 'components/ui/TextComponent'

const props = {
    text: 'hello',
    variant: 'button'
}

const component = <TextComponent {...props} />
let wrapper = renderer.create(component).toJSON()

it('<TextComponent /> renders', () => {
    expect(wrapper).toBeTruthy()
})
    
it('<TextComponent /> test snapshot', () => {
    expect(wrapper).toMatchSnapshot()
})
