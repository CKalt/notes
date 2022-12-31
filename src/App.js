import { CreateNote, NavBar, NoteUICollection, UpdateNote } from './ui-components'
import { useState } from 'react'

function App () {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [updateNote, setUpdateNote] = useState()

  return (
    <>
      <NavBar
        width="100%" marginBottom='20px' overrides={{
            Button31632483: { onClick: () => setShowCreateModal(true) }
        }}
      />
      <div className='container'>
        <NoteUICollection />
      </div>
      <div className='modal' style={{ display: showCreateModal === false && 'none' }}>
        <CreateNote overrides={{
            MyIcon: {
              as: 'button',
              onClick: () => setShowCreateModal(false)
            }
          }}
        />
      </div>

      <div className='modal' style={{display: 'none'}}>
        <UpdateNote />
      </div>
    </>
  )
}


export default App;
