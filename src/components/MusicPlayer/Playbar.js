/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

const Playbar = ({ children }) => {
  return (
    <div className="Playbar" css={CSS}>
      {children}
    </div>
  )
}

const CSS = css

export default Playbar
