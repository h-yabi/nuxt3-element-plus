<template>
  <el-button @click="ElMessage('hello')">button</el-button>
  <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
  <LazyElButton type="warning">lazy button</LazyElButton>
  <p>test</p>
</template>

<style lang="scss">
$primary-color: #1aad90;

h2 {
  font-size: large;
  font-weight: bold;
}
p {
  color: $primary-color;
  box-shadow: $shadow-btn-basic;
  margin: $margin-default;
}
</style>
