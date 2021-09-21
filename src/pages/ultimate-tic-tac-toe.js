import * as React from "react"
import Game from '../static/game_template';
import {Board,InfoBoard} from '../static/ten/ten';

import {Button,ListGroup,Row,Container,Col} from 'react-bootstrap';



const Page = () => {
  return (
    <main>
      <title>Ultimate tic-tac-toe</title>
      <Game gameBoard={Board} gameInfoPanel={InfoBoard}/>
    </main>
  )
}

export default Page
