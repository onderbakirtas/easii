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
      ]
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
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(data => {
            self.posts = data
            self.loading = false
          })
          .catch(err => {
            console.log('error: ', err)
          })
      }, 2000)
    },

    editItem(item) {
      console.log('editing: ', item)
    },

    deleteItem(item) {
      console.log('deleting: ', item)
    }
  }
}
</script>

<template>
  <DataTable
    :rows="posts"
    :columns="columns"
    :operations="operations"
    @on-edit="editItem"
    @on-delete="deleteItem"
    v-loading="loading"
  />
</template>

<style></style>
