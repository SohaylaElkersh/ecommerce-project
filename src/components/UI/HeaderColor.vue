<template>
  <div class="header-color">
    <div class="header-color__top">
      <span class="header-color__badge">L</span>
      <h4 class="header-color__small">
        <slot name="small" />
      </h4>              
    </div>
    <h2 class="header-color__big">
      <slot name="big" />
    </h2>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/components/UI/HeaderColor.scss"
</style>