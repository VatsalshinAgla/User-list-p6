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
export const fetchUserdata = (page) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`https://reqres.in/api/users?page=${page}`);
      const result = await res.json();
      dispatch(storeData(result));
    } catch (error) {
      console.log(error);
    }
  };
};
export const storeData = (data) => {
  return { type: "STORE_DATA", payload: { apiData: data } };
};
