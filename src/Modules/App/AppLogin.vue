<script>
export default {
  name: 'AppLogin'
}
</script>

<template>
  <div class="app-login">
    <el-card class="app-login-form">
      <h2>Login Panel</h2>
      <el-form>
        <el-input
          placeholder="Pick a date"
          prefix-icon="el-icon-user"
          v-model="input1"
        >
        </el-input>
      </el-form>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.app-login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f6fc;

  &-form {
    width: 20rem;
  }
}
</style>
