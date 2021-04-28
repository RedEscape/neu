/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

const Topbar = ({ children }) => {
  return (
    <div className="Topbar" css={CSS}>
      {children}
    </div>
  )
}

const CSS = css

export default Topbar
