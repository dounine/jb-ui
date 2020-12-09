<template>
  <el-container>
    <!-- <el-header>Header</el-header> -->
    <el-container>
      <el-aside>
        <el-menu
          :default-active="activeMenu"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="operator">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>

            <router-link to="/operator/virtual"
              ><el-menu-item index="operator-virtual"> virtual </el-menu-item>
            </router-link>

            <router-link to="/operator/hb">
              <el-menu-item index="operator-hb"> hb </el-menu-item></router-link
            >
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    startHacking() {
      this.$notify({
        title: "It works!",
        type: "success",
        message:
          "We've laid the ground work for you. It's time for you to build something epic!",
        duration: 5000,
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
html,
body,
.el-container {
  height: 100%;
  margin: 0px;
  padding: 0px;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  /* text-align: center; */
  /* line-height: 60px; */
}

.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  /* text-align: center; */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
}

body > .el-container {
  /* height: 100%; */
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  /* line-height: 260px; */
}

.el-container:nth-child(7) .el-aside {
  /* line-height: 320px; */
}
a {
  text-decoration: none;
  color: #303133;
}
.router-link-active {
  color: #9cf;
}
</style>
<script>
export default {
  computed: {
    activeMenu() {
      return (
        this.$route.path.split("/")[1] + "-" + this.$route.path.split("/")[2]
      );
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>