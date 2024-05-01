import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversation'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-b border-l border-t rounded-2xl  border-slate-700 p-4 flex flex-col'>
        <SearchInput/>
        <div className='divider  px-3'></div>
         <Conversations/>
         <Conversations/>
         <Conversations/>
         <Conversations/>
        <LogoutButton/>
       
    </div>
  )
}

export default Sidebar
