<template>
    <b-row class="justify-content-center">
        <b-col cols="12">
            <h1>Welcome</h1>
        </b-col>
        <b-col cols="12">
            <h3>Login</h3>
        </b-col>
        <b-col cols="12" sm="6">
            <b-form @submit.prevent="submitLogin">
                <b-form-input v-model="username" placeholder="Username" class="mb-3" />
                <b-form-input v-model="password" placeholder="Password" type="password" class="mb-3" />
                <b-button block type="submit" variant="outline-info">Login</b-button>
            </b-form>
        </b-col>
        <b-col cols="12" class="mt-4">
            <span>New Here?</span>
            <b-button variant="link">Create Account</b-button>
        </b-col>
    </b-row>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      submitLogin() {
        this.$router.push('/dashboard');
      }
    }
  }
</script>
