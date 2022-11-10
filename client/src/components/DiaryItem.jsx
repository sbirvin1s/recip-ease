/*========== EXTERNAL MODULES ==========*/
import React, {useState} from 'react';
import styled from 'styled-components';


/*========== INTERNAL MODULES ==========*/
import { Row } from '../../dist/stylesheets';
import { Link } from 'react-router-dom';

/*========== EXPORTS ==========*/
export default function DiaryItem({ meal }) {

  /*----- STATE HOOKS -----*/
  // const [checked, setChecked] = useState(false);

  /*----- EVENT HANDLERS -----*/
  const handleCheck = () => {
    const isChecked = checked;
    setChecked(!isChecked);
  }

  const handleSelect = ({target: {name}}) => {
    setSelectedRecipes(prev => ({
      ...prev,
      recipe
    }))
  }

  /*----- RENDER METHODS -----*/
  const renderAddItem = () => {

  }

  const renderScanItem = () => {

  }

  /*----- RENDERER -----*/
  return (
    <Card>
      <h3>{meal}</h3>
      <p></p>
      <Link to={'../AddIngredient'}>Add Ingredient</Link>
    </Card>
  )
}


/*========== STYLES ==========*/

const Card = styled(Row)`
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  min-height: 15vh;
  width: 80vw;
  background: linear-gradient(90deg, rgba(197, 196, 196, 0.47) 0%, rgba(166, 165, 165, 0.47) 100.96%);
  box-shadow: 6px 6px 12px rgba(156, 156, 156, 0.6);
  border-radius: 15px;
`;