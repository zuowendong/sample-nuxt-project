<template>
  <div class="w-full h-full bg-white transition-colors text-slate-600">
    <div class="flex flex-col h-fit min-h-screen w-screen">
      <Navbar></Navbar>
      <div class="flex-1 flex">
        <slot></slot>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>
