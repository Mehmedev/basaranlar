<template>
  <div class="row m-0 p-0 mb-4">
    <div class="col-1">
      <input
        type="number"
        :value="siraNo"
        :id="'sira' + divCount"
        class="sira_no border-0 border-bottom p-3 fw-bold w-100"
        style="font-size: 12px"
      />
    </div>
    <div class="col-2">
      <select
        v-model="selectedOrder"
        class="form-select p-3 fw-bold w-100"
        aria-label="Default select example"
        style="font-size: 12px"
      >
        <option selected></option>
        <option v-for="order in orders" :key="order.ID" v-bind:value="order">
          {{ order.ProductBarcode }}
        </option>
      </select>
    </div>
    <div class="col-2">
      <select
        v-model="selectedOrder"
        class="form-select p-3 fw-bold w-100"
        aria-label="Default select example"
        style="font-size: 12px"
      >
        <option selected></option>
        <option v-for="order in orders" :key="order.ID" v-bind:value="order">
          {{ order.ProductName }}
        </option>
      </select>
    </div>
    <div class="col-1">
      <select
        v-model="selectedOrder"
        class="form-select p-3 fw-bold w-100"
        aria-label="Default select example "
        style="font-size: 12px"
      >
        <option selected></option>
        <option v-for="order in orders" :key="order.ID" v-bind:value="order">
          {{ order.MeasureUnit }}
        </option>
      </select>
    </div>
    <div class="col-1">
      <input
        type="text"
        :value="currency"
        class="border-0 border-bottom p-3 fw-bold w-100"
        style="font-size: 12px"
      />
    </div>

    <div class="col-1">
      <!-- Burada state.quantity.value değerini tanımladık ve v-model ile bağladık -->
      <input
        type="text"
        v-model.number.lazy="state.quantity.value"
        class="border-0 border-bottom mb-2 p-3 fw-bold w-100"
        style="font-size: 12px"
      />
    </div>

    <!-- Burada hesapla fonksiyonunu çağırdık -->
    <button @click.prevent="hesapla">Hesapla</button>

    <!-- Burada hesaplanan değerleri gösterdik -->
    <div class="col-1">
      <input
        type="text"
        :value=totalPrice
        name=""
        id=""
        class="border-0 border-bottom p-3 fw-bold w-100"
        style="font-size: 12px"
      />
    </div>

    <!-- Burada state.taxRate.value değerini tanımladık ve v-model ile bağladık -->
    <div class="col-1">
      <input
        type="text"
        v-model.number.lazy="state.taxRate.value"
        class="border-0 border-bottom p-3 fw-bold w-100"
        style="font-size: 12px"
      />
    </div>

    <div class="col-1">
      <input
        type="text"
        :value=taxAmount name=""
        id=""
        class="border-0 border-bottom p-3 fw-bold w-100"
        style="font-size: 12px"
      />
    </div>
    <div class="col-1">
      <input
        type="text"
        :value=totalAmount
        name=""
        id=""
        class="border-0 border-bottom p-3 fw-bold w-100"
        style="font-size: 12px"
      />
    </div>
    <div class="col-1">
      <button
        class="btn btn-danger p-1 w-100 mb-0 fw-bold mx-auto delete-button"
        @click.prevent="$emit('removeNewDiv', divCount)"
      >
        <i class="fas fa-trash-alt" style="margin-right: 10px"></i>SİL
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue"; // Burada reactive fonksiyonunu import ettik
import ordersData from "../data/data.js";

// Props'u tanımlamak için defineProps fonksiyonunu kullanın
const props = defineProps({
  name: "NewDiv",
  props: ["siraNo", "divCount", "rows"],
});

// Setup fonksiyonunun içinde tanımladığınız her şeyi buraya taşıyın
const selectedOrder = ref(null);
const selectedBarcode = ref("");
const selectedName = ref("");
const selectedMeasureUnit = ref("");
const ProductUnitPrice = ref(selectedOrder.value?.ProductUnitPrice || 0);

// Burada state adında bir reactive nesne tanımladık ve içinde quantity.value ve taxRate.value değerlerini tanımladık
const state = reactive({
  quantity: { value: 1 },
  taxRate: { value: 0 },
});

// Burada orders dizisini bir computed property olarak tanımladık
const orders = computed(() => {
  return ordersData;
});

// Burada currency değerini bir computed property olarak tanımladık
const currency = computed(() => {
  return selectedOrder.value?.Currency || "";
});

// Burada hesapla fonksiyonunu tanımladık
const hesapla = () => {
  // Burada totalPrice, taxAmount ve totalAmount değerlerini hesapladık
  const totalPrice =
    Number(state.quantity.value) *
    Number(selectedOrder.value?.ProductUnitPrice);
  const taxAmount = (totalPrice * state.taxRate.value) / 100;
  const totalAmount = Math.round((totalPrice + taxAmount) * 100) / 100;

  // Burada hesaplanan değerleri döndürdük
  return { totalPrice, taxAmount, totalAmount };
};

// Template içinde kullanmak istediğiniz her şeyi burada bırakın
</script>
<style lang="scss" scoped></style>