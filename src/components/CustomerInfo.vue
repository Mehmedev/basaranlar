<template>
  <div class="customer-info">
    <form class="g-3 mx-auto" id="myform" style="width: 97%">
      <div class="form-group m-2">
        <div class="col-3">
          <label for="inputText" class="col-3 col-form-label w-75"
            ><i class="fas fa-folder-open" style="color: #74829a; margin-right: 12px"></i
            >Başlık</label
          >
        </div>

        <div class="col-9">
          <input
            type="text"
            class="form-control border-0 border-bottom fw-bold"
            placeholder="Form Başlığı"
            id="formBaslik"
            name="formBaslik"
            v-model="formBaslik"
          />
        </div>
      </div>
      <div class="form-group m-2">
        <div class="col-3">
          <label for="selected" class="form-label col-3 w-75"
            ><i class="fas fa-handshake" style="color: #74829a; margin-right: 10px"></i>Tip</label
          >
        </div>

        <div class="col-9 d-inline-flex">
          <div class="m-2">
            <input type="radio" id="tip" name="tip" class="m-1" v-model.trim.lazy="tipValue" />
            <label for="product1" class="text-dark">Alış</label>
          </div>
          <div class="m-2">
            <input type="radio" id="tip" name="tip" class="m-1" v-model.trim.lazy="tipValue" />
            <label for="product2" class="text-dark">Satış</label>
          </div>
        </div>
      </div>

      <div class="form-group m-2">
        <div class="col-3">
          <label for="selected" class="form-label col-3 w-75"
            ><i class="fas fa-users" style="color: #74829a; margin-right: 10px"></i>Müşteri</label
          >
          <a class="btn btn-danger" @click="openModal"> Müşteri Seç </a>
        </div>
        <div class="col-9">
          <select
            ref="selected"
            class="form-select fw-bold"
            aria-label="Default select example"
            id="selected"
            name="selected"
            v-model.number="selectedValue"
          >
            <option selected>---Lütfen Seçiniz---</option>
            <!-- customers datası döngü ile option olarak geliyor -->
            <option
              v-for="(customer, index) in customers"
              :key="'customer' + index"
              :value="customer.id"
            >
              {{ customer.title }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-group m-2">
        <div class="col-3">
          <label for="MusteriBilgileri" class="form-label col-3 w-75"
            ><i class="fas fa-id-card" style="color: #74829a; margin-right: 10px"></i>Müşteri
            Bilgileri</label
          >
        </div>
        <div ref="musteriBilgileri" class="col-9" id="musteriBilgileri" v-show="selectedValue">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control border-0 border-bottom"
              id="musteriUnvani"
              placeholder="Unvan"
              name="unvan"
              v-model="unvan"
            />
            <label for="musteriUnvani">Unvan</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control border-0 border-bottom"
              id="vergiDairesi"
              name="vergiDairesi"
              placeholder="Vergi Dairesi"
              v-model="vergiDairesi"
            />
            <label for="vergiDairesi">Vergi Dairesi</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control border-0 border-bottom"
              id="vergiNo"
              placeholder="Vergi No"
              name="Vergi No"
              v-model.number="vergiNo"
            />
            <label for="vergiNo">Vergi No</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control border-0 border-bottom"
              id="musteriAdresi"
              name="musteriAdresi"
              placeholder="Adres"
              v-model="adres"
            />
            <label for="musteriAdresi">Adres</label>
          </div>
        </div>
      </div>
      <hr />

      <div class="form-group m-2">
        <div class="col-3">
          <label for="datepicker1" class="form-label col-3 w-75"
            ><i class="far fa-calendar-alt" style="color: #74829a; margin-right: 10px"></i>Düzenleme
            Tarihi</label
          >
        </div>

        <div class="col-9">
          <input
            type="date"
            class="form-control border-0 border-bottom"
            id="datepicker1"
            name="datepicker1"
            v-model="this.formattedDate"
          />
        </div>
      </div>
      <div class="form-group m-2">
        <div class="col-3">
          <label for="datepicker2" class="form-label col-3 w-75"
            ><i class="far fa-calendar-minus" style="color: #74829a; margin-right: 10px"></i>Vade
            Tarihi</label
          >
        </div>

        <div class="col-9">
          <input
            type="date"
            class="form-control border-0 border-bottom"
            id="datepicker2"
            name="datepicker2"
            v-model="this.formattedDate"
          />
        </div>
      </div>
      <div class="form-group m-2">
        <div class="col-3">
          <label for="datepicker3" class="form-label col-3 w-75"
            ><i class="far fa-calendar-check" style="color: #74829a; margin-right: 10px"></i>Fiili
            Sevk Tarihi</label
          >
        </div>

        <div class="col-9">
          <input
            type="date"
            class="form-control border-0 border-bottom"
            id="datepicker3"
            name="datepicker3"
            v-model="this.formattedDate"
          />
        </div>
      </div>
      <div class="form-group m-2">
        <div class="col-3">
          <label for="timepicker" class="form-label col-3 w-75"
            ><i class="fas fa-clock" style="color: #74829a; margin-right: 10px"></i>Düzenleme
            Saati</label
          >
        </div>

        <div class="col-9">
          <input
            type="time"
            class="form-control border-0 border-bottom"
            id="timepicker"
            name="timepicker"
            v-model="this.formattedTime"
          />
        </div>
      </div>

      <div class="form-group m-2">
        <div class="col-3">
          <label for="TeklifKosullari" class="form-label col-3 w-75"
            ><i class="fas fa-file-signature" style="color: #74829a; margin-right: 10px"></i>Teklif
            Koşulları</label
          >
        </div>

        <div class="form-floating col-9">
          <textarea
            class="border-0 border-bottom w-100 h-100"
            style="font-size: 14px"
            placeholder="Teklifin geçerli olduğu süre, ödeme şartları vb. bilgiler için bu alanı kullanabilirsiniz."
            id="TeklifKosullari"
            name="TeklifKosullari"
            v-model="teklifKosullari"
          ></textarea>
        </div>
      </div>
      <div class="save-footer float-end">
        <button
          type="button"
          class="fixed-button btn btn-success p-1 fs-6 px-3 fw-bold m-3"
          @click="sendData()"
        >
          <i class="fas fa-save" style="margin-right: 10px"></i>KAYDET
        </button>
        <button
          type="button"
          class="fixed-button btn btn-danger p-1 fs-6 px-3 fw-bold m-3"
          @click="clearData()"
        >
          <i class="fas fa-save" style="margin-right: 10px"></i>TEMİZLE
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import customers from "../data/customers.js"; // Customers data sını import ediyoruz
import SelectCustomer from "./SelectCustomer.vue";
// Modalın açık olup olmadığını kontrol eden bir değişken tanımlıyoruz
// Burayı data olarak tanımladık
// Use ref to make reactive variables
import { ref } from "vue";
const showModal = ref(true);
const formattedDate = new Date().toISOString().substring(0, 10);
const formattedTime =
  String(new Date().getHours()).padStart(2, "0") +
  ":" +
  String(new Date().getMinutes()).padStart(2, "0");

// Setup fonksiyonunun içinde tanımladığınız her şeyi buraya taşıyın
let selectedValue = ref(null);
let tipValue = ref(null);
let formBaslik = ref("");
let type = ref("");
let unvan = ref("");
let vergiDairesi = ref("");
let vergiNo = ref(null);
let adres = ref("");
let duzenlemeTarihi = ref(formattedDate);
let vadeTarihi = ref(formattedDate);
let sevkTarihi = ref(formattedDate);
let duzenlemeSaati = ref(formattedTime);
let teklifKosullari = ref("");

// Template içinde kullanmak istediğiniz her şeyi burada bırakın
const openModal = () => {
  showModal.value = !showModal.value;
  alert("tıklandı");
};
const sendData = () => {
  // KAYDET butonuna tıklandığında bu fonksiyon çalışıyor
  // Verilerin hepsi bir obje içine alındı
  const data = {
    selectedValue: selectedValue.value,
    tipValue: tipValue.value,
    formBaslik: formBaslik.value,
    type: type.value,
    unvan: unvan.value,
    vergiDairesi: vergiDairesi.value,
    vergiNo: vergiNo.value,
    adres: adres.value,
    duzenlemeTarihi: duzenlemeTarihi.value,
    vadeTarihi: vadeTarihi.value,
    sevkTarihi: sevkTarihi.value,
    duzenlemeSaati: duzenlemeSaati.value,
    teklifKosullari: teklifKosullari.value,
  };
  console.log("Veriler:", data);
  alert("Veriler başarıyla gönderidi");
};
const clearData = () => {
  selectedValue.value = null;
  tipValue.value = null;
  formBaslik.value = "";
  type.value = "";
  unvan.value = "";
  vergiDairesi.value = "";
  vergiNo.value = null;
  adres.value = "";
  duzenlemeTarihi.value = formattedDate;
  vadeTarihi.value = formattedDate;
  sevkTarihi.value = formattedDate;
  duzenlemeSaati.value = formattedTime;
  teklifKosullari.value = "";
  let onay = confirm("Verilerin silinmesini onaylıyor musunuz?");
  alert("Veriler silindi!");
};
</script>

<style scoped>
.customer-info {
  border: 1px solid black;
  padding: 10px;
}
.customer-info {
  width: 97%;
  margin: 0 auto;
}

.form-group {
  display: flex;
  align-items: center;
  margin: 0.5rem;
}

.form-group label {
  flex: 0 0 25%;
  margin-right: 1rem;
  font-weight: bold;
  color: #74829a;
}

.form-group input,
.form-group select {
  flex: 1;
  border: none;
  border-bottom: 1px solid #74829a;
  font-weight: bold;
}

.form-group input::placeholder,
.form-group select::placeholder {
  font-weight: normal;
  color: #74829a;
}

.form-floating {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}

.form-floating input {
  border: none;
  border-bottom: 1px solid #74829a;
}

.form-floating label {
  font-weight: normal;
  color: #74829a;
}

.form-select {
  border-radius: 0;
}
.form-control {
  border-radius: 0;
}

#datepicker1 {
  border-radius: 0;
}
#datepicker2 {
  border-radius: 0;
}
#datepicker3 {
  border-radius: 0;
}
#timepicker {
  border-radius: 0;
}
</style>
