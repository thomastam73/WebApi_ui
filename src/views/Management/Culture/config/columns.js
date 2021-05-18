import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const columns = [
  {
    name: "Name",
    sortable: true,
    selector: "name",
    cell: (row) => (
      <div data-tag="allowRowEvents">
        <Link
          to={{
            pathname: `cultures/edit/${row._id}`,
          }}
        >
          {row.name}
        </Link>
      </div>
    ),
  },
  {
    name: "Country Source",
    selector: "countrySource",
    sortable: true,
  },
  {
    name: "Report Date",
    selector: "reportDate",
    sortable: true,
    cell: (row) => (
      <div data-tag="allowRowEvents">
        {dayjs(row.reportDate).format("YYYY-MM-DD")}
      </div>
    ),
  },
];

export default columns;
