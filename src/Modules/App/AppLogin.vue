<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'AppLogin',

  data() {
    return {
      username: '',
      password: '',
      loading: false,
      formSubmitted: false
    }
  },

  validations: {
    username: {
      required,
      minLength: minLength(4)
    },

    password: {
      required
    }
  },

  methods: {
    login() {
      this.formSubmitted = true
      console.log('logged in')
      this.$v.$touch()

      if (this.$v.$invalid) {
        console.log('invalid')
      } else {
        this.loading = true
        this.$axios
          .get('/users')
          .then(res => {
            console.log(res.data)
            this.loading = false
          })
          .catch(err => {
            this.$message.error({
              message: this.$responseMessage(1),
              duration: 10000,
              showClose: true
            })
            console.log(err)
            this.loading = false
          })
      }
    },

    setUsername(val) {
      this.username = val
    },

    setPassword(val) {
      this.password = val
    }
  }
}
</script>

<template>
  <div class="app-login">
    <form
      class="login"
      @submit.prevent="login"
      v-loading="loading"
      autocomplete="off"
    >
      <h2 class="login-title">Easii</h2>
      <el-input
        class="login-input"
        placeholder="Username"
        :value="username"
        @input="setUsername"
        autocomplete="off"
      >
        <i
          slot="prefix"
          class="login-input__icon el-input__icon el-icon-user"
        ></i>
      </el-input>
      <div class="login-input-errors" v-if="formSubmitted">
        <div class="error" v-if="!$v.username.required">Name is required</div>
      </div>
      <el-input
        class="login-input"
        placeholder="Password"
        type="password"
        :value="password"
        @input="setPassword"
        autocomplete="off"
      >
        <i
          slot="prefix"
          class="login-input__icon el-input__icon el-icon-unlock"
        ></i>
      </el-input>
      <div class="login-input-errors" v-if="formSubmitted">
        <div class="error" v-if="!$v.password.required">
          Password is required
        </div>
      </div>
      <el-button class="login-submit" type="primary" native-type="submit"
        >Login</el-button
      >
    </form>
  </div>
</template>

<style lang="scss" scoped>
.app-login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f7fa;
  height: 100%;

  &-form {
    width: 20rem;
  }
}

.login {
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 20rem;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;
  padding: 1rem 2rem 1.5rem;

  &-title {
    font-size: 1.3rem;
    padding-top: 1rem;
    padding-bottom: 3rem;
  }

  &-input {
    margin-bottom: 1rem;

    &__icon {
      font-size: 1.2rem;
    }
  }

  &-submit {
    margin-top: 1rem;
  }
}
</style>
