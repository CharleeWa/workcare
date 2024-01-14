<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <div class="border-t">
    <div class="bg-background">
      <div class="grid lg:grid-cols-5">
        <Sidebar class="" />
        <div class="col-span-3 lg:col-span-4 lg:border-l">
          <div class="h-full px-4 py-6 lg:px-8" />
        </div>
      </div>
    </div>
  </div>
</template>
