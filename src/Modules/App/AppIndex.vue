<script>
export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }
    return {
      tableData: Array(20).fill(item),
      avatarSrc:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  }
}
</script>

<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="300px">
      <el-header height="100">
        <div class="app-userbox">
          <el-avatar :size="56" :src="avatarSrc"> </el-avatar>
          <div class="app-userbox-info">
            <span class="app-userbox-info--name">Celil Durmuş</span>
            <span class="app-userbox-info--role">Süper Yönetici</span>
            <span class="app-userbox-info--org">Easii</span>
          </div>
        </div>
      </el-header>

      <el-menu :router="true" class="app-sidebar">
        <el-menu-item index="1"
          ><i class="el-icon-s-home"></i>Genel Bakış</el-menu-item
        >

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
          <template slot="title"><i class="el-icon-menu"></i>Articles</template>
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item :route="{ name: 'ArticlePosts' }" index="2-1"
              >Posts</el-menu-item
            >
            <el-menu-item :route="{ name: 'ArticleCustom' }" index="2-2"
              >Custom Table</el-menu-item
            >
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
      <el-footer class="app-sidebar-footer">
        Easii
      </el-footer>
    </el-aside>

    <el-container class="app-container">
      <router-view class="app-content"> </router-view>
    </el-container>
  </el-container>
</template>

<style lang="scss">
.app {
  &-userbox {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;

    &-info {
      display: flex;
      flex-direction: column;
      line-height: 1;
      margin-left: 0.5rem;

      &--name {
        font-size: 0.9rem;
        font-weight: 600;
        color: #606266;
      }

      &--role {
        margin-top: 0.2rem;
        font-size: 0.8rem;
        text-transform: uppercase;
        font-weight: 700;
        color: #909399;
      }

      &--org {
        margin-top: 0.2rem;
        font-size: 0.8rem;
        color: #606266;
      }
    }
  }
}
.el-header {
  line-height: 60px;
}

.el-aside {
  color: #333;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-right: solid 1px #e6e6e6;
}

.el-menu {
  border: none;
}

.app-sidebar {
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}

.app-sidebar-footer {
  font-family: 'Sen', sans-serif;
  font-size: 1.5rem;
  flex-basis: 4rem;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  color: #909399;
  letter-spacing: -0.1rem;
  cursor: default;

  &:hover {
    transition: 0.2s;
    color: #409eff;
  }
}

.app-container {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  background: #f5f7fa;
}

.app-content {
  width: 100%;
}
</style>
