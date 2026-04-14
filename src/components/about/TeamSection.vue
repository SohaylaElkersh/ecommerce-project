<template>
  <div class="main">
    <div class="card" v-for="(member, index) in team" :key="index">
      <img :src="member.image" alt="">
      <h4>{{ member.name }}</h4>
      <p>{{ member.role }}</p>

      <div class="social-icons">
        <a v-for="social in member.socials" :key="social.icon" :href="social.url">
          <i :class="['fa-brands', social.icon]"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import founderPic from '../../assets/about/corporate-headshots-professional-photography-connecticut-ct-photo-studio-nlalor-3.jpg'
import coFounderPic from '../../assets/about/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg'
import marketingDirectorPic from '../../assets/about/c76b3f38a6b60c338d6534b4eacc9af2.jpg'
import salesManagerPic from '../../assets/about/man-portrait-posing-loft-modern-space.jpg'

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

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  padding: 50px 30px;
  margin: 50px;
  gap: 10px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 50px 30px;
}

.card img {
  width: 200px;
  height: auto;
}

.card h4 {
  font-size: 22px;
  margin: 0;
}

.card p {
  font-size: 16px;
  margin: 0;
}

.social-icons {
  display: flex;
  gap: 10px;
  font-size: 20px;
}

.social-icons a 
{
  color: black;
  transition: all 0.5s ease; 
}

.social-icons a:hover {
  transform: scale(1.2);
}
</style>