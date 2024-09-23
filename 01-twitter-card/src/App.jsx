import { useState } from 'react'
import './App.css'
import { TwitterFolloCard } from './TwitterFollowCard.jsx'

export function App() {
   
   const formatUserName = (userName) => `@${userName}`
      
   return (
      <div className='App'>
         <TwitterFolloCard 
            initialIsFollowing={false}
            formatUserName={formatUserName}  
            userName="jpalma76" 
            name="Juan Palma Álvarez" 
         />
         
         <TwitterFolloCard initialIsFollowing={true} formatUserName={formatUserName} userName="midudev">
            Miguel Ángel Durán
         </TwitterFolloCard> 

      </div>
   )
}