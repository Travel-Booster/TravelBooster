import React from 'react'
import renderer from 'react-test-renderer'
import ButtonComponent from 'components/ui/ButtonComponent'

const props = {
    text: 'hello',
    action: () => console.log('test'),
    color: 'error',
    width: 'full'
}

const component = <ButtonComponent {...props} />
let wrapper = renderer.create(component).toJSON()

it('<TextComponent /> renders', () => {
    expect(wrapper).toBeTruthy()
})
    
it('<TextComponent /> test snapshot', () => {
    expect(wrapper).toMatchSnapshot()
})
