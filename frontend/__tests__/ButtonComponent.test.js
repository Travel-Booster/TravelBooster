import ButtonComponent from 'components/ui/ButtonComponent'
import React from 'react'
import renderer from 'react-test-renderer'

const props = {
	text: 'hello',
	action: () => console.log('test'),
	color: 'error',
	width: 'full',
}

const component = <ButtonComponent {...props} />
const wrapper = renderer.create(component).toJSON()

it('<TextComponent /> renders', () => {
	expect(wrapper).toBeTruthy()
})

it('<TextComponent /> test snapshot', () => {
	expect(wrapper).toMatchSnapshot()
})
