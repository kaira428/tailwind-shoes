import React, { useState } from "react";
import Nav from "./components/Nav";
import NewArrivalSection from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import SideBar from "./components/SideBar";
import { SHOE_LIST } from "./constants";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div className="p-10 lg:p-24 animate-fadeIn">
      <Nav onClickShoppingButton={() => setIsSideBarOpen(true)} />
      <ShoeDetail />
      <NewArrivalSection items={SHOE_LIST} />
      <SideBar
        isOpen={isSideBarOpen}
        onClickClose={() => setIsSideBarOpen(false)}
      >
        Hello
      </SideBar>
    </div>
  );
}

export default App;
