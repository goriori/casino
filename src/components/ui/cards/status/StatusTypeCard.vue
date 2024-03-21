<script setup>
import CheckMarkIcon from '@/components/ui/icons/other/CheckMarkIcon.vue'
import { ref } from 'vue'
import { useSettingsStore } from '@/store/settings/settingStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'

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
const userExp = sessionStore.session.profile.coins
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
const statusMaxExp = ref(computedStatusMax())
const limitBar = () => {
  const maxExp = statusMaxExp.value
  if (maxExp === '∞') return 10000000
  else return maxExp
}
const progressBar = ref(
  (() => {
    if (userExp > statusMaxExp.value) return '100%'
    else return `${(sessionStore.session.profile.coins / limitBar())* 100}%`
  })()
)
</script>

<template>
  <article class="profile__statuses-card">
    <div class="profile__statuses-card-content">
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
        <div
          class="profile__statuses-card-info-item"
          v-for="item in 2"
          :key="item"
        >
          <CheckMarkIcon />
          <p>Круглосуточная поддержка</p>
        </div>
      </div>
    </div>
    <strong class="profile__statuses-card-course">{{ statusRatio }}:1</strong>
  </article>
</template>

<style scoped lang="scss">
.profile__statuses {
  &-card {
    display: flex;
    justify-content: space-between;
    align-items: start;
    color: #fff;
    font-size: 14px;

    &-image {
      display: flex;
      flex-direction: column;
      gap: 20px;

      img {
        max-width: 92px;
        max-height: 92px;
        object-fit: cover;
      }

      .exp-range {
        display: flex;
        align-items: center;
        gap: 5px;

        div {
          position: relative;
          width: 120px;
          height: 10px;
          background: #1e1e1e;
          border-radius: 36px;

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

      &-item {
        display: flex;
        align-items: center;
        gap: 17px;
      }
    }

    &-content {
      display: flex;
      align-items: start;
      gap: 50px;
    }

    &-course {
      padding: 0 20px;
    }
  }
}
</style>
