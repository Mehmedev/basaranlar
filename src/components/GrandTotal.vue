<template>
  <div class="grand-total">
    <div class="col-md-12 col-lg-6 col-xxl-3">
      <table class="table float-right">
        <tbody>
          <tr>
            <td>Toplam İndirim</td>
            <td class="input-field">
              <input
                style="width: 300px"
                type="text"
                id="toplamindirim"
                name="toplam_indirim"
                value=""
                class="border-0 border-bottom mb-4"
              />
            </td>
          </tr>
          <tr>
            <td class="py-3">Ara Toplam</td>
            <td>
              <div class="aratoplam text-end py-3">0.00 ₺</div>
            </td>
          </tr>
          <tr>
            <td class="py-3">Satır İndirimi</td>
            <td>
              <div class="toplamsatirindirim text-end py-3">0.00 ₺</div>
            </td>
          </tr>
          <tr>
            <td class="py-3">KDV</td>
            <td>
              <div class="toplamkdv text-end py-3">0.00 ₺</div>
            </td>
          </tr>
          <tr>
            <td class="py-3">OTV</td>
            <td>
              <div class="toplamotv text-end py-3">0.00 ₺</div>
            </td>
          </tr>
          <tr>
            <td class="py-3">OIV</td>
            <td>
              <div class="toplamoiv text-end py-3">0.00 ₺</div>
            </td>
          </tr>
          <tr>
            <td class="py-3">Genel Toplam</td>
            <td>
              <div class="geneltoplam text-end py-3">0.00 ₺</div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="save-footer float-end">
        <button
          type="button"
          class="fixed-button btn btn-success p-1 fs-6 px-3 fw-bold m-3"
          @click="totalData()"
        >
          <i class="fas fa-save" style="margin-right: 10px"></i>KAYDET
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

// Props'u tanımlamak için defineProps fonksiyonunu kullanın
const props = defineProps({
  name: "GrandTotal",
  props: ["customer", "product"],
});

// Computed property'yi burada tanımlayın
const grandTotal = computed(() => {
  if (props.product && props.product.price && props.product.quantity) {
    return (
      "$" + parseInt(props.product.price) * parseInt(props.product.quantity)
    );
  } else {
    return null;
  }
});

// Methods'u tanımlamak için defineEmits fonksiyonunu kullanın
const emit = defineEmits(["totalData"]);

// Method'u burada tanımlayın
const totalData = () => {
  // KAYDET butonuna tıklandığında bu fonksiyon çalışıyor

  // Verilerin hepsi bir obje içine alınacak
  const total = {};

  console.log("Toplam İndirim:", total);
  alert("Veriler başarıyla gönderidi");

  // Burada axios ile POST işlemi yapılacak.
  /*
  axios.post("https://reqres.in/api/customers", data)
       .then(response => console.log("Veriler gönderildi:", response.data))
       .catch(error => console.error("Veriler gönderilirken hata oluştu:", error));
   */
};
</script>

<style lang="scss" scoped></style>
