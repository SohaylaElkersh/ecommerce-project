<template>
  <div class="carousel">
    <button class="carousel__nav carousel__nav--left" @click="prevSlide">
      <span class="carousel__nav-inner">
        <i class="fa-solid fa-arrow-left"></i>
      </span>
    </button>
    <button class="carousel__nav carousel__nav--right" @click="nextSlide">
      <span class="carousel__nav-inner">
        <i class="fa-solid fa-arrow-right"></i>
      </span>
    </button>
    <div class="carousel__track" :style="{ transform: `translateX(-${currentIndex * 100}%)`, transition: isTransitioning ? 'transform 0.6s ease' : 'none'}">
      <div class="carousel__slide" v-for="(slide, index) in computedSlides" :key="index" :style="{ backgroundImage: `url(${slide.image})` }">
        <div class="carousel__overlay">
          <div class="carousel__content">
            <p class="carousel__brand">{{ slide.description }}</p>
            <h1 class="carousel__title">{{ slide.title }}</h1>
            <a href="#" class="carousel__link">Shop Now →</a>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel__dots">
      <span v-for="(slide, index) in slides" :key="index" class="carousel__dot" :class="{
          'carousel__dot--active': index === ((currentIndex - 1 + slides.length) % slides.length)
        }"></span>
    </div>
  </div>
</template>

<script setup>
import carouselBackground from '@/assets/images/carousel/young-happy-women-with-shopping-bags-walking-street.jpg'
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';

const currentIndex = ref(1)
const interval = ref(null)

// Controls CSS transition enabling/disabling for seamless looping
const isTransitioning = ref(true)

const slides = ref([
  {
    description: "Power meets elegance",
    title: "Best Deals Today",
    image: carouselBackground
  },
  {
    description: "For first-time users",
    title: "Up to 10% off Voucher",
    image: carouselBackground
  },  
  {
    description: "Designed for the future",
    title: "New Arrivals",
    image: carouselBackground
  },
  {
    description: "Upgrade your everyday",
    title: "Limited Offers",
    image: carouselBackground
  },
  {
    description: "More value, less price",
    title: "Exclusive Discounts",
    image: carouselBackground
  }   
])

const computedSlides = computed(() => [
  slides.value[slides.value.length - 1], 
  ...slides.value,
  slides.value[0] 
])

function startAutoSlide() {
    interval.value = setInterval(() => {
      currentIndex.value++;
    }, 10000);
}

function nextSlide() {
  currentIndex.value++;
}

function prevSlide() {
  currentIndex.value--;
}

onMounted(() =>  {
  startAutoSlide()
})

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(currentIndex, (newIndex) => {
  if (newIndex === slides.value.length + 1) {
    setTimeout(() => {
      isTransitioning.value = false
      currentIndex.value = 1
    }, 600)
  }

  if (newIndex === 0) {
    setTimeout(() => {
      isTransitioning.value = false
      currentIndex.value = slides.value.length
    }, 600)
  }

  setTimeout(() => {
    isTransitioning.value = true
  }, 650)
})
</script>

<style lang="scss">
@import "@/assets/styles/components/home/CarouselSection.scss";
</style>



// Behavior:
//   Auto-slides every 10 seconds
//   Manual navigation via next/prev buttons
//   Infinite looping implemented using cloned slides + index reset logic