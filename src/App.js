import Modal from './Modal';
import './App.css';
import Empty from './Empty';

function App() {
  // useEffect(createTable, []);
  return (
    <div className="App" onClick={handleClick}>
      <h1>3D Print Tracker</h1>
      <table id="tasks">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Filament Weight</th>
            <th>Status</th>
            <th>Quantity</th>
            <th>Cost</th>
            <th>Notes</th>
            <th></th>
          </tr>
        </tbody>
      </table>
      <Empty></Empty>
      <Modal></Modal>
      <button type="button" onClick={openModal}>Add Row</button>
    </div >
  );
}

function handleClick(e) {
  if (!e)
    e = window.event;
  if (e.target.value === "Delete")
    deleteRow(e.target.parentNode.parentNode.rowIndex);
  if (e.target.value === "CloseModal") {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  if (e.target.value === "Submit") {
    addRow();
    e.preventDefault();
    let form = document.getElementById("newRow");
    form.reset();
    let modal = document.getElementById("modal");
    modal.style.display = "none";
  }
}

function addRow() {
  let inputs = document.getElementById("modal").getElementsByTagName("input");
  let table = document.getElementById("tasks");
  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);
  for (let i = 0; i < inputs.length - 1; i++) {
    if (inputs[i].type === "radio" && !inputs[i].checked) {
      continue;
    }
    let cell = row.insertCell(-1);
    let text = document.createElement("p");
    text.innerHTML = inputs[i].value;
    cell.appendChild(text);
  }
  let delButton = row.insertCell(-1)
  let button = document.createElement("button");
  button.innerHTML = "Delete"
  button.value = "Delete"
  delButton.appendChild(button);
}

function deleteRow(row) {
  let table = document.getElementById('tasks');
  if (table.rows.length <= 2) {
    let empty = document.getElementById("empty");
    empty.style.display = "block"
  }
  table.deleteRow(row);
}

function openModal() {
  let empty = document.getElementById("empty");
  empty.style.display = "none";

  let modal = document.getElementById("modal");
  modal.style.display = "block";
}

export default App;