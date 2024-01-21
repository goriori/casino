<script setup></script>

<template>
  <div class="card">
    <div class="card-game">
      <img src="/images/cards/game-card.png" alt="" />
      <div class="card-game-title">
        <p>big win</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.card {
  max-width: 216px;

  &-game {
    cursor: pointer;
    position: relative;
    min-height: 276px;
    border-radius: 26px;
    border: 3px solid rgba(85, 112, 251, 0.8);
    background: $game-card-background;
    padding: 30px 0;
    transition: 0.15s all ease-in-out;

    &:hover {
      min-height: 307px;
    }

    img {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      z-index: 1;
      max-width: 216px;
      min-height: 216px;
      object-fit: cover;
    }

    &-title {
      position: absolute;
      width: 100%;
      max-width: 200px;
      min-height: 86px;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        z-index: 3;
        width: 100%;
        min-height: 100%;
        border-radius: 0px 0px 26px 26px;
        background: linear-gradient(
          180deg,
          rgba(97, 97, 97, 0.25) -36.78%,
          rgba(209, 209, 209, 0.15) 136.78%
        );
        filter: blur(7px);
        backdrop-filter: blur(2px);
      }

      p {
        position: relative;

        z-index: 4;
        color: $white;
        font-size: 32px;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
  }
}
</style>
