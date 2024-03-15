<script setup>
import InfoIcon from '@/components/ui/icons/other/InfoIcon.vue'
import CheckMarkIcon from '@/components/ui/icons/other/CheckMarkIcon.vue'
import { useSettingsStore } from '@/store/settings/settingStore.js'
import { onMounted } from 'vue'

const settingStore = useSettingsStore()
const urlAPI = window.API
onMounted(async () => {
  await settingStore.getStatuses()
})
</script>

<template>
  <section class="profile__statuses-module">
    <div class="profile__statuses-module-sections">
      <p>Опыт</p>
      <p>Привелегии</p>
      <p>Бонус</p>
      <p>Курс обмена</p>
    </div>
    <div class="profile__statuses-module-list">
      <article
        class="profile__statuses-card"
        v-for="status in settingStore.statuses"
        :key="status"
      >
        <div class="profile__statuses-card-content">
          <div class="profile__statuses-card-image">
            <img :src="urlAPI + status.icon" alt="" />
            <strong>{{ status.exp }} опыта</strong>
            <div class="exp-range">
              <p>0</p>
              <div></div>
              <p>100</p>
            </div>
          </div>
          <div class="profile__statuses-card-info">
            <strong>Новичок</strong>
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
        <strong class="profile__statuses-card-course"
          >{{ status.ratio }}:1</strong
        >
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.profile__statuses {
  &-module {
    border-radius: 36px;
    padding: 40px;
    background: #2c2c2c;

    &-sections {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #bbbbbb;
      font-size: 14px;
      font-weight: 400;
      margin: 0 0 40px 0;
    }

    &-list {
      display: flex;
      flex-direction: column;
      gap: 40px;
      overflow-y: auto;
      max-height: 500px;
    }
  }

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
          width: 120px;
          height: 10px;
          background: #1e1e1e;
          border-radius: 36px;

          &::before {
            display: block;
            content: '';
            background: #d5a748;
            width: 50%;
            height: 100%;
            border-radius: 36px;
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
