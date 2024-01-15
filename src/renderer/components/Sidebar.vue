<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
</script>

<template>
  <ScrollArea class="h-full px-1">
    <div :class="cn('pb-12', $attrs.class ?? '')">
      <div class="space-y-4 py-4">
        <div class="px-3 py-2">
          <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">
            workcare
          </h2>
          <div class="space-y-1">
            <Button variant="secondary" class="w-full justify-start">
              任务
            </Button>
            <Button variant="ghost" class="w-full justify-start">
              设置
            </Button>
            <Button variant="ghost" class="w-full justify-start">
              反馈
            </Button>
            <Button variant="ghost" class="w-full justify-start">
              关于
            </Button>
          </div>
        </div>
      </div>
    </div>
  </ScrollArea>
</template>
