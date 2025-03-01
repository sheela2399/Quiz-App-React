// Fetch UserTest
export const fetchUserTestRequest = () => ({
    type: "FETCH_USERTEST_REQUEST",
});

export const fetchUserTestSuccess = (payload) => ({
    type: "FETCH_USERTEST_SUCCESS",
    payload,
});

export const fetchUserTestFailure = () => ({
    type: "FETCH_USERTEST_FAILURE",
});

//   Add userTest
export const addUserTestRequest = (payload) => ({
    type: "ADD_USERTEST_REQUEST",
    payload,
});

export const addUserTestSuccess = (payload) => ({
    type: "ADD_USERTEST_SUCCESS",
    payload,
});

export const addUserTestFailure = () => ({
    type: "ADD_USERTEST_FAILURE",
});

//   update userTest
export const updateUserTestRequest = (payload) => ({
    type: "UPDATE_USERTEST_REQUEST",
    payload,
});

export const updateUserTestSuccess = (payload) => ({
    type: "UPDATE_USERTEST_SUCCESS",
    payload,
});

export const updateUserTestFailure = () => ({
    type: "UPDATE_USERTEST_FAILURE",
});