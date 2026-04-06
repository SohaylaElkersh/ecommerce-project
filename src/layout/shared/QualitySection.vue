<template>
    <div class="main">
        <div class="card">
            <div class="icon">
                <img width="50" height="50" src="../../assets/icons/icons8-delivery-50.png" alt="delivery"/>
            </div>
            <div class="content">
                <h2>FREE AND FAST DELIVERY</h2>
                <p>Free delivery for all orders over $140</p>
            </div>
        </div>

        <div class="card">
            <div class="icon">
               <img width="50" height="50" src="../../assets/icons/icons8-customer-service-50.png" alt="headset--v1"/>
            </div>
            <div class="content">
                <h2>24/7 CUSTOMER SERVICE</h2>
                <p>Friendly 24/7 customer support</p>
            </div>
        </div>

        <div class="card">
            <div class="icon">
                <img width="50" height="50" src="../../assets/icons/icons8-guarantee-50.png" alt="guarantee"/>
            </div>
            <div class="content">
                <h2>MONEY BACK GUARANTEE</h2> 
                <p>We return money within 30 days</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "QualitySection"
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