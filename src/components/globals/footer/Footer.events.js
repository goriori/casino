import {
  isFAQOpen,
  isAboutOpen,
  isTermsConditionOpen,
  isCombatingMoneyLaunderingOpen,
  isAffiliatePolicyOpen,
  isPrivacyPolicyOpen,
  isTermsPolicyOpen,
} from './Footer.options.js'
import { useStateStore } from '@/store/stateStore.js'

export const openFAQ = () => {
  isFAQOpen.value = true
}

export const closeFAQ = () => {
  isFAQOpen.value = false
}

export const openAbout = () => {
  isAboutOpen.value = true
}

export const closeAbout = () => {
  isAboutOpen.value = false
}

export const openPrivileges = () => {
  const stateStore = useStateStore()
  stateStore.globalPopupsModules.statusesList.visibility = true
}


export const openTermCondition = () => {
  isTermsConditionOpen.value = true
}

export const closeTermCondition = () => {
  isTermsConditionOpen.value = false
}

export const openCombatingMoneyLaundering = () => {
  isCombatingMoneyLaunderingOpen.value = true
}

export const closeCombatingMoneyLaundering = () => {
  isCombatingMoneyLaunderingOpen.value = false
}

export const openAffiliatePolicy = () => {
  isAffiliatePolicyOpen.value = true
}

export const closeAffiliatePolicy = () => {
  isAffiliatePolicyOpen.value = false
}

export const openPrivacyPolicy = () => {
  isPrivacyPolicyOpen.value = true
}

export const closePrivacyPolicy = () => {
  isPrivacyPolicyOpen.value = false
}

export const openTermsPolicy = () => {
  isTermsPolicyOpen.value = true
}

export const closeTermsPolicy = () => {
  isTermsPolicyOpen.value = false
}
