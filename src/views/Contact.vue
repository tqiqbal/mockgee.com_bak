<template>
  <section class="section contact">
    <div class="container">
      <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true"></b-loading>
      <b-message v-if="success" type="is-info" aria-close-label="Close message">
            Your message has been successfully submitted to concern person. We will shortly get back to you.
      </b-message>
      <div class="columns">
        <div class="column is-half">
          <h1 class="is-size-2 has-text-grey-dark">Contact</h1>
          <p>Please fill out the quick form and we will be in touch with you
          lightening speed.</p>
          <br>
          <AppImage src="https://s3-eu-west-1.amazonaws.com/mockgee.io/images/public/mockgee_contact.png" width="400" height="200"/>
        </div>
        <div class="column">
          <div class="form">
            <b-field label="Name" label-position="on-border">
              <b-input v-model="name"></b-input>
            </b-field>

            <b-field label="Email" label-position="on-border">
              <b-input type="email" v-model="email"></b-input>
            </b-field>
            <b-field label="Subject" label-position="on-border">
              <b-input v-model="subject"></b-input>
            </b-field>

            <b-field label="Message" label-position="on-border">
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
import axios from 'axios'
import VueRecaptcha from 'vue-recaptcha'
import config from '../config'
import AppImage from '../components/images/AppImage'
export default {
  components: {
    VueRecaptcha, AppImage
  },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      isLoading: false,
      errors: [],
      tac: false,
      sitekey: config.reCaptcha.sitekey ,
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
        const result = await axios.post(config.apiURL, {
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
      if (this.name && this.email && this.message && this.subject && this.tac) {
        return true;
      }
      if (!this.name) {
        this.errors.push('Name required.')
      }
      if (!this.email) {
        this.errors.push('Email required.')
      }
      if (!this.subject) {
        this.errors.push('Subject required.')
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
      axios.post(config.reCaptcha.URL, { token: response})
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
.form {
  margin-top: 3%;
}
li {
  color: red;
}
</style>