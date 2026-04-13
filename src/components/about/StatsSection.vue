<template>
    <div class="main">
        <div class="card" v-for="(stat, index) in stats" :key="index">
            <div class="icon">
              <i :class="stat.icon"></i>
            </div>
            <div class="content">
              <h2>{{ stat.title }}</h2>
              <p>{{ stat.description }}</p>
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
.main {
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  padding: 50px 30px;
  gap: 10px;
  margin: 50px;
}

.card {
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

.card:hover {
  background-color: #db4444;
  color: #fff;
  transform: translateY(-10px);
  border: none;
  transition: all 0.5s ease;
}

.icon {
  width: 50px;
  height: 50px;
  background-color: #000;
  border-radius: 50%;
  outline: 8px solid #c1c0c1;
}

.card:hover .icon{
  background-color: #fff;
  outline: 8px solid #e67c7c;
}

.icon i {
  color: #fff;
  transform: translateY(45%);
  font-size: 25px;
}

.card:hover .icon i {
  color: #000;
}

.content h2 {
  font-size: 18px;
  margin: 0;
  color: #000;
}

.content p {
  margin: 10px 0 0 0;
  font-size: 14px;
  color: #000;
}

.card:hover .content h2,
.card:hover .content p {
  color: #fff;
}
</style>