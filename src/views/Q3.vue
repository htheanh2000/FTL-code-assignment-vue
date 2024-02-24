<!-- Explain: Props should be considered immutable from the child component's perspective -->
<!-- Solution: emitting an event from the child. -->

<template>
  <div>
    <button @click="child_card_visibility = true">Show Card</button>
    <ChildCard :visibility="child_card_visibility" @hide="child_card_visibility = false" />
  </div>
</template>

<script>
import ChildCard from "@/components/ChildCard";

export default {
  name: "Parent",
  data() {
    return {
      child_card_visibility: false
    };
  },
  components: { ChildCard }
};
</script>
