<template>
    <div class="header">
            <span class="header-color">L</span>
            <h4><slot></slot></h4>              
    </div>
</template>

<script>
export default {
    name: 'HeaderColor'
}
</script>

<style scoped>
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

.header h4 {
  font-size: 20px;
  margin: auto 0;
  color: #db4444;
}
</style>