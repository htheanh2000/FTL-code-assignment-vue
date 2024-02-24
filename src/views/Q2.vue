<!-- Vue updates the DOM asynchronously, 
so at the time of the console.log statement execution, 
the DOM has not yet been updated to reflect the new state of visibility.
This means the .Box element might not be rendered in the DOM yet -->

<!-- Solution : use this.$nextTick to excute a callback -->
<template>
  <div>
    <div class="Box" v-if="visibility" ref="box">Can You Get My Width?</div>
  </div>
</template>

<script>
export default {
  name: "Q2",
  data() {
    return {
      visibility: false
    };
  },
  methods: {
    getBoxWidth() {
      this.visibility = true;

      this.$nextTick(() => { // Add nextTick here
        console.log(this.$refs.box.offsetWidth);
      });
    }
  },
  mounted() {
    this.getBoxWidth();
  }
};
</script>

<style scoped>
.Box {
  border: 1px black solid;
}
</style>
