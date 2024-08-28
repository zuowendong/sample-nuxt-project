<template>
  <div class="h-full w-full">
    <div class="flex h-fit min-h-screen flex-col items-center relative">
      <Navbar />
      <div class="flex w-full flex-1">
        <div class="mx-auto flex w-full flex-1">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
