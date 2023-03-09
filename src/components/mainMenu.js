// src/components/Menu.js

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import MenuItem from "./MenuItem"


/**
 * Define MenuItem fragment and get all primary menu items.
 */
const MENU_QUERY = graphql`



    query GETMAINMENU {
      wpMenu(locations: {eq: PRIMARY}) {
        name
        id
        menuItems {
          nodes {
            id
            title
            url
            label
          }
        }
      }      
      wp {
        generalSettings {
          url
        }
      }      
    }
`

const Menus = ({className}) => {
  return (
    <StaticQuery
      query={MENU_QUERY}
      render={(data) => {
// console.log(data)
        
        if (data.wpMenu) {
          const menuItems = data.wpMenu.menuItems.nodes
          const wordPressUrl = data.wp.generalSettings.url
          return (
                menuItems &&
                menuItems.map((menuItem) => (
                <li>
                  <MenuItem className={className} key={menuItem.id} menuItem={menuItem} wordPressUrl={wordPressUrl}/>
                </li>
                ))
          )
        }
        return null
      }}
    />
  )
}

export default Menus