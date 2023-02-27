"use strict";

const container = document.querySelector(".container");

const details = document.querySelector(".form-details--input");
const date = document.querySelector(".form-date--input");
const amount = document.querySelector(".form-amount--input");
const btnSubmit = document.querySelector(".form-btn");

const table = document.querySelector(".table");
const tableData = document.querySelector(".table-data");

const tbody = document.querySelectorAll("tbody");

const noExpense = document.querySelector(".noexpense");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const tableRow = `
  <tbody>
    <tr class="table-data">
      <td>${details.value}</td>
      <td>${date.value}</td>
      <td>$${amount.value}</td>
      <td class="table-data--btn">
        <button class="btn btn-table">✖</button>
      </td>
    </tr>
  </tbody>
  `;

  if (details.value !== "" && date.value !== "" && amount.value !== "") {
    table.insertAdjacentHTML("beforeend", tableRow);
    if (container.hasChildNodes(noExpense)) noExpense.classList.add("hidden");
  } else {
    alert("Insert data in all the available fields please!");
  }

  details.value = "";
  date.value = "";
  amount.value = "";

  function deleteExpense(e) {
    if (e.target.innerHTML === "✖") e.target.parentNode.parentNode.remove();
  }
  table.addEventListener("click", deleteExpense);
});

noExpense.classList.remove("hidden");
