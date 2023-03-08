// src/components/MenuItem.js

import React from "react"
import { CreateLocalLink } from "../utils"
import {
  NavLink
} from "./ui"
import {
  mobileNavOverlay,
  mobileNavLink,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
} from "./header.css"

const MenuItem = ({ menuItem, wordPressUrl, className }) => {
  return (
    <NavLink className={className} to={CreateLocalLink(menuItem, wordPressUrl)}>{menuItem.label}</NavLink>
  )
}

export default MenuItem