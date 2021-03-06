import * as React from "react"
import Game from '../src/game_template';
import {Board,InfoBoard} from '../src/ten/ten';


const Page = () => {
  return (
    <main>
      <title>Ultimate tic-tac-toe</title>
      <Game gameBoard={Board} gameInfoPanel={InfoBoard}/>
    </main>
  )
}

export default Page
