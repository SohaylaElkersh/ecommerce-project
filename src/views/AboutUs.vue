<template>
    <div class="about">
      <BreadcrumbHeader class="about__breadcrumb"/>
      <div class="about__content">
          <StorySection />
          <StatsSection />
          <TeamSection />
          <QualitySection />
      </div>
    </div>
</template>

<script setup>
import BreadcrumbHeader from '@/components/navigation/BreadcrumbHeader.vue';
import StorySection from '@/components/about/StorySection.vue';
import StatsSection from '@/components/about/StatsSection.vue';
import TeamSection from '@/components/about/TeamSection.vue';   
import QualitySection from '@/components/sections/QualitySection.vue';
</script>

<style lang="scss">
@import "@/assets/styles/pages/AboutUs.scss"
</style>