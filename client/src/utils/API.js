import axios from "axios";

export default {
  // Create a new user
  createUser: function (userData) {
    return axios.post("/api/users/signup", userData);
  },
  // Login the user
  loginUser: function (userData) {
    return axios.post("/api/users/login", userData);
  },
  // Determines if the user is logged in or not
  getUserStatus: function () {
    return axios.get(`/api/users/status`);
  },
  // Logout the user
  logout: function () {
    return axios.get(`/api/users/logout`);
  },
  // Gets all events
  getEvents: function () {
    return axios.get("/api/events");
  },
  // Gets the event with the given id
  getEvent: function (id) {
    return axios.get("/api/events/" + id);
  },
  // Gets all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/users" + id);
  },
  setCookie: function() {
    return axios.get("/api/users/cookie")
  }
};
