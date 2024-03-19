<script setup>
import CheckMarkIcon from '@/components/ui/icons/other/CheckMarkIcon.vue'

const props = defineProps({
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
          <p>100</p>
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