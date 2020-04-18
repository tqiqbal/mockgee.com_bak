<template>
  <section class="section contact">
    <div class="container">
      <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true"></b-loading>
      <b-message v-if="success" type="is-info" aria-close-label="Close message">
            Your message has been successfully submitted to concern person. We will shortly get back to you.
      </b-message>
      <div class="columns is-mobile is-centered">
        <div class="column is-one-third-desktop">
          <div class="form">
            <b-field label="Name">
              <b-input v-model="name"></b-input>
            </b-field>

            <b-field label="Email">
              <b-input type="email" v-model="email" maxlength="30"></b-input>
            </b-field>

            <b-field label="Contact type">
              <b-select placeholder="Select a name" v-model="contactType">
                <option v-for="subject in subjects" :value="subject" :key="subject.id">{{ subject }}</option>
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
                <vue-recaptcha
                   @verify="onVerify"
                   @expired="onExpired"
                  :sitekey="sitekey">
                  <button class="button is-primary">Submit</button>
                 </vue-recaptcha>
                
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
import VueRecaptcha from 'vue-recaptcha';
export default {
  components: {
    VueRecaptcha
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      subjects: ["Technical", "Business"],
      contactType: "Business",
      apiURL:
        "https://2h5umgq0c6.execute-api.eu-west-1.amazonaws.com/notifyByEmail",
      isLoading: false,
      errors: [],
      tac: false,
      sitekey: "6LeOg-oUAAAAAJKrgoZyuaV4Yry_ccsMKAd-i9A3",
      rcURL: "https://pcr0h6j1ck.execute-api.ap-south-1.amazonaws.com/verifyReCaptcha",
      success: false
    };
  },
  methods: {
    async submit() {

      const messageBody = `
       Name: ${this.name}
       Email: ${this.email}
       Message Type: ${this.contactType}
       Message: ${this.message}
       `
      try {
        const result = await axios.post(this.apiURL, {
          message: messageBody,
          subject: "Mockgee Contact"
        });
        if (result.data == "success") {
          this.success = true
          // reset fields value
          this.name = ''
          this.email = ''
          this.message = ''
          this.tac = false
        } else {
          this.errors.push(result.data)
        }
      } catch (error) {
        this.errors.push(error.message)
      }
      this.isLoading = false
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
    },
    onVerify: function (response) {
      
      // reset errors 
      this.errors = []

      let isValid = this.checkForm()
      if (!isValid) {
        this.isLoading = false
        return false
      }
      this.isLoading = true
      axios.post(this.rcURL, { token: response})
      .then(result => {
        if (result.data.success) this.submit()
        else this.errors.push(result.data['error-codes'][0])
      })
      .catch(err => {
        this.errors.push(err.message)
        this.isLoading = false
      })
    },
    onExpired: function () {
      console.log('Expired')
    },
    resetRecaptcha () {
      this.$refs.recaptcha.reset() // Direct call reset method
    }
  }
};
</script>

<style lang="scss" scoped>
.contact {
  min-height: 70vh;
}
li {
  color: red;
}
</style>