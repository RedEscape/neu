/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

const Sidebar = ({ children }) => {
  return (
    <div className="Sidebar" css={CSS}>
      {children}
    </div>
  )
}

const CSS = css

export default Sidebar
