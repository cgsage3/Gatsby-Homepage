// src/components/Menu.js

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import MenuItem from "./MenuItem"


/**
 * Define MenuItem fragment and get all primary menu items.
 */
const MENU_QUERY = graphql`



    query GETMAINMENU {
      allWpMenu {
        edges {
          node {
            slug
            menuItems {
              nodes {
                id
                label
                url
                title
                target
              }
            }
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
        
        if (data.allWpMenu) {
          const menuItems = data.allWpMenu.edges[0].node.menuItems.nodes
          const wordPressUrl = data.wp.generalSettings.url
// console.log(menuItems)
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