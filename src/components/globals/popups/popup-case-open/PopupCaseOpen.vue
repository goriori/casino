<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import CaseOpenModule from '@/components/modules/case-open/CaseOpenModule.vue'
import { useStateStore } from '@/store/stateStore.js'
import { onMounted } from 'vue'
import { ERRORS } from '@/configs/errors.js'

const stateStore = useStateStore()
const onValidData = () => {
  const { prizes, price, caseId } = stateStore.globalPopupsModules.caseOpen
  if (!price || !prizes || !caseId) {
    stateStore.globalPopupsModules.caseOpen.visibility = false
    return stateStore.globalPopupMessages.error.show(
      ERRORS.ERROR_VALID_PARAMS.MESSAGE
    )
  }
}
onMounted(() => {
  onValidData()
})
</script>

<template>
  <PopupBase size="full">
    <template #window>
      <CaseOpenModule
        isPopup
        :price="stateStore.globalPopupsModules.caseOpen.price"
      />
    </template>
  </PopupBase>
</template>

<style>
@import 'PopupCaseOpen.scss';
</style>
