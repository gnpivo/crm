export function populateTable(table, columns, entities) {
  table.tHead.rows[0].replaceChildren(...columns.map((column) => {
    const cell = document.createElement("th");
    cell.textContent = column.name;
    return cell;
  }));
  table.tBodies[0].replaceChildren(...entities.map((entity) => {
    const row = document.createElement("tr");
    row.replaceChildren(...columns.map((column) => {
      const cell = document.createElement("td");
      cell.textContent = entity[column.key];
      return cell;
    }));
    return row;
  }));
}