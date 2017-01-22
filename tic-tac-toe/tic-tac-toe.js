/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/
function checkRow(array){
	var first = array[0]
	var result
	for (var i = 0; i < array.length; i++) {
		if(first !== array[i]){
			return false
		}
	}
	return first
}

function checkCol(board){
	var num = board[0][0]
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board.length; j++) {
			
			if(board[j][i] !== num){
				return false
			}
		}
	}
	return num
}


function checkDaiagoLTR (board){
	for (var i = 0; i < 1; i++) {
		if(board[i][0] === board[i+1][1] && board[i+1][1] === board[i+2][2]){
			return board[i[0]]
		}
	}
	return false
}


function checkDaiagoRTL(board){
	for (var i = 0; i < 1; i++) {
		if(board[i][2] === board[i+1][1] && board[i+1][1] === board[i+2][0]){
			return board[i][2]
		}
	}
	return false
}

function ticTacToe(board){
	var result;
	var num;
	for (var i = 0; i < board.length; i++) {
		if(checkRow(board[i]) !== false){
			return checkRow(board[i])
		}else if (checkCol(board) !== false){
			return checkCol(board)
		}else if(checkDaiagoLTR(board) !== false){
			return checkDaiagoLTR(board)
		}else if (checkDaiagoRTL(board) !== false ){
			return checkDaiagoRTL(board)
		}
	}
	return -1
	
};
