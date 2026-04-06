<template>
    <div class="main">
        <StorySection />
        <StatsSection />
        <TeamSection />
        <QualitySection />
    </div>
</template>

<script>
import StorySection from '@/components/about/StorySection.vue';
import StatsSection from '@/components/about/StatsSection.vue';
import TeamSection from '@/components/about/TeamSection.vue';   
import QualitySection from '@/layout/shared/QualitySection.vue';

export default {
  name: 'AboutUs',
  components: {
    StorySection,
    StatsSection,
    TeamSection,
    QualitySection,
  }
}
</script>

<style scoped>
/* .main {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 20px;
} */
</style>