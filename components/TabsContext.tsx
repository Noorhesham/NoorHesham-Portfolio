"use client"
import { useState, useContext, createContext, ReactNode } from "react";
const TabsContext = createContext(null);

function Tabs({ children }:{children:ReactNode}) {
  const [activeTab, setActiveTab] = useState(0);
  const [page,setPage]=useState(1)

  function TabClick(id:number) {
    setPage(1)
    setActiveTab(id);
  }
  function handlePagination(i:number){
    setPage(i)
  }
  
  return (
    //@ts-ignore
    <TabsContext.Provider value={{ activeTab, TabClick,page,handlePagination }}>
      {children}
    </TabsContext.Provider>
  );
}
export function useTabs(){
    const context=useContext(TabsContext);
    return context
}


export default Tabs;
