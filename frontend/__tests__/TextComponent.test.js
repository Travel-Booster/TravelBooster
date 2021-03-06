import TextComponent from 'components/ui/TextComponent'
import React from 'react'
import renderer from 'react-test-renderer'

const props = {
	text: 'hello',
	variant: 'button',
}

const component = <TextComponent {...props} />
const wrapper = renderer.create(component).toJSON()

it('<TextComponent /> renders', () => {
	expect(wrapper).toBeTruthy()
})

it('<TextComponent /> test snapshot', () => {
	expect(wrapper).toMatchSnapshot()
})
