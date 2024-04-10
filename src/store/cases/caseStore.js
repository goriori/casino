import { ref } from 'vue'
import { defineStore } from 'pinia'
import CaseService from '@/API/cases/caseService.js'

export const useCaseStore = defineStore('caseStore', () => {
  const cases = ref([])
  const casePrize = ref({})

  const getCases = async () => {
    cases.value = await CaseService.fetchCases()
  }

  const openCase = async (caseId) => {
    const {result} = await CaseService.fetchOpenCase(caseId)
    casePrize.value = { ...result }
    console.log(result)
  }

  return {
    cases,
    casePrize,
    getCases,
    openCase,
  }
})
