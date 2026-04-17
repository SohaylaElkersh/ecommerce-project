<template>
  <div class="header-color">
    <div class="header-color__top">
      <span class="header-color__badge">L</span>
      <h4 class="header-color__small">
        <slot name="small"></slot>
      </h4>              
    </div>
    <h2 class="header-color__big">
      <slot name="big"></slot>
    </h2>
  </div>
</template>

<script>
export default {
    name: 'HeaderColor'
}
</script>

<style scoped>
.header-color {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 30px;
}

.header-color__top {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 20px;
}

.header-color__badge {
  padding: 10px 4px;
  border-radius: 4px;
  background-color: #db4444;
  color: #db4444;
}

.header-color__small {
  font-size: 20px;
  margin: auto 0;
  color: #db4444;
}

.header-color__big {
  margin-top: 0px;
  margin-bottom: 15px;
}
</style>