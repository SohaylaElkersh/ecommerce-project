<template>
    <div class="main">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <div class="card">
            <div class="icon">
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="content">
                <h2>10.5k</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div class="card">
            <div class="icon">
                <i class="fa-solid fa-dollar-sign"></i>
            </div>
            <div class="content">
                <h2>33k</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div class="card">
            <div class="icon">
                <i class="fa-solid fa-bag-shopping"></i>
            </div>
            <div class="content">
                <h2>45.5k</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div class="card">
            <div class="icon">
                <i class="fa-solid fa-thumbs-up"></i>
            </div>
            <div class="content">
                <h2>25k</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'StatsSection'
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