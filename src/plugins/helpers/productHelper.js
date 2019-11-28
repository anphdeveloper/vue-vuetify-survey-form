import {
  S1_PRODUCT_RATE,
  S2_PRODUCT_RATE,
  CLINIC_PRODUCT_RATE,
  TOOTH_PRODUCT_RATE,
  OUTPATIENT_A_PRODUCT_RATE,
  PRENENTION_BASIS_PRODUCT_RATE,
  PRENENTION_PREMIUM_PRODUCT_RATE
} from "@/plugins/constants/products";

export function getRateForStationary(age, productNumber) {
  switch (productNumber) {
    case 0:
      return getRateFromProduct(S1_PRODUCT_RATE, age);
    case 1:
      return getRateFromProduct(S2_PRODUCT_RATE, age);
    case 2:
      return getRateFromProduct(CLINIC_PRODUCT_RATE, age);
    default:
      console.log("station product id error");
      break;
  }
}
export function getRateForTooth(age, productNumber) {
  switch (productNumber) {
    case 0:
      return this.getRateFromProduct(TOOTH_PRODUCT_RATE, age);
    default:
      console.log("tooth product id error");
      break;
  }
}
export function getRateForOutpatient(age, productNumber) {
  switch (productNumber) {
    case 0:
      return this.getRateFromProduct(OUTPATIENT_A_PRODUCT_RATE, age);
    default:
      console.log("tooth product id error");
      break;
  }
}
export function getRateForPrevention(age, productNumber) {
  switch (productNumber) {
    case 0:
      return this.getRateFromProduct(PRENENTION_BASIS_PRODUCT_RATE, age);
    case 1:
      return this.getRateFromProduct(PRENENTION_PREMIUM_PRODUCT_RATE, age);
    default:
      console.log("tooth product id error");
      break;
  }
}
export function getRateFromProduct(product, age) {
  return product.reduce((rate, product_item) => {
    let product_rate =
      age >= product_item.min && age <= product_item.max
        ? product_item.rate
        : 0;
    return rate + product_rate;
  }, 0);
}
