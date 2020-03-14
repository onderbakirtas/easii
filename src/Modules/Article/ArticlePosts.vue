<script>
export default {
  name: 'ArticlePosts',

  data() {
    return {
      tableData: [],
      loading: false
    }
  },

  created() {
    this.getPosts()
  },

  methods: {
    getPosts() {
      let self = this
      self.loading = true
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
          self.tableData = data
          self.loading = false
        })
        .catch(err => {
          console.log('error: ', err)
        })
    }
  }
}
</script>

<template>
  <div>
    <el-table
      :data="tableData"
      height="auto"
      width="100%"
      class="dtable"
      v-loading="loading"
    >
      <el-table-column prop="userId" label="User ID" width="180">
      </el-table-column>
      <el-table-column prop="title" label="Title" width="180">
      </el-table-column>
      <el-table-column prop="body" label="Body"> </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.dtable {
  width: 100%;
  height: 100% !important;
}
</style>
