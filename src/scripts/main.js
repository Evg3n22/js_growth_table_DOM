'use strict';

// write code here
const container = document.querySelector('.container');
const tbody = document.querySelector('tbody');
const btns = document.querySelectorAll('.button');

container.addEventListener('click', (e) => {
  const currColumns = Array.from(
    tbody.querySelectorAll('tr:nth-child(1) td'),
  ).length;

  // Add rows
  if (e.target === btns[0]) {
    const tr = document.createElement('tr');

    for (let i = 0; i < currColumns; i++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  // Remove rows
  if (e.target === btns[1]) {
    const tr = tbody.querySelector('tr:last-child');

    tbody.removeChild(tr);
  }

  // Add columns
  if (e.target === btns[2]) {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.forEach((r) => {
      const td = document.createElement('td');

      r.appendChild(td);
    });
  }

  // Remove columns
  if (e.target === btns[3]) {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.forEach((r) => {
      const td = r.querySelector('td:last-child');

      r.removeChild(td);
    });
  }
});
