import React from "react";
import { useSelector } from "react-redux";
import CardHover from "./CardHover/CardHover";
import BasicPagination from "./Pagination/BasicPagination";
import UserTable from "./UserTable/UserTable";
function UserList() {
  const pageCount = useSelector((state) => state.reducer.total_pages);
  console.log(pageCount);
  return (
    <>
      <div className="row m-0">
        <div className="col-8">
          <UserTable />
          <BasicPagination pageCount={pageCount} />
        </div>
        <div className="col">
          <CardHover />
        </div>
      </div>
    </>
  );
}

export default UserList;
