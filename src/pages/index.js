import * as React from "react"
import {Row,Container,Col} from 'react-bootstrap';

class GameInfoRow extends React.Component{

  render(){

    const imgStyle={
      width:"30vmin",
      height:"30vmin"
    }
    return (
    <Row>
    <Col>
    <img src={this.props.imagePath} style={imgStyle} />
    <p>{this.props.gameName}</p>
    </Col>
    <Col>
    {this.props.introduction}
    </Col>
    </Row>);
  }

}



// markup
const IndexPage = () => {
  return (
    <main>
      <title>Games</title>
      <Container>
      <GameInfoRow gameName="ultimate-tic-tac-toe" imagePath="/ten.png" introduction="asdgasfgasdf" />
      </Container>
    </main>
  )
}

export default IndexPage
