<template>
  <q-page padding>
    <header>
      <div class="flex justify-between pt-8 px-8 text-white text-4xl">
        <span>left</span>
        <span>right</span>
      </div>
      <div class="text-white mt-60">
        <div class="text-center move-right">
          <span class="tracking-43px text-6xl ml-8">outdoors</span>
        </div>
        <div class="text-center mt-4 move-left">
          <span class="text-center tracking-10px text-4xl">is where life happens</span>
        </div>
      </div>
      <div class="text-center mt-4">
        <button
          class="btn relative bg-white h-10 rounded-full text-dark-500 px-6 hover:-translate-y-3px active:-translate-y-1px transition-all hover:shadow">
          discover our tours
        </button>
      </div>
    </header>
  </q-page>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  header {
    height: 95vh;
    background: linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.8)),
      url('src/assets/img/kevin-schmid-6wPYGWEGUWY-unsplash.jpg');
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 160px), 0 100%);
  }
  .move-right {
    animation: move-in-right 1.5s ease-out;
  }
  .move-left {
    animation: move-in-left 1.5s ease-out;
  }

  @keyframes move-in-right {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }

    60% {
      transform: translateX(-10px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes move-in-left {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }

    60% {
      transform: translateX(10px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes move-in-bottom {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }

    60% {
      transform: translateY(10px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .btn {
    animation: move-in-bottom 0.5s ease-in 0.75s;
    animation-fill-mode: backwards;
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 100px;
      top: 0;
      left: 0;
      position: absolute;
      z-index: -1;
      background-color: #fff;
      display: inline-block;
      transition: all 0.3s;
    }
    &:hover {
      &::after {
        transform: scale(1.5);
        opacity: 0;
      }
    }
  }
</style>
