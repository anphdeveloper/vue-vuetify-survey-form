import * as productHelper from "../../plugins/helpers/productHelper.js"
const state = {
  isCheckedStationary: false,
  isCheckedTooth: false,
  isCheckedOutpatient: false,
  isCheckedPrevention: false,
  productIdCheckedInStationary: 0,
  productIdCheckedInTooth: 0,
  productIdCheckedInOutpatient: 0,
  productIdCheckedInPrevention: 0  
}

const getters = {
  getStationaryRate : () => {
    return productHelper.getRateForStationary(8, 0) 
  }, 
  getToothRate : () => {
    return productHelper.getRateForTooth(8, 0) 
  }, 
  getOutpatientRate : () => {
    return productHelper.getRateForOutpatient(8, 0) 
  }, 
  getPreventionRate : () => {
    return productHelper.getRateForPrevention(8, 0) 
  }, 
}

const actions = {

}

const mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}