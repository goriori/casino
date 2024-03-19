<script setup>
import { useSessionStore } from '@/store/session/sessionStore.js'

const sessionStore = useSessionStore()
</script>

<template>
  <div class="profile__status-tooltip">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
    >
      <path
        d="M2.08333 25.5C2.08333 25.5 0 25.5 0 23.4167C0 21.3333 2.08333 15.0833 12.5 15.0833C22.9167 15.0833 25 21.3333 25 23.4167C25 25.5 22.9167 25.5 22.9167 25.5H2.08333Z"
        fill="white"
      />
      <path
        d="M12.5 13C15.9518 13 18.75 10.2018 18.75 6.75C18.75 3.29822 15.9518 0.5 12.5 0.5C9.04822 0.5 6.25 3.29822 6.25 6.75C6.25 10.2018 9.04822 13 12.5 13Z"
        fill="white"
      />
    </svg>
    <div class="profile__status-info">
      <p>
        Ваш статус:
        <strong
          ><span>{{
            sessionStore.session.profile.stair_status.title
          }}</span></strong
        >
      </p>
      <p>
        Курс обмена:
        <strong
          ><span
            >{{ sessionStore.session.profile?.stair_status.ratio }} к 1</span
          ></strong
        >
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile__status {
  &-tooltip {
    display: flex;
    justify-content: center;
    width: 200px;
    gap: 10px;
  }

  &-info {
    span {
      color: #d5a748;
    }
  }
}
</style>
