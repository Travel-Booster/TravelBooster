import DividerComponent from 'components/ui/DividerComponent'
import React from 'react'
import renderer from 'react-test-renderer'

const props = {
	size: 'small',
}

const component = <DividerComponent {...props} />
const wrapper = renderer.create(component).toJSON()

it('<TextComponent /> renders', () => {
	expect(wrapper).toBeTruthy()
})

it('<TextComponent /> test snapshot', () => {
	expect(wrapper).toMatchSnapshot()
})
