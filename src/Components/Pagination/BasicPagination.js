import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserdata } from "../../redux/actions";

export default function BasicPagination(props) {
  const [page, setPage] = React.useState(1);
  const { page_list } = useSelector((state) => state.reducer);
  console.log(page_list);
  const dispatch = useDispatch();
  const handleChange = (event, value) => {
    dispatch(fetchUserdata(value, page_list));
    console.log(value);
    // setPage(value);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={props.pageCount}
        color="primary"
        onChange={handleChange}
      />
    </Stack>
  );
}
