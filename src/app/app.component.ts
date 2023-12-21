import { Component } from '@angular/core';

interface Player {
  value: 'X' | 'O';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Tic-Tac-Toe';
  // Represent the Tic-Tac-Toe grid
  board: (Player | null)[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  currentPlayer: Player = { value: 'X' };
  winner: Player | null = null;

  makeMove(row: number, col: number): void {
    if (!this.board[row][col] && !this.winner) {
      this.board[row][col] = this.currentPlayer;

      if (this.checkForWinner(row, col)) {
        this.winner = this.currentPlayer;
        alert('And the Winner is' + this.winner.value);
        this.checkForWinner(row, col);
      } else {
        this.currentPlayer =
          this.currentPlayer.value === 'X' ? { value: 'O' } : { value: 'X' };
      }
    }
  }

  checkForWinner(row: number, col: number): boolean {
    if (
      this.board[row][0]?.value === this.currentPlayer.value &&
      this.board[row][1]?.value === this.currentPlayer.value &&
      this.board[row][2]?.value === this.currentPlayer.value
    ) {
      return true;
    }

    if (
      this.board[0][col]?.value === this.currentPlayer.value &&
      this.board[1][col]?.value === this.currentPlayer.value &&
      this.board[2][col]?.value === this.currentPlayer.value
    ) {
      return true;
    }

    if (
      (row === col &&
        this.board[0][0]?.value === this.currentPlayer.value &&
        this.board[1][1]?.value === this.currentPlayer.value &&
        this.board[2][2]?.value === this.currentPlayer.value) ||
      (row + col === 2 &&
        this.board[0][2]?.value === this.currentPlayer.value &&
        this.board[1][1]?.value === this.currentPlayer.value &&
        this.board[2][0]?.value === this.currentPlayer.value)
    ) {
      return true;
    }

    return false;
  }
}
