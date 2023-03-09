<template>
  <div id="component-b">
    <span>Component B</span>
    <div style="margin-top: 20px">X: {{ x }}</div>

    <ComponentC @increasedX="$emit('increasedX')" :x="x"></ComponentC>
  </div>
</template>

<script>
import ComponentC from "./ComponentC.vue";
export default {
  name: "ComponentB",
  props: ["x"],
  components: {
    ComponentC,
  },
};
</script>
<style>
#component-b {
  border: 1px solid black;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
}
</style>
