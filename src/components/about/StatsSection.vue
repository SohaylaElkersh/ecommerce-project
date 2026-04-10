<template>
    <div class="main">
        <div class="card" v-for="(stat, index) in stats" :key="index">
            <div class="icon">
              <i :class="stat.i"></i>
            </div>
            <div class="content">
              <h2>{{ stat.h2 }}</h2>
              <p>{{ stat.p }}</p>
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
        {i:'fa-solid fa-user', h2: '10.5k', p: 'Lorem ipsum dolor sit amet.'},
        {i:'fa-solid fa-dollar-sign', h2: '33.k', p: 'Lorem ipsum dolor sit amet.'},
        {i:'fa-solid fa-bag-shopping', h2: '45.5k', p: 'Lorem ipsum dolor sit amet.'},
        {i:'fa-solid fa-thumbs-up', h2: '25k', p: 'Lorem ipsum dolor sit amet.'},
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