<template>
  <div class="carousel">
    <div
      class="carousel-track" :style="{transform: `translateX(-${currentIndex * 100}%)`, transition: isTransitioning ? 'transform 0.6s ease' : 'none'}">
      <div
        class="slide"
        v-for="(slide, index) in computedSlides" :key="index" :style="{ backgroundImage: `url(${slide.image})` }">
        <div class="overlay">
          <div class="content">
            <p class="brand">{{ slide.p }}</p>
            <h1>{{ slide.title }}</h1>
            <a href="#" class="shop">Shop Now →</a>
          </div>
        </div>
      </div>
    </div>

    <div class="dots">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        :class="{
          active:
            index ===
            ((currentIndex - 1 + slides.length) % slides.length)
        }"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 1, 
      interval: null,
      isTransitioning: true,
      slides: [
        {
          p: "Power meets elegance",
          title: "Best Deals Today",
          image: require("../../assets/carousel/young-happy-women-with-shopping-bags-walking-street.jpg")
        },
        {
          p: "For first-time users",
          title: "Up to 10% off Voucher",
          image: require("../../assets/carousel/young-happy-women-with-shopping-bags-walking-street.jpg")
        },
        {
          p: "Designed for the future",
          title: "New Arrivals",
          image: require("../../assets/carousel/young-happy-women-with-shopping-bags-walking-street.jpg")
        },
        {
          p: "Upgrade your everyday",
          title: "Limited Offers",
          image: require("../../assets/carousel/young-happy-women-with-shopping-bags-walking-street.jpg")
        },
        {
          p: "More value, less price",
          title: "Exclusive Discounts",
          image: require("../../assets/carousel/young-happy-women-with-shopping-bags-walking-street.jpg")
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
      }, 3000);
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

.carousel-track {
  display: flex;
  height: 100%;
}

.slide {
  min-width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}

.overlay {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
}

.content {
  color: white;
  padding-left: 60px;
  max-width: 500px;
}

.brand {
  opacity: 0.7;
  margin-bottom: 10px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.shop {
  color: white;
  text-decoration: none;
  font-size: 14px;
}

.dots {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
}

.dots span {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 5px;
  background: gray;
  border-radius: 50%;
}

.dots span.active {
  background: #db4444;
  border: solid 2px #fff;
}
</style>
