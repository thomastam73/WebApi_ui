import React from "react";
import { Link } from "react-router-dom";

const columns = [
  {
    name: "Name",
    sortable: true,
    selector: "name",
    cell: (row) => (
      <div data-tag="allowRowEvents">
        <Link
          to={{
            pathname: `listeningaids/edit/${row._id}`,
          }}
        >
          {row.name}
        </Link>
      </div>
    ),
  },
  {
    name: "Brand",
    selector: "brand",
    sortable: true,
  },
  {
    name: "price",
    selector: "price",
    sortable: true,
  },
  {
    name: "Mark",
    selector: "mark",
    sortable: true,
  },
  {
    name: "Description",
    selector: "description",
    sortable: true,
  },
  {
    name: "Type",
    selector: "type",
    sortable: true,
  },
];

export default columns;
