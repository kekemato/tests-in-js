import rerenderer from 'react-test-renderer'
import React from 'react'

import App from './App'

test('renders correctly', () => {
    const tree = rerenderer
    .create(<App />)
    .toJSON()

    expect(tree).toMatchSnapshot()
})