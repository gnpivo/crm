import { populateTable } from "./table.mjs";

const table = document.querySelector(".entity-table");

const columns = [
  {
    name: "Customer Name",
    key: "name",
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

const entities = [
  {
    name: "Howard Snyder",
    email: "howard.snyder@example.com",
    phone: "(503) 555-7555",
  },
  {
    name: "Yoshi Latimer",
    email: "yoshi.latimer@example.com",
    phone: "(503) 555-6874",
  },
  {
    name: "John Steel",
    email: "john.steel@example.com",
    phone: "(509) 555-7969",
  },
]

populateTable(table, columns, entities);