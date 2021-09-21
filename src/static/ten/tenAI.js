const lines = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];
const gridToLines={
0:[0,3,6],
1:[0,4],
2:[0,5,7],
3:[1,3],
4:[1,4,6,7],
5:[1,5],
6:[2,3,7],
7:[2,4],
8:[2,5,6]
}

var b1=[' ',' ',' ',' ',' ',' ',' ',' ',' '];
var s=[];
for (var i=0;i<9;i++) {s.push(b1.slice());}

const initialState={
  "gridState":s,
  "nextPlayer":"o",
  "nextSubboard":null,
  "subboardState":[' ',' ',' ',' ',' ',' ',' ',' ',' '],  //' ' means can be choosed; 'o' or 'x' mean owned; 'f' means full
  "winner":null,
}

/*

score for each player:
the linescore of the board(or subboard) is the sum of the score of each line(horizonal, vertical, diagonal).
the linescore of a line: if this line is "impossible"(occupied by opponent), then 0
                      else, 10 if need 1 step to win and 1 if need 2 step to win

Then, the totalscore for a player is the linescore of each subboard + the linescore of the board * 50
Then, the gamescore is the score of player "o" - the score of player "x". i e, only the score for "o" is maintained


upon searching, maintain and uptate the linescore for each subboard to save time.


*/

class tenAI{
  constructor(gameState=initialState){
    this.gameState=gameState;
  }
  copyGameState(){
    var gs={};

    return gs;
  }
  checkWin(board){
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if ((board[a]==="o" || board[a]==="x")  && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return " ";
  }
  updateSubboardStatus(subboard){
    var winner=this.checkWin(this.gameState.gridState[subboard]);
    if (winner!==this.gameState.subboardState[subboard]){
    this.gameState.subboardState[subboard]=winner;
    return true;
    }
    return false;
  }

  collectNextMoves(){
    var moves=[];
    if(this.gameState.nextSubboard===null){
      for (let i=0;i<9;i+=1)
        if(this.gameState.subboardState[i]===" ")
          for (let j=0;j<9;j+=1)
             if(this.gameState.gridState[i][j]==" ") moves.push([i,j]);
           }
    else{
      for (let j=0;j<9;j+=1)
       if(this.gameState.gridState[this.gameState.nextSubboard][j]===" ") moves.push([this.gameState.nextSubboard,j]);
     }
    return moves;

  }

}


class MinimaxAI extends tenAI{
  constructor(gameState=initialState,maxDepth=6){
    super(gameState);
    this.maxDepth=maxDepth;
    this.gameState.nextSubboardHistory=[];
    this.subboardLineScore=[0,0,0,0,0,0,0,0,0];
    this.totalScore=0;
    this.boardLineScore=0;
    this.updateScore();
  }

  updateScore(){
    for (let i =0;i<9;i+=1){
      this.updateSubboardLineScore(i);
    }
    this.updateBoardLineScore();
  }

  calculateLineScore(line){
    line.sort();
    line=line.join("");
    const lineScore={
      "  o":1,
      " oo":10,
      "  x":-1,
      " xx":-10,
    }
    var s=lineScore[line];
    return s===undefined?0:s;
  }




  updateSubboardLineScore(subboard){
  var score=0;
      for (let lineID of lines){
        var line=this.gameState.gridState[subboard].filter((elem,ind)=>lineID.includes(ind));
        score+=this.calculateLineScore(line);
      }
      this.totalScore-=this.subboardLineScore[subboard];
      this.subboardLineScore[subboard]=score;
      this.totalScore+=score;
  }


  updateBoardLineScore(){
        var score=0;
        var winner=this.checkWin(this.gameState.subboardState);
        if (winner!==" "){
          this.boardLineScore=winner=="o"?10000:-10000;
          this.totalScore=this.boardLineScore*50;
          return
        }
        for (let lineID of lines){
          var line=this.gameState.subboardState.filter((elem,ind)=>lineID.includes(ind));
          score+=this.calculateLineScore(line);
        }
        this.totalScore-=this.boardLineScore*50;
        this.boardLineScore= score;
        this.totalScore+=score*50;

  }



  doMove(subboardID,gridID){
    this.gameState.gridState[subboardID][gridID]=this.gameState.nextPlayer;
    if (this.updateSubboardStatus(subboardID)) this.updateBoardLineScore();
    this.updateSubboardLineScore(subboardID);
    this.gameState.nextPlayer=this.gameState.nextPlayer==="o"?"x":"o";
    this.gameState.nextSubboardHistory.push(this.gameState.nextSubboard);
    this.gameState.nextSubboard=this.gameState.subboardState[gridID]===" "?gridID:null;
  }

  undoMove(subboardID,gridID){
    this.gameState.nextPlayer=this.gameState.nextPlayer==="o"?"x":"o";
    this.gameState.gridState[subboardID][gridID]=' ';
    if (this.updateSubboardStatus(subboardID)) this.updateBoardLineScore();
    this.updateSubboardLineScore(subboardID);
    this.gameState.nextSubboard=this.gameState.nextSubboardHistory.pop();
  }

  minimax(depth, alpha, beta, player){
    var moves=this.collectNextMoves();
    var score=0; var bestMove=null;
    if (moves.length === 0 || depth === this.maxDepth) {
		    score = player==="o"?this.totalScore:(-this.totalScore);
		      return {
			           score: score,
			           move: null
		             };
	   }
     for(let move of moves){

       this.doMove(move[0],move[1]);
       score=this.minimax(depth+1,alpha,beta,player).score;
       this.undoMove(move[0],move[1]);

       if(this.gameState.nextPlayer===player){
          if (alpha<score){
            alpha=score;
            bestMove=move;
          }
       }else{
         if (beta>score){
           beta=score;
           bestMove=move;
         }
       }

       if (alpha>=beta) break;
     }

     return {
             score: this.gameState.nextPlayer===player?alpha:beta,
             move: bestMove
             };

  }


  makeNextMove(){
    return this.minimax(0,-100000,100000,this.gameState.nextPlayer).move;
  }
}


class MCTreeAI extends tenAI{
  constructor(gameState=initialState,maxSearch=10000){
    super(gameState);
    this.maxSearch=maxSearch;
  }

}


export {MinimaxAI,MCTreeAI};
