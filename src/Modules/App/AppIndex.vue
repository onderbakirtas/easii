<script>
export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>

<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']" :router="true">
        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-message"></i>Navigator One</template
          >
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item :route="{ name: 'About' }" index="1-1"
              >About</el-menu-item
            >
            <el-menu-item index="1-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item :route="{ name: 'UserIndex' }" index="1-3"
              >User Index</el-menu-item
            >
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">Option4</template>
            <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"
            ><i class="el-icon-menu"></i>Navigator Two</template
          >
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item index="2-1">Option 1</el-menu-item>
            <el-menu-item index="2-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="2-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">Option 4</template>
            <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"
            ><i class="el-icon-setting"></i>Navigator Three</template
          >
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item index="3-1">Option 1</el-menu-item>
            <el-menu-item index="3-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="3-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">Option 4</template>
            <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <router-view name="panel" />
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
