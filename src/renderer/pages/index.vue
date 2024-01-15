<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <div class="border-t">
    <div class="bg-background">
      <div class="grid grid-cols-5">
        <Sidebar class="col-span-1" />
        <div class="col-span-3 border-l">
          <div class="px-4 py-6 lg:px-8">
            content
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
