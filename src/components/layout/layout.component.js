import { ReactNode } from 'react';

import './layout.scss';

const Layout = (
  { title, children }
) => (
  <div className='layout-container'>
    <h2 className='layout-title'>
      <span>{title}</span>
    </h2>
    <div className='layout-content'>
      { children }
    </div>
  </div>
)

export default Layout;