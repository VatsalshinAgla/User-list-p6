var initialState = {
  loading: true,
  selectedUser: null,
  users: [
    {
      id: 1,
      first_name: "Peaky1",
      last_name: "Blinder1",
      email: "john1@example.com",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      status: "Active",
      role: "Owner",
    },
    {
      id: 2,
      first_name: "Peaky2",
      last_name: "Blinder2",
      email: "john2@example.com",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      status: "Inactive",
      role: "Read",
    },

    {
      id: 3,
      first_name: "Peaky22",
      last_name: "Blinder22",
      email: "john22@example.com",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      status: "Inactive",
      role: "Read",
    },

    {
      id: 4,
      first_name: "Peaky34",
      last_name: "Blinde34r",
      email: "john34@example.com",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      status: "Inactive",
      role: "Read",
    },

    {
      id: 5,
      first_name: "Peaky45",
      last_name: "Blinder545",
      email: "john343@example.com",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      status: "Inactive",
      role: "Read",
    },

    {
      id: 6,
      first_name: "Peak34y",
      last_name: "Blinder34",
      email: "john35@example.com",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      status: "Inactive",
      role: "Read",
    },
  ],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let selectUser = state.selectedUser;
      if (selectUser && selectUser.id === action.payload) {
        selectUser = null;
      }
      let userList = [...state.users];
      userList = userList.filter((user) => {
        return !(user.id === action.payload);
      });
      return { ...state, users: userList, selectedUser: selectUser };

    case "HOVER_USER":
      return { ...state, selectedUser: action.payload };
    case "UPDATE_ROLE":
      let userlist = [...state.users];
      userlist.forEach((user, index) => {
        if (user.id === action.payload.id) {
          userlist[index].role = action.payload.role;
        }
      });
      return { ...state, users: userlist };

    case "UPDATE_STATUS":
      let selectedUser = state.selectedUser;
      if (selectedUser && selectedUser.id === action.payload.id) {
        selectedUser.status = action.payload.status;
      }
      let usersList = [...state.users];
      usersList.forEach((user, index) => {
        if (user.id === action.payload.id) {
          usersList[index].status = action.payload.status;
        }
      });
      return { ...state, users: usersList, selectedUser: selectedUser };

    case "STORE_DATA":
      let users_data = action.payload.apiData.data;
      let usersArr = users_data.map((user) => {
        return {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          avatar: user.avatar,
          status: "Inactive",
          role: "Read",
        };
      });
      return { ...state, users: usersArr };

    default:
      return state;
  }
};
export default reducer;
