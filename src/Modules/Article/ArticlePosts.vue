<script>
export default {
  name: 'ArticlePosts',

  data() {
    return {
      tableData: []
    }
  }
}
</script>

<template>
  <div>
    some table here
    <el-table :data="tableData" height="250" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180"> </el-table-column>
      <el-table-column prop="name" label="Name" width="180"> </el-table-column>
      <el-table-column prop="address" label="Address"> </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped></style>
