<script>
import DataTable from '../../components/DataTable'

export default {
  name: 'ArticleCustom',

  components: {
    DataTable
  },

  data() {
    return {
      loading: false,
      posts: [],
      columns: [
        {
          field: 'userId',
          label: 'Kullanıcı ID',
          fixed: false,
          width: 100
        },
        {
          field: 'title',
          label: 'Başlık',
          fixed: false,
          minWidth: 200
        },
        {
          field: 'body',
          label: 'Metin',
          fixed: false,
          minWidth: 300
        }
      ],
      operations: [
        {
          label: 'Düzenle',
          icon: 'el-icon-edit',
          action: 'edit'
        },
        {
          label: 'Sil',
          icon: 'el-icon-delete',
          action: 'delete'
        }
      ],
      currentPage: 1,
      pageSize: 10,
      totalNum: null
    }
  },

  created() {
    this.getPosts()
  },

  methods: {
    getPosts() {
      let self = this
      self.loading = true
      setTimeout(() => {
        fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${this.currentPage}&_limit=${this.pageSize}`
        )
          .then(res => {
            this.totalNum = parseInt(res.headers.get('x-total-count'))
            return res.json()
          })
          .then(data => {
            self.posts = data
            self.loading = false
          })
          .catch(err => {
            console.log('error: ', err)
          })
      }, 500)
    },

    editItem(item) {
      console.log('editing: ', item)
    },

    deleteItem(item) {
      console.log('deleting: ', item)
    },

    sizeChange() {},

    currentChange(val) {
      this.currentPage = val
      this.getPosts()
    }
  }
}
</script>

<template>
  <div class="articles-custom">
    <DataTable
      class="articles-table"
      :rows="posts"
      :columns="columns"
      :operations="operations"
      @on-edit="editItem"
      @on-delete="deleteItem"
      v-loading="loading"
    />
    <el-pagination
      background
      layout="prev, pager, next"
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page="currentPage"
      :total="totalNum"
      :page-size="pageSize"
      :page-sizes="[10, 20, 50, 'all']"
    >
    </el-pagination>
  </div>
</template>

<style lang="scss">
.articles {
  &-table {
    height: 500px;
  }
}
</style>
