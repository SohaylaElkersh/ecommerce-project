<template>
  <div class="main-header">
    <div class="header">
      <span class="header-color">L</span>
      <h4><slot name="small"></slot></h4>              
    </div>
    <h2><slot name="big"></slot></h2>
  </div>
</template>

<script>
export default {
    name: 'HeaderColor'
}
</script>

<style scoped>
.main-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 30px;
}

.header {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 20px;
}

.header-color {
  padding: 10px 4px;
  border-radius: 4px;
  background-color: #db4444;
  color: #db4444;
}

h4 {
  font-size: 20px;
  margin: auto 0;
  color: #db4444;
}

h2 {
  margin-top: 0px;
  margin-bottom: 15px;
}
</style>