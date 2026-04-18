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

    <div
      class="carousel__track"
      :style="{
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: isTransitioning ? 'transform 0.6s ease' : 'none'}">
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

<script>
import carouselBackground from '@/assets/images/carousel/young-happy-women-with-shopping-bags-walking-street.jpg'

export default {
  data() {
    return {
      currentIndex: 1, 
      interval: null,
      isTransitioning: true,
      slides: [
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
      ]
    };
  },

  computed: {
    computedSlides() {
      return [
        this.slides[this.slides.length - 1], 
        ...this.slides,
        this.slides[0] 
      ];
    }
  },

  mounted() {
    this.startAutoSlide();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.currentIndex++;
      }, 10000);
    },
    nextSlide() {
      this.currentIndex++;
    },
    prevSlide() {
      this.currentIndex--;
    }    
  },

  watch: {
    currentIndex(newIndex) {
      if (newIndex === this.slides.length + 1) {
        setTimeout(() => {
          this.isTransitioning = false;
          this.currentIndex = 1;
        }, 600);
      }
      if (newIndex === 0) {
        setTimeout(() => {
          this.isTransitioning = false;
          this.currentIndex = this.slides.length;
        }, 600);
      }
      setTimeout(() => {
        this.isTransitioning = true;
      }, 650);
    }
  }
};
</script>

<style scoped>
.carousel {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
}

.carousel__track {
  display: flex;
  height: 100%;
}

.carousel__slide {
  min-width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}

.carousel__overlay {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
}

.carousel__content {
  color: white;
  max-width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.carousel__brand {
  opacity: 0.7;
  margin-bottom: 10px;
}

.carousel__title {
  font-size: 2rem;
  margin-bottom: 10px;
}

.carousel__link {
  color: white;
  text-decoration: none;
  font-size: 14px;
}

.carousel__dots {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
}

.carousel__dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 5px;
  background: gray;
  border-radius: 50%;
}

.carousel__dot--active {
  background: #db4444;
  border: solid 2px #fff;
}

.carousel__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 20px;
  padding: 13px 15px;
  cursor: pointer;
  border-radius: 60%;
  z-index: 10;
  transition: all 0.5s ease;
}

.carousel__nav-inner {
  display: inline-block;
  transition: transform 0.3s ease;
}

.carousel__nav--left {
  left: 15px;
}

.carousel__nav--right {
  right: 15px;
}

.carousel__nav:hover {
  background: rgba(0, 0, 0, 0.8);
}

.carousel__nav:hover .carousel__nav-inner {
  transform: scale(1.1);
}
</style>