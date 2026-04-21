<template>
    <div class="stats">
        <div class="stats__card" v-for="(stat, index) in stats" :key="index">
            <div class="stats__icon">
              <i :class="stat.icon"></i>
            </div>
            <div class="stats__content">
              <h2 class="stats__title">{{ stat.title }}</h2>
              <p class="stats__description">{{ stat.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const stats = ref ([
  {icon:'fa-solid fa-user', title: '10.5k', description: 'Lorem ipsum dolor sit amet.'},
  {icon:'fa-solid fa-dollar-sign', title: '33.k', description: 'Lorem ipsum dolor sit amet.'},
  {icon:'fa-solid fa-bag-shopping', title: '45.5k', description: 'Lorem ipsum dolor sit amet.'},
  {icon:'fa-solid fa-thumbs-up', title: '25k', description: 'Lorem ipsum dolor sit amet.'}
])
</script>

<style lang="scss">
@import "@/assets/styles/components/about/StatsSection.scss"
</style>