import * as React from "react"
import {Row,Container,Col} from 'react-bootstrap';
import { withPrefix } from "gatsby"

class GameInfoRow extends React.Component{
  render(){
    const imgStyle={
      width:"30vmin",
      height:"30vmin"
    }
    const right_align_style={


    }
    return (
    <Row>
    <Col md="auto">
    <div style={{borderRight:'1px solid black',textAlign:"center"}}>
    <img src={this.props.imagePath} style={imgStyle} />
    <p><a href={this.props.gameLink}>{this.props.gameName}</a></p>
</div>
    </Col>

    <Col >
    {this.props.introduction}
    </Col>
    </Row>);
  }

}

const ten_intro=<div>
<p>The ultimate-tic-tac-toe game board consists of 3x3 subboards; each subboard is a classical tic-tac-toe board consists of 3x3 grids.</p>
<p>You may only play in the subboard that corresponds to the last grid your opponent played.</p>
<p>When the a subboard is full or already owned by a player, you can choose freely.</p>
<p>When a player win a subboard, this subboard would be owned by this player. When a player owns 3 subboards in a row, column or diagonal, the player wins the game.
When all the subboards are owned and no one wins, the game ends with a draw. </p>
<p>Check <a href="https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe">here</a> for more information.</p>
</div>;

const c6_intro=<div>
<p>The connect-6 game board is a square board made up of 19×19 grid of lines, and the pieces are placed on intersections.</p>
<p>Black plays first, putting one black piece on the board. Afterwards, white and black play in turn, and each turn the player places two pieces on two different unoccupied positions.</p>
<p>When a player get six or more pieces in a row (horizontally, vertically, or diagonally), he wins. </p>
<p>Check <a href="https://en.wikipedia.org/wiki/Connect6">here</a> for more information.</p>
</div>;
// markup
const IndexPage = () => {
  return (
    <main>
      <title>Games</title>
      <Container>
      <hr />
      <GameInfoRow gameLink="ultimate-tic-tac-toe" gameName="ultimate-tic-tac-toe" imagePath={withPrefix("/ten.png")} introduction={ten_intro} />
      <hr />
      <GameInfoRow gameLink="connect6" gameName="connect_6" imagePath={withPrefix("/c6.png")} introduction={c6_intro} />
      <hr />
      </Container>
    </main>
  )
}

export default IndexPage
