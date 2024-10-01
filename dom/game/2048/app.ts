class Game2048 {
  grid: number[];
  size: number;

  constructor(size: number) {
    this.size = size;
    this.grid = Array(size * size).fill(0);
    this.startGame();
  }

  // Start the game by placing two random tiles on the grid
  startGame() {
    this.addRandomTile();
    this.addRandomTile();
    this.updateUI();
    window.addEventListener('keydown', this.handleKeyPress.bind(this));
  }

  // Add a random tile (either 2 or 4) in an empty spot
  addRandomTile() {
    const emptyTiles = this.grid.map((val, idx) => val === 0 ? idx : null).filter(val => val !== null);
    if (emptyTiles.length === 0) return;
    const randomTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    this.grid[randomTile!] = Math.random() < 0.9 ? 2 : 4;
  }

  // Update the UI by mapping the grid values to the HTML elements
  updateUI() {
    this.grid.forEach((value, idx) => {
      const tile = document.getElementById(`tile-${idx}`) as HTMLElement;
      tile.innerText = value === 0 ? '' : value.toString();
      tile.className = `tile text-center font-bold text-2xl p-4 rounded-lg ${this.getTileColor(value)}`;
    });
  }

  // Get the appropriate background color based on the tile value
  getTileColor(value: number): string {
    switch (value) {
      case 2: return 'bg-gray-200';
      case 4: return 'bg-yellow-200';
      case 8: return 'bg-yellow-300';
      case 16: return 'bg-yellow-400';
      case 32: return 'bg-orange-400';
      case 64: return 'bg-orange-500';
      case 128: return 'bg-red-400';
      case 256: return 'bg-red-500';
      case 512: return 'bg-red-600';
      case 1024: return 'bg-red-700';
      case 2048: return 'bg-green-500';
      default: return 'bg-gray-100';
    }
  }

  // Handle key press for moving tiles
  handleKeyPress(e: KeyboardEvent) {
    let moved = false;
    switch (e.key) {
      case 'ArrowUp':
        moved = this.moveUp();
        break;
      case 'ArrowDown':
        moved = this.moveDown();
        break;
      case 'ArrowLeft':
        moved = this.moveLeft();
        break;
      case 'ArrowRight':
        moved = this.moveRight();
        break;
    }
    if (moved) {
      this.addRandomTile();
      this.updateUI();
    }
  }

  // Move tiles left
  moveLeft(): boolean {
    let moved = false;
    for (let row = 0; row < this.size; row++) {
      const rowTiles = this.grid.slice(row * this.size, row * this.size + this.size);
      const mergedRow = this.mergeTiles(rowTiles);
      if (JSON.stringify(rowTiles) !== JSON.stringify(mergedRow)) {
        moved = true;
      }
      this.grid.splice(row * this.size, this.size, ...mergedRow);
    }
    return moved;
  }

  // Move tiles right
  moveRight(): boolean {
    let moved = false;
    for (let row = 0; row < this.size; row++) {
      const rowTiles = this.grid.slice(row * this.size, row * this.size + this.size).reverse();
      const mergedRow = this.mergeTiles(rowTiles).reverse();
      if (JSON.stringify(this.grid.slice(row * this.size, row * this.size + this.size)) !== JSON.stringify(mergedRow)) {
        moved = true;
      }
      this.grid.splice(row * this.size, this.size, ...mergedRow);
    }
    return moved;
  }

  // Move tiles up
  moveUp(): boolean {
    let moved = false;
    for (let col = 0; col < this.size; col++) {
      const colTiles = [];
      for (let row = 0; row < this.size; row++) {
        colTiles.push(this.grid[row * this.size + col]);
      }
      const mergedCol = this.mergeTiles(colTiles);
      if (JSON.stringify(colTiles) !== JSON.stringify(mergedCol)) {
        moved = true;
      }
      for (let row = 0; row < this.size; row++) {
        this.grid[row * this.size + col] = mergedCol[row];
      }
    }
    return moved;
  }

  // Move tiles down
  moveDown(): boolean {
    let moved = false;
    for (let col = 0; col < this.size; col++) {
      const colTiles = [];
      for (let row = 0; row < this.size; row++) {
        colTiles.push(this.grid[row * this.size + col]);
      }
      const mergedCol = this.mergeTiles(colTiles.reverse()).reverse();
      if (JSON.stringify(this.grid.map((_, idx) => this.grid[idx])) !== JSON.stringify(this.grid)) {
        moved = true;
      }
      for (let row = 0; row < this.size; row++) {
        this.grid[row * this.size + col] = mergedCol[row];
      }
    }
    return moved;
  }

  // Merge tiles logic: combine tiles of the same value
  mergeTiles(tiles: number[]): number[] {
    const nonZeroTiles = tiles.filter(val => val !== 0);
    const mergedTiles = [];
    let skipNext = false;

    for (let i = 0; i < nonZeroTiles.length; i++) {
      if (skipNext) {
        skipNext = false;
        continue;
      }
      if (nonZeroTiles[i] === nonZeroTiles[i + 1]) {
        mergedTiles.push(nonZeroTiles[i] * 2);
        skipNext = true;
      } else {
        mergedTiles.push(nonZeroTiles[i]);
      }
    }

    // Add remaining empty tiles
    while (mergedTiles.length < this.size) {
      mergedTiles.push(0);
    }

    return mergedTiles;
  }
}

// Initialize the game
const game = new Game2048(4);
