<script setup>
import { ref } from 'vue'
import BaseSelect from '@/components/ui/selects/base/BaseSelect.vue'
import ChangeIcon from '@/components/ui/icons/popular/ChangeIcon.vue'
import Search from '@/components/ui/search/base/Search.vue'
import InfoTooltip from '@/components/ui/tooltips/info/InfoTooltip.vue'
import BonusSystemTooltipMessage from '@/components/modules/tooltip-messages/bonus-system/BonusSystemTooltipMessage.vue'
import TextTooltip from '@/components/ui/tooltips/text/TextTooltip.vue'
import BaseInput from '@/components/ui/inputs/base/BaseInput.vue'

const targetSelectOne = ref('')
const targetSelectTwo = ref('')
const targetSelectThree = ref('')
const titles = ['Хот', 'Ретро', 'Поплуряные']
const inputModels = ref({
  login: '',
  phone: '',
  email: '',
})
</script>

<template>
  <div class="page">
    <div class="page-container container">
      <h1>Ui kit project:</h1>
      <section class="list">
        <h3>Selects:</h3>
        <BaseSelect
          v-model="targetSelectOne"
          :titles="titles"
          :icon="ChangeIcon"
        />
        <BaseSelect
          v-model="targetSelectTwo"
          :titles="titles"
          :icon="ChangeIcon"
        />
        <BaseSelect
          v-model="targetSelectThree"
          :titles="titles"
          :icon="ChangeIcon"
        />
      </section>
      <section class="list">
        <h3>Search:</h3>
        <Search />
      </section>
      <section class="list">
        <h3>Tooltips Info:</h3>
        <InfoTooltip :message="BonusSystemTooltipMessage" />
        <InfoTooltip :message="BonusSystemTooltipMessage" />
        <InfoTooltip :message="BonusSystemTooltipMessage" />
      </section>
      <section class="list">
        <h3>Tooltips Text:</h3>
        <TextTooltip
          text="Наведи курсор на меня"
          message="Вот оно я - сообщение"
        />
        <TextTooltip
          text="Наведи курсор на меня тоже!"
          message="Вот оно я - сообщение"
        />
        <TextTooltip text="И на меня!!!" message="Вот оно я - сообщение" />
      </section>
      <section class="list">
        <h3>Inpus:</h3>
        <BaseInput v-model="inputModels.login" type="text" placeholder="Введи логин" />
        <BaseInput v-model="inputModels.email" type="email" placeholder="Тут почту" />
        <BaseInput v-model="inputModels.phone" type="phone" placeholder="Уже номер" />
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  color: white;
  height: 100vh;

  &-container {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}

.list {
  display: flex;
  align-items: center;
  gap: 50px;
}
</style>
