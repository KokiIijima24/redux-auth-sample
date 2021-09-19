import React from "react";
import HeaderMenu from '../components/HeaderMenu'

const MainLayout = props => (
  <div>
    <HeaderMenu />
    {props.children}
  </div>
)

export default MainLayout