<template>
  <div>
    <!--面包屑-->
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>公告管理</el-breadcrumb-item>
        <el-breadcrumb-item>删除公告</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-input clearable v-model="queryInfo.query" @clear="getUserList" placeholder="请输入内容">
                <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
            </el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
            </el-col>
        </el-row>
        <!--用户表格区域-->
        <el-table :data="userlist" border stripe>
            <el-table-column type="index"></el-table-column>
            <el-table-column label="cccccccccc" prop="username"></el-table-column>
            <el-table-column label="邮箱" prop="email"></el-table-column>
            <el-table-column label="电话" prop="mobile"></el-table-column>
            <el-table-column label="角色" prop="role_name"></el-table-column>
            <el-table-column label="状态" prop="mg_state">
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.mg_state">
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="185px">
                <template slot-scope="scope">
                    <!--修改按钮-->
                    <el-button size="mini" type="primary" icon="el-icon-edit" v-model="scope.row.mg_state"></el-button>
                    <!--删除按钮-->
                    <el-button size="mini" type="danger" icon="el-icon-delete"></el-button>
                    <!--分配角色按钮-->
                    <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
                      <el-button size="mini" type="warning" icon="el-icon-setting"></el-button>
                    </el-tooltip>
                </template>
            </el-table-column>
        </el-table>

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
    <!--添加用户-->
    <el-dialog
      title="添加用户"
      :visible.sync="addDialogVisible"
      width="35%">
      <!--主题内容-->
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
        <el-form-item label="账号" prop="username">
          <el-input v-model="addForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="addForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <!--底部区域-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
}

</script>
<style lang='less' scoped>


</style>