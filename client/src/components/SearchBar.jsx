/*========== EXTERNAL MODULES ==========*/
import React from 'react';

/*========== INTERNAL MODULES ==========*/
import { Input } from '../../dist/stylesheets';

/*========== EXPORTS ==========*/
export default function SearchBar({ children, ...props }) {

  /*----- STATE HOOKS -----*/

  /*----- LIFECYCLE METHODS -----*/

  /*----- EVENT HANDLERS -----*/

  /*----- RENDER METHODS -----*/

  /*----- RENDERER -----*/
  return (
    <form>
      <Input {...props}>{children}</Input>

    </form>
  )
}




/*========== STYLES ==========*/
