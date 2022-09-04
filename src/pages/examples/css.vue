<template>
  <div class="page p-4 flex gap-4 min-h-100vh">
    <div class="bg w-30 h-30 bg-[#58a] text-white">you're right</div>
    <div class="bg1 w-30 h-30 bg-[#58a] text-white">you're right</div>
    <div class="bg2 w-30 h-30 bg-[#58a] text-white pl-6">you're right</div>
    <div class="tab w-30 h-30 relative inline-block text-white"></div>
    <div class="w-30 h-30 rounded-full pie"></div>
    <div class="shadow w-30 h-30 bg-[#58a] text-white"></div>

    <main class="w-200 h-100 p-4">
      IT之家 8 月 7 日消息 京东 8 月 8 日正式开启 2022 年第八次【PLUS DAY】会员狂促：PLUS
      专属补贴限量抢购，PLUS 专享京东电器 1120 元超级补贴，活动商品购物 20
      倍返京豆，点此前往主会场。 京东 PLUS 超级补贴：点此领取（含 4 张优惠券，共 1120
      元超级补贴，还有超千元大额神券包免费领取，涵盖多种品类） 京东 PLUS
      生活特权：点此前往（衣食住行不用愁，吃喝玩乐全搞定） 22
    </main>
  </div>
  <div class="figure bg-[#58a]">hello</div>
  <div class="figure bg-[#58a]">hello</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .bg {
    background: linear-gradient(-45deg, transparent 15px, #58a 0);
  }
  .bg1 {
    background: linear-gradient(-45deg, transparent 15px, #655 0) right,
      linear-gradient(45deg, transparent 15px, #58a 0) left;
    background-size: 50% 100%;
    background-repeat: no-repeat;
  }
  .bg2 {
    background: linear-gradient(135deg, transparent 15px, #58a 0) top left,
      linear-gradient(-135deg, transparent 15px, #58a 0) top right,
      linear-gradient(45deg, transparent 15px, #58a 0) bottom left,
      linear-gradient(-45deg, transparent 15px, #58a 0) bottom right;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }
  .tab {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      background: #58a;
      transform: perspective(5em) rotateX(15deg);
    }
  }
  .pie {
    background-image: linear-gradient(to right, transparent 50%, #58a 0);
  }
  .shadow {
    box-shadow: 5px 5px 4px -2px black;
  }
  .page {
    background: url('~/assets/img/img1.jpg') 0 / cover fixed;
  }
  main {
    position: relative;
    background: hsla(0, 0%, 100%, 0.35);
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      filter: blur(20px);
      margin: -30px;
    }
  }
  .dialog {
    &::backdrop {
      background: rgba(0, 0, 0, 0.5);
    }
  }
  .figure {
    width: min-content;
    margin: auto;
  }
</style>
