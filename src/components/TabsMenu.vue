<template>
  <el-tabs v-model="activeName" type="border-card" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="Müşteri Bilgileri" name="first"><CustemerInfo /></el-tab-pane>
    <el-tab-pane label="Müşteri Seç" name="Müşteri Seç"><SelectCustomer /></el-tab-pane>
    <el-tab-pane label="Ürün/Hizmet" name="Ürün/Hizmet"><ProductServis /></el-tab-pane>
    <el-tab-pane label="Toplam İndirim" name="Toplam İndirim"><GrandTotal /></el-tab-pane>
  </el-tabs>
</template>
<script setup>
import { ref } from 'vue'

import CustemerInfo from './CustomerInfo.vue'
import GrandTotal from './GrandTotal.vue'
import ProductServis from './ProductServis.vue'
import SelectCustomer from './SelectCustomer.vue'

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>
<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
