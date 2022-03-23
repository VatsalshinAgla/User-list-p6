export const deleteUser = (id) => {
    return {type: 'DELETE_USER',payload: id}
}
export const addSelectedUser = (user) => {
    return {type: 'HOVER_USER',payload: user}
}
export const updateStatus = (user,status) => {
    return {type: 'UPDATE_STATUS',payload: {id: user.id, status: status}}
}
export const updateRole = (user,role) => {
    return {type: 'UPDATE_ROLE',payload: {id: user.id, role: role}}
}