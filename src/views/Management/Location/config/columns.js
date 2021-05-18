import React from "react";
import { Link } from "react-router-dom";

const columns = [
  {
    name: "Building Name",
    sortable: true,
    selector: "buildingName",
    cell: (row) => (
      <div data-tag="allowRowEvents">
        <Link
          to={{
            pathname: `locations/edit/${row._id}`,
          }}
        >
          {row.district}
        </Link>
      </div>
    ),
  },
  {
    name: "District",
    selector: "district",
    sortable: true,
  },
  {
    name: "Address",
    selector: "address",
    sortable: true,
  },
  {
    name: "Phone",
    selector: "phone",
    sortable: true,
  },
  {
    name: "Description",
    selector: "description",
    sortable: true,
  },
];

export default columns;
