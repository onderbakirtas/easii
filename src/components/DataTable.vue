<script>
export default {
  name: 'DataTable',

  props: {
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => [],
      required: true
    },

    operations: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    hasOperations() {
      return this.operations.length > 0
    }
  },

  methods: {
    takeAction(type, index) {
      this.$emit(`on-${type}`, this.rows[index])
    }
  }
}
</script>

<template>
  <div>
    <el-table
      :data="rows"
      height="auto"
      width="100%"
      class="dtable"
      ref="dataTable"
    >
      <template v-for="col in columns">
        <el-table-column
          :key="`col${col.field}`"
          :fixed="col.fixed"
          :prop="col.field"
          :label="col.label"
          :min-width="col.minWidth"
          :width="col.width"
          v-if="!col.hidden"
        >
        </el-table-column>
      </template>
      <el-table-column
        prop="operations"
        label="İşlemler"
        width="100"
        v-if="hasOperations"
      >
        <template slot-scope="scope">
          <el-button
            @click="takeAction(op.action, scope.$index)"
            v-for="op in operations"
            :key="`op${op.label}`"
            type="text"
            size="small"
            >{{ op.label }}</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.dtable {
  /* width: 100%; */
  height: 100% !important;
}
</style>
