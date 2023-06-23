import { markRaw } from "vue";

const orders = markRaw([
  {
    ID: 123,
    ProductBarcode: "9786050817527",
    ProductName: "Tamir Seti",
    Currency: "TL",
    ProductUnitPrice: 339.9,
    MeasureUnit: "Takım",
  },
  {
    ID: 456,
    ProductBarcode: "9786050817534",
    ProductName: "Elektrik Kablosu",
    Currency: "USD",
    ProductUnitPrice: 19.9,
    MeasureUnit: "Metre",
  },
  {
    ID: 789,
    ProductBarcode: "9786050817541",
    ProductName: "Vida",
    Currency: "EURO",
    ProductUnitPrice: 29.9,
    MeasureUnit: "KG",
  },
  {
    ID: 1011,
    ProductBarcode: "9786050817558",
    ProductName: "Akü",
    Currency: "USD",
    ProductUnitPrice: 99.99,
    MeasureUnit: "Adet",
  },
  {
    ID: 1213,
    ProductBarcode: "9786050817565",
    ProductName: "Maraş Dondurması",
    Currency: "TL",
    ProductUnitPrice: 212.99,
    MeasureUnit: "KG",
  },
]);

export default orders;
