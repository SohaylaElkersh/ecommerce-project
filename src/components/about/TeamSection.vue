<template>
  <div class="main">
    <div class="card" v-for="(member, index) in team" :key="index">
      <img :src="member.image" alt="">
      <h4>{{ member.name }}</h4>
      <p>{{ member.role }}</p>

      <div class="social-icons">
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin-in"></i>
      </div>
    </div>
  </div>
</template>

<script>
import team from '../../models/team.js';

export default {
  name: 'TeamSection',
  data() {
    return {
      team
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
</style>