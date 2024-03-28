import {
  isPolicyOpen,
  isGamingPolicyOpen,
  isKYCPolicyOpen,
  isFairnessPolicyOpen,
  isRestraintPolicyOpen,
  isAffiliatePolicyOpen,
  isPrivacyPolicyOpen,
  isTermsPolicyOpen,
} from './Footer.options.js'

export const openPolicy = () => {
  isPolicyOpen.value = true
}

export const closePolicy = () => {
  isPolicyOpen.value = false
}

export const openGamingPolicy = () => {
  isGamingPolicyOpen.value = true
}

export const closeGamingPolicy = () => {
  isGamingPolicyOpen.value = false
}

export const openKYCPolicy = () => {
  isKYCPolicyOpen.value = true
}

export const closeKYCPolicy = () => {
  isKYCPolicyOpen.value = false
}

export const openFairnessPolicy = () => {
  isFairnessPolicyOpen.value = true
}

export const closeFairnessPolicy = () => {
  isFairnessPolicyOpen.value = false
}

export const openRestraintPolicy = () => {
  isRestraintPolicyOpen.value = true
}

export const closeRestraintPolicy = () => {
  isRestraintPolicyOpen.value = false
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
