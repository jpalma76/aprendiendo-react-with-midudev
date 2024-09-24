import { useState } from "react";

export function TwitterFollowCard({ initialIsFollowing, children, userName }) {
   const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

   const formatUserName =  (userName) => `@${userName}`

   

   /* Renderizado condicional */
   const text = isFollowing ? 'Siguiendo' : 'seguir';

   const buttonClassName = isFollowing
      ? 'tw-followCard-button is-following'
      : 'tw-followCard-button';

   const handleClick = () => {
      setIsFollowing(!isFollowing)
   }

   return (
      <article className='tw-followCard'>
         <header className='tw-followCard-header'>
            <img
               className='tw-followCard-avatar'
               src={`https://unavatar.io/x/${userName}`}
               alt={children}
            />
            <div className='tw-followCard-info'>
               <strong>{children}</strong>
               <span className='tw-followCard-infoUserName'>
                  {formatUserName(userName)}
               </span>
            </div>
         </header>

         <aside>
            <button onClick={() => handleClick()} className={buttonClassName}>
               <span className="tw-followCard-text">
                  {text}
               </span>
               <span className="tw-followCard-stopFollow">
                  dejar de seguir
               </span>
            </button>
         </aside>
      </article>
   )
}