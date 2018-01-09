import * as React from 'react'
import BasicButton from './button/BasicButton'
import CalanderPicker from './calendar/Calendar'

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
      main: () => <h2>activity item</h2>
  },
  { path: '/calendar',
      exact: true,
      name: 'Calendar',
      main: CalanderPicker
  },
  { path: '/checkbox',
      exact: true,
      name: 'Check Box',
      main: () => <h2>Check Box</h2>
  }
];

export default ComponentsLists;
