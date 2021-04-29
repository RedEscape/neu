/** @jsx jsx */
import React, { useContext } from 'react'
import { StoreContext } from './index'
import { css, jsx } from '@emotion/react'

const Content = () => {
  const { state } = useContext(StoreContext)
  return (
    <div className="Content" css={CSS}>
      {state.currentPlaylist}
    </div>
  )
}

const CSS = css`
  width: calc(100% - 200px);
  padding: 20px;
  background: #121212;
  padding-top: 80px;
  font-size: 20px;
  text-transform: capitalize;
`

export default Content
