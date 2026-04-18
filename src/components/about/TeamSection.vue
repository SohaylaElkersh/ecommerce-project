<template>
  <div class="team">
    <div class="team__card" v-for="(member, index) in team" :key="index">
      <img class="team__image" :src="member.image" alt="">
      <h4 class="team__name">{{ member.name }}</h4>
      <p class="team__role">{{ member.role }}</p>
      <div class="team__socials">
        <a class="team__social-link" v-for="social in member.socials"  :key="social.icon"  :href="social.url">
          <i :class="['fa-brands', social.icon, 'team__social-icon']"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import founderPic from '@/assets/images/about/team/corporate-headshots-professional-photography-connecticut-ct-photo-studio-nlalor-3.jpg'
import coFounderPic from '@/assets/images/about/team/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg'
import marketingDirectorPic from '@/assets//images/about/team/c76b3f38a6b60c338d6534b4eacc9af2.jpg'
import salesManagerPic from '@/assets/images/about/team/man-portrait-posing-loft-modern-space.jpg'

export default {
  name: 'TeamSection',
  data() {
    return {
      team: [
        {
          name: "Jane Smith",
          role: "Founder & CEO",
          image: founderPic,
          socials: [
            { icon: "fa-twitter", url: "#" },
            { icon: "fa-instagram", url: "#" },
            { icon: "fa-linkedin-in", url: "#" }
          ]
        },
        {
          name: "John Doe",
          role: "Co-Founder & COO",
          image: coFounderPic,
          socials: [
            { icon: "fa-twitter", url: "#" },
            { icon: "fa-instagram", url: "#" },
            { icon: "fa-linkedin-in", url: "#" }
          ]
        },
        {
          name: "Samanth White",
          role: "Marketing Director",
          image: marketingDirectorPic,
          socials: [
            { icon: "fa-twitter", url: "#" },
            { icon: "fa-instagram", url: "#" },
            { icon: "fa-linkedin-in", url: "#" }
          ]
        },
        {
          name: "William Brown",
          role: "Sales Manager",
          image: salesManagerPic,
          socials: [
            { icon: "fa-twitter", url: "#" },
            { icon: "fa-instagram", url: "#" },
            { icon: "fa-linkedin-in", url: "#" }
          ]
        }
      ]
    };
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/components/about/TeamSection.scss"
</style>