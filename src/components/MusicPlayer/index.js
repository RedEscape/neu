/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Playbar from './Playbar'
import Content from './Content'

const MusicPlayer = () => {
  return (
    <div className="MusicPlayer" css={CSS}>
      <Topbar />
      <Sidebar />
      <Content />
      <Playbar />
    </div>
  )
}

const CSS = css`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  color: white;
`

export default MusicPlayer
