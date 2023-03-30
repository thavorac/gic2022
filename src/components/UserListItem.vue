<template>
  <div>
    <h3>{{ user.name }}</h3>
    <span>{{ renderedAddress }}</span>
  </div>
</template>
<script>
export default {
  name: "UserListItem",
  props: ["user"],
  computed: {
    renderedAddress: function () {
      if (this.user) {
        const address =
          this.user.address.suite +
          ", " +
          this.user.address.street +
          ", " +
          this.user.address.city +
          ", " +
          this.user.address.zipcode;
        return address;
      } else {
        return "...";
      }
    },
  },
};
</script>
