import { markRaw } from "vue";

const customers = markRaw([
    {
        id: 1,
        title: "ABC Ltd.",
        taxOffice: "Istanbul",
        taxNumber: "1234567890",
        address: "123 Main Street, Istanbul, Turkey",
    },
    {
        id: 2,
        title: "XYZ Inc.",
        taxOffice: "Ankara",
        taxNumber: "9876543210",
        address: "456 Second Avenue, Ankara, Turkey",
    },
    {
        id: 3,
        title: "LMN Co.",
        taxOffice: "Izmir",
        taxNumber: "2468101214",
        address: "789 Third Boulevard, Izmir, Turkey",
    },
]);

export default customers;
