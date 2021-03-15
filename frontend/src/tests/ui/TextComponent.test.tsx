import React from 'react'
import renderer from 'react-test-renderer'
import TextComponent from 'components/ui/TextComponent'

const props = {
    text: 'hello'
}

const textComponent = <TextComponent {...props} />

describe('<TextComponent />', () => {
    const wrapper = renderer.create(textComponent)

    it('Snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
