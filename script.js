function knightMoves(start, end) {
  // Possible moves for a knight.
  const direction = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  // function to check if the position is inside the board.
  function isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  // Using BFS to find the shortest path.
  function bfs(start, end) {
    let queue = [[start]];

    // Keeping track of visited positions
    let visited = new Set();
    visited.add(start.toString());

    // loop through to keep search while positions available
    while (queue.length > 0) {
      let path = queue.shift();

      let [x, y] = path[path.length - 1];

      // Check if reahced the end position.
      if (x === end[0] && y === end[1]) {
        return path;
      }

      for (let [dx, dy] of direction) {
        let nx = x + dx;
        let ny = y + dy;

        if (isValid(nx, ny) && !visited.has([nx, ny].toString())) {
          visited.add([nx, ny].toString());
          queue.push([...path, [nx, ny]]);
        }
      }
    }
  }

  const resultPath = bfs(start, end);

  console.log(
    `You made it in ${resultPath.length - 1} moves! Here's your path`
  );
  resultPath.forEach((square) => {
    console.log(square);
  });

  return resultPath;
}

knightMoves([0, 0], [3, 3]); // Example output: [[0, 0], [2, 1], [3, 3]] or another valid path
knightMoves([3, 3], [0, 0]); // Example output: [[3, 3], [1, 2], [0, 0]] or another valid path
knightMoves([0, 0], [7, 7]); // Example output: one of the shortest paths
