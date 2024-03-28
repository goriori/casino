<script setup></script>

<template>
  <div class="tetrominos">
    <div class="tetromino box1"></div>
    <div class="tetromino box2"></div>
    <div class="tetromino box3"></div>
    <div class="tetromino box4"></div>
  </div>
</template>

<style scoped lang="scss">
$w: 96px;
$h: 112px;
$xspace: $w/2;
$yspace: $h/4 - 1;
$speed: 1.5s;

.tetrominos {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-$h, -$w);
}

.tetromino {
  width: $w;
  height: $h;
  position: absolute;
  transition: all ease 0.3s;
  background: url('data:image/svg+xml;utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 684"%3E%3Cpath fill="%23010101" d="M305.7 0L0 170.9v342.3L305.7 684 612 513.2V170.9L305.7 0z"/%3E%3Cpath fill="%23fff" d="M305.7 80.1l-233.6 131 233.6 131 234.2-131-234.2-131"/%3E%3C/svg%3E')
    no-repeat top center;
}

.box1 {
  animation: tetromino1 $speed ease-out infinite;
}

.box2 {
  animation: tetromino2 $speed ease-out infinite;
}

.box3 {
  animation: tetromino3 $speed ease-out infinite;
  z-index: 2;
}

.box4 {
  animation: tetromino4 $speed ease-out infinite;
}
@keyframes tetromino1 {
  0%,
  40% {
    /* compose logo */
    /* 1 on 3 */
    /* L-shape */
    transform: translate(0, 0);
  }
  50% {
    /* pre-box */
    transform: translate(calc($xspace), -calc($yspace));
  }
  60%,
  100% {
    /* box */
    /* compose logo */
    transform: translate(calc($xspace) * 2, 0);
  }
}
@keyframes tetromino2 {
  0%,
  20% {
    /* compose logo */
    /* 1 on 3 */
    transform: translate(calc($xspace) * 2, 0px);
  }
  40%,
  100% {
    /* L-shape */
    /* box */
    /* compose logo */
    transform: translate(calc($xspace) * 3, calc($yspace));
  }
}
@keyframes tetromino3 {
  0% {
    /* compose logo */
    transform: translate(calc($xspace) * 3, calc($yspace));
  }
  20%,
  60% {
    /* 1 on 3 */
    /* L-shape */
    /* box */
    transform: translate(calc($xspace) * 2, calc($yspace * 2));
  }
  90%,
  100% {
    /* compose logo */
    transform: translate(calc($xspace), calc($yspace));
  }
}
@keyframes tetromino4 {
  0%,
  60% {
    /* compose logo */
    /* 1 on 3 */
    /* L-shape */
    /* box */
    transform: translate(calc($xspace), calc($yspace));
  }
  90%,
  100% {
    /* compose logo */
    transform: translate(0, 0);
  }
}
</style>
