<template>
    <div class="notfound">
        <h1>404 Not Found</h1>
        <p>You visited not found page.  you may go home page.</p>
        <router-link to="/" class="btn">Back to home page</router-link>
    </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.notfound {
  text-align: center;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.notfound h1 {
  font-size: 70px;
  color: #000;
  margin: 0;
  letter-spacing: 5px;
}

.notfound p {
  font-size: 18px;
  color: #000;
}

.notfound .btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #DB4444;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.5s ease;
}

.notfound .btn:hover {
  background-color: #c03939;
  transform: translateY(-5px);
}
</style>