import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

dayjs.locale("zh-hk");
const columns = [
  {
    name: "Name",
    sortable: true,
    selector: "name",
    cell: (row) => (
      <div data-tag="allowRowEvents">
        <Link
          to={{
            pathname: `signlanguages/edit/${row._id}`,
          }}
        >
          {row.name}
        </Link>
      </div>
    ),
  },
  {
    name: "Description",
    selector: "description",
    sortable: true,
  },
  {
    name: "Gesture",
    selector: "gesture",
    sortable: true,
  },
  {
    name: "District",
    selector: "district",
    sortable: true,
  },
];

export default columns;
