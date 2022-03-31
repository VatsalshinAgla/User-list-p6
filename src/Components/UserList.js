import React from "react";
import { useSelector } from "react-redux";
import CardHover from "./CardHover/CardHover";
import BasicPagination from "./Pagination/BasicPagination";
import UserTable from "./UserTable/UserTable";
function UserList() {
  const { total_pages, loading } = useSelector((state) => state.reducer);
  // console.log(pageCount);
  return (
    <>
      <div className="row m-0">
        <div className="col-8">
          <UserTable />
          <div className="d-flex justify-content-center">
            <BasicPagination pageCount={total_pages ? total_pages : 0} />
          </div>
        </div>
        <div className={`col ${loading ? "d-none" : ""}`}>
          <CardHover />
        </div>
      </div>
    </>
  );
}

export default UserList;
