import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { fetchUserdata } from "../../redux/actions";

export default function BasicPagination(props) {
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();
  const handleChange = (event, value) => {
    dispatch(fetchUserdata(value));
    console.log(value);
    setPage(value);
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
