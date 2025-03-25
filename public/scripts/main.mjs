import { populateTable } from "./table.mjs";

const table = document.querySelector(".entity-table");

const columns = [
  {
    name: "Company Name",
    key: "companyName",
  },
  {
    name: "Contact Name",
    key: "contactName",
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
    for (const customer of customers) {
      customer.email = `${customer.contactName.toLowerCase().replaceAll(" ", ".")}@example.com`;
    }
    populateTable(table, columns, customers);
  })