<script setup>
import AccountIcon from '@/components/ui/icons/other/AccountIcon.vue'
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  actionHandler: {
    type: Function,
    default: () => {},
  },
  status: {
    type: String,
    default: 'Новичок',
  },
  statusBar: {
    type: String,
    default: '0/0',
  },
})

const expProfile = computed(() => {
  const exps = props.statusBar.split('/')
  const expUser = exps[0].replace("'", '')
  const finishExp = exps[1].trim().replace("'", '')
  const progress = expUser / (finishExp / 100)
  if (expUser > finishExp) return '100%'
  else return progress + '%'
})
</script>

<template>
  <article class="profile__status-card">
    <div class="status">
      <div class="status-info">
        <div class="info-icon">
          <AccountIcon />
        </div>
        <div class="info-content">
          <p>Ваш статус:</p>
          <p>{{ status }}</p>
        </div>
      </div>
      <div class="status-bar"></div>
      <div class="status-links">
        <p @click="actionHandler">Мои привилегии</p>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.profile__status {
  &-card {
    display: flex;
    padding: 20px;
    background: #2c2c2c;
    border-radius: 26px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
  }
}

.status {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 405px;
  width: 100%;

  &-info {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &-bar {
    position: relative;
    border: 4px solid rgba(204, 204, 204, 0.5);
    border-radius: 20px;

    &:before {
      content: ' ';
      position: absolute;
      top: -3px;
      left: -3px;
      width: v-bind(expProfile);
      border-radius: 20px;
      border: 3px solid #d5a748;
    }

    &:after {
      position: absolute;
      content: v-bind(statusBar);
      top: 10px;
      right: 0;
      font-weight: 400;
      font-size: 12px;
      color: #bbbbbb;
    }
  }

  &-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: #bbbbbb;

    p {
      cursor: pointer;
      font-size: 14px;
      text-decoration: underline;
    }
  }
}

.info {
  &-content {
    display: flex;
    align-items: center;
    gap: 10px;

    p:nth-child(1) {
      width: 100%;
      max-width: 100px;
      font-size: 14px;
      font-weight: 400;
      color: #bbbbbb;
    }

    p:nth-child(2) {
      width: 100%;
      max-width: 130px;
      font-size: 18px;
      font-weight: 700;
      color: #d5a748;
    }
  }
}
</style>
