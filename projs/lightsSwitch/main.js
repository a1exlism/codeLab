const $ = document;
$.addEventListener('DOMContentLoaded', () => {
  let grid = {};
  grid.counts = 0; //	if center, then 5 units
  grid.cols = 20;
  grid.rows = 20;
  grid.level = 8;
  let rows = $.querySelectorAll('.row');
  let rowLen = rows.length;
  let lightSwitch;
  let randomPos;
  for (let i = 0; i < rowLen; i++) {
    let cells = rows[i].querySelectorAll('.cell');
    let cellNum = cells.length;
    for (let j = 0; j < cellNum; j++) {
      cells[j].innerHTML = i * cellNum + (1 + j);
      cells[j].addEventListener('click', () => {
        lightSwitch(rows, i, j);
        if (grid.counts == 0) {
          grid.level += 4;
          console.log('WINNER, Next Level: ' + (grid.level / 4 - 1));
          randomPos(rows, lightSwitch);
        }
      });
    }
  }

  randomPos = (rows, callback) => {
    let i;
    let j;
    for (let k = 0; k < grid.level; ++k) {
      i = parseInt(Math.random() * 1000 % 20);
      j = parseInt(Math.random() * 1000 % 20);
      callback(rows, i, j);
    }
  };

  lightSwitch = (rows, i, j) => {
    let colorActive = (rows, i, j) => {
      let cell = rows[i].querySelectorAll('.cell')[j];
      cell.classList.toggle('active');
      if (cell.classList.contains('active')) {
        ++grid.counts;
      } else {
        --grid.counts;
      }
      // console.log(grid.counts);
    };
    //	siblings first (j)
    colorActive(rows, i, j);
    if (j != 0) {
      colorActive(rows, i, (j - 1));
    }
    if (j != 19) {
      colorActive(rows, i, (j + 1));
    }
    //	before & after
    if (i != 0) {
      colorActive(rows, (i - 1), j);
    }
    if (i != 19) {
      colorActive(rows, (i + 1), j);
    }
  };

  randomPos(rows, lightSwitch);
});
