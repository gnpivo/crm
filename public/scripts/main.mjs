import { populateTable } from "./table.mjs";

const table = document.querySelector(".entity-table");

const columns = [
  {
    name: "ID",
    key: "id",
  },
  {
    name: "Company Name",
    key: "companyName",
  },
  {
    name: "Contact Name",
    key: "contactName",
  },
  {
    name: "Contact Title",
    key: "contactTitle",
  },
  {
    name: "Address",
    key: "address",
  },
  {
    name: "City",
    key: "city",
  },
  {
    name: "Region",
    key: "region",
  },
  {
    name: "Country",
    key: "country",
  },
  {
    name: "Email Address",
    key: "email",
  },
  {
    name: "Phone Number",
    key: "phone",
  },
]

fetch("/data/customers.json")
  .then((response) => response.json())
  .then(({ customers }) => {
    populateTable(table, columns, customers);
  })