<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import { useSettingsStore } from '@/store/settings/settingStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import CheckMarkIcon from '@/components/ui/icons/other/CheckMarkIcon.vue'

const props = defineProps({
  statusId: {
    type: Number,
    default: 0,
  },
  statusImage: {
    type: String,
    default: '',
  },
  statusMinExp: {
    type: Number,
    default: 0,
  },
  statusPircent: {
    type: Number,
    default: 0,
  },
  statusBonus: {
    type: Number,
    default: 0,
  },
  statusTitle: {
    type: String,
    default: '',
  },
  statusRatio: {
    type: Number,
    default: 0,
  },
})

const settingsStore = useSettingsStore()
const sessionStore = useSessionStore()
const statusMaxExp = ref()
const progressBar = ref('')
const userExp = ref(0)
const indexStatus = settingsStore.statuses.findIndex(
  (status) => status.id === props.statusId
)
const computedStatusMax = () => {
  const nextIndexStatus = indexStatus + 1
  if (settingsStore.statuses[nextIndexStatus] !== undefined) {
    return settingsStore.statuses[nextIndexStatus].exp
  } else {
    return '∞'
  }
}

const limitBar = () => {
  const maxExp = statusMaxExp.value
  if (maxExp === '∞') return 10000000
  else return maxExp
}
const computedProgressBar = () => {
  progressBar.value = `${userExp.value / (limitBar() / 100)}%`
}
onMounted(() => {
  const isAuth = !sessionStore.session?.profile
  if (isAuth) progressBar.value = '0%'
  statusMaxExp.value = computedStatusMax()
  userExp.value = sessionStore.session?.profile?.coins
  if (userExp.value > statusMaxExp.value) progressBar.value = '100%'
  else computedProgressBar()
})
</script>

<template>
  <article class="profile__statuses-card">
    <div class="profile__statuses-card-image">
      <img :src="statusImage" alt="" />
      <strong>{{ statusMinExp }} опыта</strong>
      <div class="exp-range">
        <p>{{ statusMinExp }}</p>
        <div></div>
        <p>{{ statusMaxExp }}</p>
      </div>
    </div>
    <div class="profile__statuses-card-info">
      <strong>{{ statusTitle }}</strong>
      <div class="profile__statuses-card-info-item">
        <CheckMarkIcon class="check-mark" />
        <p>Круглосуточная поддержка</p>
      </div>
      <div class="profile__statuses-card-info-item">
        <CheckMarkIcon class="check-mark" />
        <p>Бонус {{ statusPircent }}%</p>
      </div>
      <div class="profile__statuses-card-info-item">
        <CheckMarkIcon class="check-mark" />
        <p>Удвоение баллов на 1 час</p>
      </div>
    </div>
    <div class="status__statuses-card-bonus">{{ statusBonus }} Р</div>
    <strong class="profile__statuses-card-course">{{ statusRatio }}:1</strong>
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.profile__statuses {
  &-card {
    display: flex;
    justify-content: space-between;
    align-items: start;
    color: #fff;
    font-size: 14px;
    gap: 20px;
    @media (max-width: $md4 + px) {
      font-size: 6px;
    }

    &-image {
      width: 100%;
      max-width: 200px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      @media (max-width: $md4 + px) {
        max-width: 110px;
      }

      img {
        max-width: 92px;
        max-height: 92px;
        object-fit: cover;
        @media (max-width: $md4 + px) {
          max-width: 37px;
          max-height: 37px;
        }
      }

      .exp-range {
        display: flex;
        align-items: center;
        gap: 5px;

        div {
          width: 100%;
          position: relative;
          max-width: 120px;
          height: 10px;
          background: #1e1e1e;
          border-radius: 36px;
          @media (max-width: $md4 + px) {
            display: flex;
            flex: 1 0 20px;
            height: 5px;
          }

          &::before {
            display: block;
            content: '';
            background: #d5a748;
            width: v-bind(progressBar);
            height: 100%;
            border-radius: 36px;
          }

          &::after {
            position: absolute;
            content: '';
            display: block;
          }
        }
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      color: #fff;
      @media (max-width: $md4 + px) {
        gap: 8px;
      }

      &-item {
        display: flex;
        align-items: center;
        gap: 17px;
        @media (max-width: $md4 + px) {
          gap: 13px;
          .check-mark {
            max-width: 6px;
          }
        }
      }
    }

    &-course {
      width: 100%;
      max-width: 90px;
      padding: 0 20px;
      @media (max-width: $md4 + px) {
        max-width: 50px;
      }
    }
  }
}

.status__statuses-card-bonus {
  width: 100%;
  max-width: 200px;
  @media (max-width: $md4 + px) {
    max-width: 80px;
  }
}
</style>
