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

<script>
import BreadcrumbHeader from '@/components/layout/shared/BreadcrumbHeader.vue';
import StorySection from '@/components/about/StorySection.vue';
import StatsSection from '@/components/about/StatsSection.vue';
import TeamSection from '@/components/about/TeamSection.vue';   
import QualitySection from '@/components/layout/shared/QualitySection.vue';

export default {
  name: 'AboutUs',
  components: {
    BreadcrumbHeader,
    StorySection,
    StatsSection,
    TeamSection,
    QualitySection,
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/pages/AboutUs.scss"
</style>