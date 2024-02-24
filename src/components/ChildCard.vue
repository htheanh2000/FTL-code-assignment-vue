<template>
  <center>
    <div v-if="visibility" class="Box">
      <button @click="$emit('hide')">Hide Me</button>
    </div>
  </center>
</template>

<script>
export default {
  name: "ChildCard",
  props: {
    visibility: {
      type: Boolean,
      require: true,
      default: false
    }
  }
};
</script>

<style scoped>
.Box {
  width: 50vw;
  height: 200px;
  border: 2px black solid;
}
</style>
