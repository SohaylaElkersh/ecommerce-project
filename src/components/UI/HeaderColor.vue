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

<style lang="scss">
@import "@/assets/styles/layout/UI/HeaderColor.scss"
</style>