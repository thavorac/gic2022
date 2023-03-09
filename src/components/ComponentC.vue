<template>
  <div id="component-c">
    <span>Component C</span>
    <div style="margin-top: 20px">X: {{ x }}</div>

    <button @click="$emit('increasedX')">Increase X</button>
  </div>
</template>

<script>
export default {
  name: "ComponentC",
  props: ["x"],
};
</script>
<style>
#component-c {
  border: 1px solid black;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}
</style>
