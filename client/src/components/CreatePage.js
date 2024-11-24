import React from 'react'
import { NavComponent } from './NavComponent'
import CodeEditor from './CodeEditor'
import DashBoard from './DashBoard'

function CreatePage() {
  return (
    <div>
      <NavComponent/>
      <CodeEditor/>
      <DashBoard/>
    </div>
  )
}

export default CreatePage