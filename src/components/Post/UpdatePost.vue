<template>
  <div>
    <!--面包屑-->
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>公告管理</el-breadcrumb-item>
        <el-breadcrumb-item>修改公告</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-input clearable v-model="queryInfo.query" @clear="getUserList" placeholder="请输入内容">
                <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
            </el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" @click="addDialogVisible = true">添加公告</el-button>
            </el-col>
        </el-row>
        <!--分页-->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryInfo.pagenum"
          :page-sizes="[1, 2, 5, 10]"
          :page-size="queryInfo.pagesize"
          :total="total"
          layout="total, sizes, prev, pager, next, jumper"
          >
        </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
}
</script>
<style lang='less' scoped></style>