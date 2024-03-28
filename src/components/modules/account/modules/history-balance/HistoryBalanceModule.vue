<script setup>
import { useSessionStore } from '@/store/session/sessionStore.js'
import { onMounted } from 'vue'
import {
  dateEnd,
  dateStart, filteredHistory
} from '@/components/modules/account/modules/history-balance/HistoryBalanceModule.options.js'

const sessionStore = useSessionStore()

onMounted(async () => {
  await sessionStore.getStatusPay()
})
</script>

<template>
  <div class="history__balance-module">
    <div class="history__balance-module-title">
      <p>История балланса</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="17"
        viewBox="0 0 20 17"
        fill="none"
      >
        <path
          d="M1.25 2.85851C2.35623 2.40703 3.94237 1.92064 5.4846 1.76869C7.14748 1.60486 8.558 1.84572 9.375 2.68652V14.5861C8.20639 13.939 6.72581 13.8501 5.35915 13.9848C3.88366 14.1302 2.39713 14.5478 1.25 14.975V2.85851ZM10.625 2.68652C11.442 1.84572 12.8525 1.60486 14.5154 1.76869C16.0576 1.92064 17.6438 2.40703 18.75 2.85851V14.975C17.6029 14.5478 16.1163 14.1302 14.6408 13.9848C13.2742 13.8501 11.7936 13.939 10.625 14.5861V2.68652ZM10 1.58317C8.76886 0.549487 6.98354 0.393821 5.35915 0.553862C3.46652 0.740332 1.55573 1.37473 0.366373 1.90281C0.143252 2.00187 0 2.21918 0 2.45858V15.8895C0 16.0971 0.10797 16.2904 0.286634 16.4028C0.465298 16.5152 0.690175 16.5312 0.883627 16.4453C1.98593 15.9559 3.76265 15.3693 5.4846 15.1996C7.24457 15.0262 8.72184 15.3061 9.51196 16.2709C9.63056 16.4157 9.81013 16.5 10 16.5C10.1899 16.5 10.3694 16.4157 10.488 16.2709C11.2782 15.3061 12.7554 15.0262 14.5154 15.1996C16.2374 15.3693 18.0141 15.9559 19.1164 16.4453C19.3098 16.5312 19.5347 16.5152 19.7134 16.4028C19.892 16.2904 20 16.0971 20 15.8895V2.45858C20 2.21918 19.8567 2.00187 19.6336 1.90281C18.4443 1.37473 16.5335 0.740332 14.6408 0.553862C13.0165 0.393821 11.2311 0.549487 10 1.58317Z"
          fill="white"
        />
      </svg>
    </div>
    <div class="history__balance-module-content">
<!--      <div class="history__balance-module-target">-->
<!--        <p>с</p>-->
<!--        <input type="date" v-model="dateStart" />-->
<!--        <p>по</p>-->
<!--        <input type="date" v-model="dateEnd" />-->
<!--      </div>-->
      <hr />
      <div class="history__balance-module-info">
        <table>
          <tr class="info-title-items">
            <td class="info-title">Дата</td>
            <td class="info-title">Тип</td>
            <td class="info-title">Описание</td>
            <td class="info-title">Сумма</td>
            <td class="info-title">Статус</td>
          </tr>

          <tr
            class="info-content-item"
            v-for="history in filteredHistory"
            :key="history.id"
          >
            <td class="info-content">
              {{ new Date(history.created_at).toLocaleDateString() }}
            </td>
            <td class="info-content">
              {{ history.type === 'add' ? 'Зачисление' : 'Отправление' }}
            </td>
            <td class="info-content">evoplay</td>
            <td class="info-content">{{ history.summ }} Р</td>
            <td class="info-content">Успешно</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

hr {
  height: 1px;
  background: #fff;
}

.history {
  &__balance {
    &-module {
      width: 100%;
      height: 100%;
      padding: 18px 48px;
      display: flex;
      flex-direction: column;
      gap: 36px;
      background: #1d2345;
      border-radius: 26px;
      font-size: 24px;

      @media (max-width: 1500px) {
        padding: 18px;
      }

      @media (max-width: $md2 + px) {
        font-size: 20px;
        gap: 24px;
      }

      &-title {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        color: $white;
        font-weight: 600;
      }

      &-target {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        font-size: 24px;

        @media (max-width: $md4 + px) {
          gap: 6px;
        }

        p {
          color: #bbb;
        }

        input {
          max-width: 120px;
          max-height: 40px;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #5570fb;
          font-size: 14px;
        }
      }

      &-content {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      &-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;

        @media (max-width: $md4 + px) {
          overflow-x: scroll;
          align-items: flex-start;
          padding-bottom: 18px;

          &::-webkit-scrollbar {
            height: 1px;
          }

          &::-webkit-scrollbar-track {
            background-color: #ffffff50;
          }

          &::-webkit-scrollbar-thumb {
            background-color: #ffffff;
          }
        }
      }
    }
  }
}

.info {
  &-title {
    font-size: 14px;
    font-weight: 400;
    color: #5570fb;
  }

  &-content-items {
    font-size: 14px;
    color: #fff;
  }

  &-content-item {
    color: #fff;
    font-size: 14px;
  }
}

table {
  @media (max-width: $md2 + px) {
    width: 100%;
  }
}

tr {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 86px;
  margin: 20px 0 0 0;

  &:first-child {
    margin-top: 0;
  }

  @media (max-width: 1500px) {
    gap: 60px;
  }
  @media (max-width: $md2 + px) {
    justify-content: space-between;
  }
}

td {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 70px;
  @media (max-width: 1500px) {
    width: 60px;
  }
}
</style>
