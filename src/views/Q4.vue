<!-- 
Changes made:

Data Structure: Changed firstname and lastname to an array named fields

Dynamic Fields: Implemented v-for in the template to render input fields dynamically based on the fields array.

Add Field: The addTextField method adds a new object to the fields array.

Submission Logic: The submit method formats the fields array into the required format

and then calls submitDataToAPI with the formatted data. 

-->



<template>
  <center>
    <div>
      <h1>Form</h1>
      <div v-for="(field, index) in fields" :key="index" class="TextField">
        <label :for="'firstname' + index">First Name </label>
        <input :id="'firstname' + index" type="text" v-model="field.firstname" />

        <div style="display: inline; margin-left: 15px"></div>

        <label :for="'lastname' + index">Last Name </label>
        <input :id="'lastname' + index" type="text" v-model="field.lastname" />
      </div>
      <button @click="addTextField">Add Field</button><br />
      <button @click="submit">Submit</button>
    </div>
  </center>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      fields: [{ firstname: '', lastname: '' }]
    };
  },
  methods: {
    addTextField() {
      this.fields.push({ firstname: '', lastname: '' });
    },
    submit() {
      const formattedData = this.fields.map(field => ({
        firstname: field.firstname,
        lastname: field.lastname
      }));
      this.submitDataToAPI(formattedData);
    },
    async submitDataToAPI(data) {
      console.log(data);
      // Call API...
      // ....
      // ....
      // ....
    }
  }
};
</script>

<style scoped>
.TextField {
  border: 2px black solid;
  width: 500px;
  height: auto;
  padding: 12px;
  margin-bottom: 12px;
}
</style>
