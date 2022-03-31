import { toast } from "react-toastify";

export const deleteUser = (id) => {
  return { type: "DELETE_USER", payload: id };
};
export const addSelectedUser = (user) => {
  return { type: "HOVER_USER", payload: user };
};
export const updateStatus = (user, status) => {
  return { type: "UPDATE_STATUS", payload: { id: user.id, status: status } };
};
export const updateRole = (user, role) => {
  return { type: "UPDATE_ROLE", payload: { id: user.id, role: role } };
};
// export const updatePageData = (data) => {
//   return { type: "PAGE_LIST_DATA", payload: data };
// };
export const fetchUserdata = (pageNum, pageData) => {
  return async (dispatch) => {
    try {
      console.log("page data", pageData, "page num", pageNum);
      if (pageData && pageData[pageNum - 1]) {
        dispatch(storeData(pageData[pageNum - 1]));
      } else {
        dispatch(loading(true));
        const res = await fetch(`https://reqres.in/api/users?page=${pageNum}`);
        const result = await res.json();
        dispatch(storeData(result));
        dispatch(saveDataInArray(result));
        // dispatch(updatePageData(result.data));
        toast.success(`page ${pageNum} loaded successfully.`, {
          autoClose: 2000,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(loading(false));
    }
  };
};
export const storeData = (data) => {
  return { type: "STORE_DATA", payload: { apiData: data } };
};
export const saveDataInArray = (data) => {
  return {
    type: "SAVE_DATA_IN_ARRAY",
    payload: { apiData: data },
  };
};
export const loading = (flag) => {
  return { type: "LOADING", payload: flag };
};
