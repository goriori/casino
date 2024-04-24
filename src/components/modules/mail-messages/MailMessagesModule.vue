<script setup>
import { onMounted, ref } from 'vue'
import { useMailStore } from '@/store/mail/mailStore.js'
import MailMessagesIcon from '@/components/ui/icons/header/MailMessagesIcon.vue'
import MessageIcons from '@/components/ui/icons/mail-messages/MessageIcons.vue'


const isOpen = ref(false)
const mailStore = useMailStore()
const changeIsOpen = () => (isOpen.value = !isOpen.value)

onMounted(async () => {
  await mailStore.getMessages()
})
</script>

<template>
  <div class="mail__messages-module">
    <div class="mail__messages-icon">
      <div
        class="ellipse-notification"
        v-if="mailStore.messages.length > 0"
      ></div>
      <MailMessagesIcon @click="changeIsOpen" class="icon" />
    </div>
    <Transition name="fade">
      <div :class="['mail__messages-notification']" v-if="isOpen">
        <h4 class="notification-title">Уведомления</h4>
        <div>
          <div v-if="mailStore.messages.length > 0" class="notification-list">
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
                  <p class="message">{{ message.title }}</p>
                  <p class="description">{{ message.message }}</p>
                </div>
              </div>
              <div class="notification-actions">
                <!--              <BaseButton>-->
                <!--                <p>Удалить</p>-->
                <!--              </BaseButton>-->
              </div>
            </article>
          </div>
          <div v-else>У вас нет уведомлений</div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@import 'MailMessagesModule';
</style>
