import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
   {
      "name": "Juan Palma Álvarez",
      "userName": "jpalma76",
      "isFollowing": true
   },
   {
      "name": "Miguel Ángel Durán",
      "userName": "midudev",
      "isFollowing": false
   },
   {
      "name": "Pablo Hernandez",
      "userName": "pheralb_",
      "isFollowing": true
   },
   {
      "name": "Héctor de León",
      "userName": "powerhdeleon",
      "isFollowing": false
   }
]

export function App() {

   
   return (
      <section className='App'>
         {
            users.map(user => {
               const { userName, name, isFollowing } = user
               return (
                  <TwitterFollowCard
                     key={userName}
                     userName={userName}
                     initialIsFollowing={isFollowing}
                  >
                     {name}
                  </TwitterFollowCard>
               )
            })
         }
      </section>
   )
}