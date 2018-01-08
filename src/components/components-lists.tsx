import * as React from 'react'
import BasicButton from './button/BasicButton'

const ComponentsLists = [
  { path: '/',
    exact: true,
    name: 'home',
    main: () => <h2>Home</h2>
  },
  { path: '/basicbutton',
    exact: true,
    name: 'button',
    main: BasicButton
  },
  { path: '/image',
    exact: true,
    name: 'image',
    main: () => <h2>image</h2>
  }
]

export default ComponentsLists;
