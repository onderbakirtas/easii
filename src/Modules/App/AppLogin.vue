<script>
export default {
  name: 'AppLogin',

  data() {
    return {
      username: '',
      password: '',
      loading: false,
      formSubmitted: false,

      formData: {
        username: ''
      },

      rules: {
        username: [
          {
            required: true,
            message: 'Username cannot be blank',
            trigger: 'blur'
          }
          /* {
            min: 3,
            max: 16,
            message: 'Username must be 3-16 letters long',
            trigger: 'blur'
          } */
        ],

        password: [
          {
            required: true,
            message: 'Password cannot be blank',
            trigger: 'blur'
          }
          /* {
            min: 3,
            max: 16,
            message: 'Password must be 3-16 letters long',
            trigger: 'blur'
          } */
        ]
      }
    }
  },

  methods: {
    onSubmit(formName) {
      let self = this
      self.loading = true
      self.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
          setTimeout(() => {
            self.loading = false
            localStorage.setItem('easiiUser', 'root')
            self.$router.push('/')
          }, 2000)
        } else {
          self.loading = false
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<template>
  <div class="app-login">
    <el-form
      class="login"
      :model="formData"
      ref="login"
      :rules="rules"
      v-loading="loading"
    >
      <h2 class="login-title">Easii</h2>
      <el-form-item prop="username">
        <el-input v-model="formData.username" placeholder="Username">
          <i slot="prefix" class="el-input__icon el-icon-user"></i
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="formData.password"
          placeholder="Password"
          type="password"
        >
          <i slot="prefix" class="el-input__icon el-icon-unlock"></i
        ></el-input>
      </el-form-item>
      <el-form-item class="login-buttons">
        <el-button type="primary" @click="onSubmit('login')">Login</el-button>
        <el-button>Clear</el-button>
      </el-form-item>
    </el-form>
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
    padding-bottom: 2rem;
  }

  &-buttons {
    padding-top: 1rem;
  }

  &-input {
    margin-top: 1rem;

    &.invalid {
      & .el-input__inner {
        border-color: #f56c6c;
      }
    }

    &:first-child {
      margin-top: 0;
    }

    &-errors {
      text-align: left;
      padding-top: 0.3rem;
      padding-left: 0.5rem;
      color: #f56c6c;
      font-size: 0.9rem;
    }

    &__icon {
      font-size: 1.2rem;
    }
  }

  &-submit {
    margin-top: 1rem;
  }
}
</style>
