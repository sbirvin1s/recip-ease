/*========== EXTERNAL MODULES ==========*/
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/
import { Page, Column, Row } from '../../dist/stylesheets';

/** TODO: #31 User Profile - Client Implementation
  - [ ] Create User Profile Interface that allows:
    - [ ] Making a new profile
    - [ ] Adding Weight
    - [ ] Adding Fitness Level
    - [ ] Adding weight loss goals
    - [ ] Reporting shows total caloric daily goals
*/

/*========== EXPORTS ==========*/
export default function Profile() {

  /*----- STATE HOOKS -----*/
  /*----- LIFESTYLE METHODS -----*/
  /*----- EVENT HANDLERS -----*/

  /*----- RENDER METHODS -----*/


  /*----- RENDERER -----*/
  return (
    <>
      <Page>
        This is the Profile Page
        <Column>
          Placeholders:
          Weight:
          Fitness Level
          Weight Loss Goals
          Total Daily Caloric Goal
        </Column>
        <Column>
          Modifiers:
          Weight
          Fitness Level
          Weight Loss Goals
        </Column>
      </Page>
    </>
  )
}


/*========== STYLES ==========*/