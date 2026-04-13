<template>
    <div class="main-section">
        <div class="card" v-for="(quality, index) in qualities" :key="index">
          <div class="icon">
            <img :src="quality.img" alt="">
          </div>
          <div class="content">
            <h2>{{ quality.title }}</h2>
            <p>{{ quality.description }}</p>
          </div>
        </div>
    </div>
</template>

<script>
import deliveryIcon from '../../assets/quality-section-icons/icons8-delivery-50.png'
import customerServiceIcon from '../../assets/quality-section-icons/icons8-customer-service-50.png'
import guaranteeIcon from '../../assets/quality-section-icons/icons8-guarantee-50.png'

export default {
  name: "QualitySection",
  data() {
    return {
      qualities: [
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
    }
  },
}
</script>

<style scoped>
.main-section {
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  padding: 50px 30px;
  width: 100%;
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