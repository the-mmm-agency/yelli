import { PencilBoxOutline as Pencil } from 'mdi-material-ui'
import React from 'react'

import UserMenuItem from './userMenu.item'

import SubmitApp from 'src/components/submitApp'
import { useBoolean } from 'src/hooks/useBoolean'

const SubmitAppItem: React.FC = () => {
  const open = useBoolean(false)
  return (
    <>
      <UserMenuItem
        icon={<Pencil />}
        onClick={open.setTrue}
        text="Submit your app"
      />
      <SubmitApp
        onClose={open.setFalse}
        open={open.value}
      />
    </>
  )
}

export default SubmitAppItem
