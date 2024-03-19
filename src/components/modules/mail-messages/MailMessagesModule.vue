<script setup>
import MailMessagesIcon from '@/components/ui/icons/header/MailMessagesIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import { onMounted, ref } from 'vue'
import { useMailStore } from '@/store/mail/mailStore.js'
import MessageIcons from '@/components/ui/icons/mail-messages/MessageIcons.vue'

const isOpen = ref(false)
const mailStore = useMailStore()
const changeIsOpen = () => (isOpen.value = !isOpen.value)

onMounted(async () => {
  await mailStore.getMessages()
})
</script>

<template>
  <div class="mail__messages-module" >
    <div class="mail__messages-icon" >
      <div class="ellipse-notification"></div>
      <MailMessagesIcon @click="changeIsOpen" />
    </div>
    <Transition name="fade">
      <div class="mail__messages-notification" v-if="isOpen">
        <h4 class="notification-title">Уведомления</h4>
        <div class="notification-list">
          <article
            v-for="message in mailStore.messages"
            :key="message"
            class="notification-item"
          >
            <div class="notification-content">
              <div class="content-icon">
                <MessageIcons :type="message.type" />
              </div>
              <div class="content-message">
                {{ message.title }}
              </div>
            </div>
            <div class="notification-actions">
              <BaseButton>
                <p>Удалить</p>
              </BaseButton>
            </div>
          </article>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
p {
  color: white;
}

.mail__messages {
  &-module {
    position: relative;
  }

  &-icon {
    cursor: pointer;

    .ellipse-notification {
      position: absolute;
      top: -5px;
      right: -5px;
      max-width: 12px;
      height: 12px;
      width: 100%;
      border-radius: 100%;
      background: red;
    }
  }

  &-notification {
    min-width: 424px;
    position: absolute;
    right: -10px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    border-radius: 36px;
    border: 2px solid #d5a848;
    background: #1e1e1e;
    padding: 20px 25px;
  }
}

.notification {
  &-title {
    font-size: 26px;
  }

  &-list {
    max-height: 432px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 0 15px 0 0;
    &::-webkit-scrollbar-thumb {
      background: #d5a748;
      border-radius: 36px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 36px;

    }

    gap: 20px;
  }

  &-item {
    display: flex;
    flex-direction: column;
    background: #2c2c2c;
    border-radius: 36px;
    padding: 20px;
    gap: 10px;
  }

  &-content {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &-actions {
    display: flex;
    justify-content: end;
    align-items: center;
  }
}

.content {
  &-message {
    font-size: 16px;
    max-width: 290px;
    line-height: 23.2px;

    strong {
      color: #d5a748;
    }
  }
}
</style>
