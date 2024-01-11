import React, { useState } from "react";
import Nav from "./components/Nav";
import NewArrivalSection from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import SideBar from "./components/SideBar";
import { SHOE_LIST } from "./constants";
import CartItem from "./components/CartItem";

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
        <CartItem item={SHOE_LIST[0]} />
        <CartItem item={SHOE_LIST[2]} />
        <CartItem item={SHOE_LIST[3]} />
      </SideBar>
    </div>
  );
}

export default App;
