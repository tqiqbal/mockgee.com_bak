<template>
  <section class="section">
    <div class="container">
      <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true"></b-loading>
      <div class="columns is-mobile is-centered">
        <div class="column is-half">
          <div class="form">
            <b-field label="Name">
              <b-input v-model="name"></b-input>
            </b-field>

            <b-field label="Email">
              <b-input type="email" v-model="email" maxlength="30"></b-input>
            </b-field>

            <b-field label="Contact type">
              <b-select placeholder="Select a name">
                <option v-for="option in data" :value="option.id" :key="option.id">{{ option }}</option>
              </b-select>
            </b-field>

            <b-field label="Message">
              <b-input type="textarea" v-model="message"></b-input>
            </b-field>

            <div class="field">
               <b-checkbox v-model="tac">
                 I agree to the <a href="#">terms and conditions</a>
               </b-checkbox>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-primary" @click="submit">Submit</button>
              </div>
              <div class="control">
                <button class="button is-link is-light" @click="cancel">Cancel</button>
              </div>
            </div>


            <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors" :key="error.id">{{ error }}</li>
              </ul>
            </p>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      data: ["Technical", "Business"],
      apiURL:
        "https://2h5umgq0c6.execute-api.eu-west-1.amazonaws.com/notifyByEmail",
      isLoading: false,
      errors: [],
      tac: false
    };
  },
  methods: {
    async submit() {

      // reset errors 
      this.errors = []

      let isValid = this.checkForm()
      if (!isValid) return false

      this.isLoading = true;

      const messageBody = `
       Name: ${this.name}
       Email: ${this.email}
       Message: ${this.message}
       `
      try {
        const result = await axios.post(this.apiURL, {
          message: messageBody,
          subject: "Mockgee Contact"
        });
        if (result.data == "success") {
          this.$router.push("Done");
        } else {
          this.errors.push(result.data)
        }
        this.isLoading = false
      } catch (error) {
        this.errors.push(error.message)
        this.isLoading = false
      }
    },
    cancel() {
      this.$router.push('/')
    },
    checkForm() {
      if (this.name && this.email && this.message && this.tac) {
        return true;
      }
      if (!this.name) {
        this.errors.push('Name required.')
      }
      if (!this.email) {
        this.errors.push('Email required.')
      }
      if (!this.message) {
        this.errors.push('Message required.')
      }
      if (!this.tac) {
        this.errors.push("Please agree to terms and condition.")
      }
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  color: red;
}
</style>