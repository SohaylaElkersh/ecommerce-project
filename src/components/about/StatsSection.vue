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

<script>
export default {
  name: 'StatsSection',
  data() {
    return {
      stats: [
        {icon:'fa-solid fa-user', title: '10.5k', description: 'Lorem ipsum dolor sit amet.'},
        {icon:'fa-solid fa-dollar-sign', title: '33.k', description: 'Lorem ipsum dolor sit amet.'},
        {icon:'fa-solid fa-bag-shopping', title: '45.5k', description: 'Lorem ipsum dolor sit amet.'},
        {icon:'fa-solid fa-thumbs-up', title: '25k', description: 'Lorem ipsum dolor sit amet.'},
      ]
    }
  },
}
</script>

<style scoped>
.stats {
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  padding: 50px 30px;
  gap: 10px;
  margin: 50px;
}

.stats__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 300px;
  border: rgb(178, 178, 178) solid 1px;
  border-radius: 4px;
  background-color: #fff;
  padding: 30px;
}

.stats__card:hover {
  background-color: #db4444;
  color: #fff;
  transform: translateY(-10px);
  border: none;
  transition: all 0.5s ease;
}

.stats__icon {
  width: 50px;
  height: 50px;
  background-color: #000;
  border-radius: 50%;
  outline: 8px solid #c1c0c1;
}

.stats__card:hover .stats__icon{
  background-color: #fff;
  outline: 8px solid #e67c7c;
}

.stats__icon i {
  color: #fff;
  transform: translateY(45%);
  font-size: 25px;
}

.stats__card:hover .stats__icon i {
  color: #000;
}

.stats__title {
  font-size: 18px;
  margin: 0;
  color: #000;
}

.stats__description {
  margin: 10px 0 0 0;
  font-size: 14px;
  color: #000;
}

.stats__card:hover .stats__title,
.stats__card:hover .stats__description {
  color: #fff;
}
</style>