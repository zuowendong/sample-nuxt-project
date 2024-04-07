<template>
  <header class="fixed left-0 right-0 top-0 bg-transparent z-[997] text-white">
    <div class="w-full flex items-center px-[130px] font-semibold text-[16px] bg-transparent">
      <div class="w-[200px]">
        <NuxtLink href="/">
          <img class="w-full" src="https://seitzhydrogen.ch/theme/img/logo_seitz_pos.svg">
        </NuxtLink>
      </div>
      <div class="flex-1">
        <ul class="flex items-center justify-end h-[74px]">
          <li class="mr-[50px] cursor-pointer hover:text-[#7ae3a6]">

            <NuxtLink href="/product/more">产品中心</NuxtLink>
          </li>
          <li class="mr-[50px] cursor-pointer hover:text-[#7ae3a6]">西兹动态</li>
          <li class="mr-[50px] cursor-pointer hover:text-[#7ae3a6]">关于西兹</li>
          <li class="cursor-pointer hover:text-[#7ae3a6]">联系我们</li>
        </ul>
      </div>
    </div>
  </header>
</template>
