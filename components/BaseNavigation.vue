<template>
  <header class="py-4 border-b">
    <nav class="flex container justify-between">
      <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg width="56" format="webp" src="/logo.png" alt="" />
        <span class="text-3xl font-bold">Pivozavr</span>
      </NuxtLink>
      <div class="relative w-full max-w-md items-center">
        <Input id="search" type="text" placeholder="Поиск" class="pl-10" />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <Search class="size-6 text-muted-foreground" />
        </span>
      </div>
      <ul class="flex gap-6 text-xl font-bold">
        <Button><NuxtLink to="/login">Войти</NuxtLink></Button>
        <Button variant="outline"><NuxtLink to="/registration">Создать аккаунт</NuxtLink></Button>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
  import { Input } from '@/components/ui/input'
  import { Search } from 'lucide-vue-next'
</script>