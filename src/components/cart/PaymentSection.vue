<template>
    <div class="main">
        <div class="payment">
          <div class="money" v-for="(amount, index) in money" :key="index">
            <p>{{ amount.p1 }}:</p>
            <p>${{ amount.p2 }}</p>
          </div>
          <div class="payment-method">
            <h4>Payment Method:</h4>
            <div class="method">
              <input type="radio" id="bank" name="method" />
              <label for="bank">Bank</label>
            </div>
            <div class="method">
              <input type="radio" id="cash" name="method" />
              <label for="cash">Cash on delivery</label>
            </div>
          </div>
        </div>
        <div class="coupon">
          <input type="text" placeholder="Coupon Code" />
          <button type="button">Apply</button>
        </div>
        <div class="btn">
          <button type="button">Place Order</button>
        </div>
      </div>        
</template>

<script>
export default {
  name: 'PaymentSection',
  data() {
    return {
      money: [
        {p1: 'Subtotal', p2: '123'},
        {p1: 'Shipping', p2: '12'},
        {p1: 'Total', p2: '1234'}
      ]
    }
  }
}
</script>

<style scoped>
.payment {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
}

.money {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: #ccc solid 2px;
  width: 100%;
  gap: 15px;
}

.payment-method {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.method label {
  margin-left: 10px;
}

.method input {
  accent-color: #000;
}

.coupon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  margin: 25px 0;
}

.coupon input {
  height: 35px;
  border-radius: 4px;
  border: none;
  width: 350px;
  max-width: calc(100% - 140px);
  min-width: 0;
  font-size: 14px;
  background-color: #f5f5f5;
  padding-left: 15px;
  box-sizing: border-box;
}

.coupon button {
  padding: 10px 40px;
  border-radius: 4px;
  color: #fff;
  background-color: #db4444;
  transition: all 0.5s ease;
  border: none;
  margin-left: 20px;
  flex-shrink: 0;
}

.coupon button:hover {
  transform: translateY(-5px);
  background-color: #c03939;
}

.btn {
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
}

.btn button {
  padding: 15px 25px;
  border-radius: 4px;
  color: #fff;
  background-color: #db4444;
  transition: all 0.5s ease;
  border: none;
  width: 200px;
  font-size: 16px;
}

.btn button:hover {
  transform: translateY(-5px);
  background-color: #c03939;
}
</style>