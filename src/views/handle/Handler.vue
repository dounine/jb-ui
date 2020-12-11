<template>
  <div>
    <el-radio-group v-model="contractType">
      <el-radio-button label="quarter"></el-radio-button>
      <el-radio-button label="next_quarter"></el-radio-button>
      <el-radio-button label="this_week"></el-radio-button>
      <el-radio-button label="next_week"></el-radio-button>
    </el-radio-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      symbolInfo: {},
    };
  },
  methods: {
    contractType() {
      //return this.$route.path.split("/")[1] + "-" + this.$route.path.split("/")[2];
      return "quarter";
    },
    queryPositions() {
      this.$axios.get("/position/virtual/list").then((response) => {
        this.positions = response.data.data.map((item) => {
          return {
            ...item,
            icon: require(`../../assets/images/${item.name}.svg`),
          };
        });
      });
    },
  },
};
</script>
<style></style>
