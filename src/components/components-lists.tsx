import * as React from 'react'
import BasicButton from './button/BasicButton'

const ComponentsLists = [
  { path: '/',
    exact: true,
    name: 'Home',
    main: () => <p>Home</p>
  },
  { path: '/basicbutton',
    exact: true,
    name: 'Button',
    main: BasicButton
  },
  { path: '/image',
    exact: true,
    name: 'Image',
    main: () => <h2>image</h2>
  },
  { path: '/activityitem',
      exact: true,
      name: 'Activity Item',
      main: () => <h2>activityitem</h2>
  },
  { path: '/calender',
      exact: true,
      name: 'Calender',
      main: () => <h2>Calender</h2>
  },
  { path: '/checkbox',
      exact: true,
      name: 'Check Box',
      main: () => <h2>Check Box</h2>
  }
];

export default ComponentsLists;
