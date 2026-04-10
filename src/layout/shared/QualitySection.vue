<template>
    <div class="main">
        <div class="card" v-for="(quality, index) in qualities" :key="index">
          <div class="icon">
            <img :src="quality.img" alt="">
          </div>
          <div class="content">
            <h2>{{ quality.h2 }}</h2>
            <p>{{ quality.p }}</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "QualitySection",
  data() {
    return {
      qualities: [
        {
          img: require('../../assets/quality-section-icons/icons8-delivery-50.png'),
          h2: 'FREE AND FAST DELIVERY',
          p: 'Free delivery for all orders over $140'
        },
        {
          img: require('../../assets/quality-section-icons/icons8-customer-service-50.png'),
          h2: '24/7 CUSTOMER SERVICE', p:
          'Friendly 24/7 customer support'
        },
        {
          img: require('../../assets/quality-section-icons/icons8-guarantee-50.png'),
          h2: 'MONEY BACK GUARANTEE',
          p: 'We return money within 30 days'
        },
      ]
    }
  },
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  padding: 50px 30px;
  margin-top: 50px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 300px;
}

.icon {
  width: 50px;
  height: 50px;
  background-color: #000;
  border-radius: 50%;
  outline: 8px solid #c1c0c1;
}

.icon img {
  width: 70%;
  height: 70%;
  transform: translateY(20%);
}

.content h2 {
  font-size: 18px;
  margin: 0;
  color: #000;
}

.content p {
  margin: 10px 0 0 0;
  font-size: 14px;
  color: #000;
}
</style>