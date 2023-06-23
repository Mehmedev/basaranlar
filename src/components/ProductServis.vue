<template>
  <div class="product-service">
    <form>
      <div class="container-fluid" style="background: #fff; margin-top: 20px; width: 97%">
        <div
          class="row"
          style="
            border-bottom: 1px Solid #dedede;
            border-top: 1px Solid #dedede;
            padding: 20px 0px;
            margin-bottom: 20px !important;
            background-color: #f7f7f6 !important;
            font-weight: bold;
          "
        >
          <div class="col-3" style="text-align: center">Ürün / Hizmet</div>
          <div class="col-2" style="text-align: center">Depo</div>
          <div class="col-2" style="text-align: center">Birim</div>
          <div class="col-1">Miktar</div>
          <div class="col-1">Birim Fiyat</div>
          <div class="col-1">KDV</div>
          <div class="col-1">Toplam</div>
          <div class="col-1"></div>
        </div>

        <div class="urunHizmet">
          <tbody>
            <tr v-for="(row, index) in rows" :key="row.id">
              <!-- Burada NewDiv componentini kullandık -->
              <NevDiv
                :siraNo="row.siraNo"
                @removeNewDiv="removeNewDiv(row.siraNo, index)"
                :productData="row.productData"
                @updateProductData="updateProductData(index, $event)"
              />
            </tr>
          </tbody>
        </div>

        <div class="row" style="padding: 20px 0px">
          <div class="col">
            <button
              id="createProductService"
              v-on:click.prevent="createNewDiv"
              type="button"
              class="btn me-5 fw-bold border border-black p-2"
              style="background-color: #f7f7f6"
            >
              ÜRÜN / HİZMET
            </button>
          </div>
        </div>
      </div>

      <div
        class="col-md-12 col-lg-6 col-xxl-9"
        style="text-align: center; font-size: 15px; font-weight: bold; color: #ff0000"
      ></div>

      <div class="save-footer float-end">
        <button
          type="button"
          class="fixed-button btn btn-success p-1 fs-6 px-3 fw-bold m-3"
          @click="sendProduct"
        >
          <i class="fas fa-save" style="margin-right: 10px"></i>KAYDET
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import NevDiv from './NevDiv.vue' // Burada NewDiv componentini import ettik

// Data olarak tanımladığınız değişkenleri burada tanımlayın
let siraNo = 0
let rows = []

// Methods olarak tanımladığınız fonksiyonları burada tanımlayın
const sendProduct = () => {
  // Girilen veriler bir obje haline dönüştürülüyor
  const productData = rows.map((row) => row.productData) // Rows dizisindeki her satırın productData verisi alınıyor

  // Burada axios.post yerine fetch kullandık
  fetch('https://example.com/api/products', {
    method: 'POST',
    body: JSON.stringify(productData)
  })
    .then((response) => {
      alert('Ürün başarıyla kaydedildi.')
    })
    .catch((error) => {
      alert('Ürün kaydedilirken bir hata oluştu.')
    })
}
const removeNewDiv = (siraNo, index) => {
  // Splice yöntemi kullanılarak indexine göre satır siliniyor
  rows.splice(index, 1)
  // Diğer satırların sıra no'larını güncellemek için bir döngü oluşturuluyor
  for (let i = index; i < rows.length; i++) {
    rows[i].siraNo--
  }
}

// const createNewDiv = () => {
//   // Burada siraNo değerini rows.length olarak tanımladık
//   siraNo = rows.length;
//   // Yeni bir satır oluşturup sıra numarası ve unique bir ID ekleniyor
//   // Ayrıca boş bir productData objesi de ekleniyor
//   rows.push({
//     siraNo: siraNo,
//     id: Date.now(),
//     productData: {},
//   });
// };

const createNewDiv = () => {
  // Burada siraNo değerini rows.length olarak tanımladık
  siraNo = rows.length
  // Yeni bir satır oluşturup sıra numarası ve unique bir ID ekleniyor
  // Ayrıca varsayılan değerler içeren bir productData objesi de ekleniyor
  rows.push({
    siraNo: siraNo,
    id: Date.now(),
    productData: {
      ProductBarcode: '',
      ProductName: '',
      MeasureUnit: '',
      Currency: '',
      ProductUnitPrice: 0
    }
  })
}

const updateProductData = (index, data) => {
  // NewDiv bileşeninden gelen veri rows dizisindeki ilgili satırın productData verisine atanıyor
  rows[index].productData = data
}
</script>

<style scoped>
.product-service {
  border: 1px solid black;
  padding: 10px;

  width: 97%;
  margin: 0 auto;
}
</style>
