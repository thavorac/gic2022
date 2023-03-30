<template>
  <div>Users</div>
  <!-- TODO: Update user list -->
  <div v-if="users && users.length > 0">
    <UserListItem v-for="user in users" :user="user"></UserListItem>
  </div>
</template>

<script>
import axios from "axios";
import UserListItem from "./components/UserListItem.vue";
export default {
  data() {
    return {
      // now we don't have
      users: [],
    };
  },
  components: {
    UserListItem,
  },
  beforeCreate() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // handle success
        this.users = response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  },
};
</script>
