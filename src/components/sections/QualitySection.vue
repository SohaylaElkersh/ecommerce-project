<template>
    <div class="quality">
        <div class="quality__card" v-for="(quality, index) in qualities" :key="index">
          <div class="quality__icon">
            <img class="quality__image" :src="quality.img" alt="">
          </div>
          <div class="quality__content">
            <h2 class="quality__title">{{ quality.title }}</h2>
            <p class="quality__description">{{ quality.description }}</p>
          </div>
        </div>
    </div>
</template>

<script setup>
import deliveryIcon from '@/assets/images/quality-section/icons8-delivery-50.png'
import customerServiceIcon from '@/assets/images/quality-section/icons8-customer-service-50.png'
import guaranteeIcon from '@/assets/images/quality-section/icons8-guarantee-50.png'


const qualities = [
  {
    img: deliveryIcon,
    title: 'FREE AND FAST DELIVERY',
    description: 'Free delivery for all orders over $140'
  },
  {
    img: customerServiceIcon,
    title: '24/7 CUSTOMER SERVICE', 
    description: 'Friendly 24/7 customer support'
  },
  {
    img: guaranteeIcon,
    title: 'MONEY BACK GUARANTEE',
    description: 'We return money within 30 days'
  },
]
</script>

<style lang="scss">
@import "@/assets/styles/components/sections/QualitySection.scss";
</style>