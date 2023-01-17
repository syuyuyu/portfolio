import { createContext, useContext, useState  } from 'react';


const BurgerContext = createContext(0);

export const useBurger =()=>useContext(BurgerContext);

export const BurgerProvider =({children})=>{
  const [toggleBurger,setToggleBurger]= useState(false);

    const onToggleBurger =()=>{
    setToggleBurger(!toggleBurger)

    setTimeout(() => {
    setToggleBurger(false)
    }, 3000);
  };

  return(
    <BurgerContext.Provider
    value={{
      toggleBurger,
      setToggleBurger,
      onToggleBurger,
      }}>
      {children}
    </BurgerContext.Provider>
  )
};
