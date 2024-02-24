<!-- Explain: The issue you're encountering is due to the use of v-model 
  with a computed property that only has a getter but no setter -->

  <!-- Solution: 
  - add a setter to the computed property
  - add a updateMessage function in store -->
  
<template>
  <div>
    <input type="text" v-model="message" />
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "Q1",
  computed: {
    message: {
      // Getter
      get() {
        return this.$store.state.message;
      },
      // Setter
      set(value) {
        this.$store.commit('updateMessage', value);
      }
    }

  }
};
</script>
