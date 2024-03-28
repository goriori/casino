import { ref } from 'vue'
import { defineStore } from 'pinia'
import CaseService from '@/API/cases/caseService.js'

export const useCaseStore = defineStore('caseStore', () => {
  const cases = ref([])

  const getCases = async () => {
    cases.value = await CaseService.fetchCases()
  }

  const openCase = async (caseId) => {
    const response = await CaseService.fetchOpenCase(caseId)
    console.log(response)
  }

  return {
    cases,
    getCases,
    openCase,
  }
})
