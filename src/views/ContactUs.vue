<template>
    <div class="main">
        <div class="contact-img">
            <img src="../assets/contact/cyber-monday-shopping-sales.jpg" alt="contact">
        </div>
        <div class="card">
            <div class="call">
                <div class="header">
                    <i class="fa-solid fa-phone"></i>
                    <h2>Call Us</h2>
                </div>
                <p>We are available 24/7, 7 days a week</p>
                <p>+1 800 123 4567</p>
            </div>
            <div class="mail">
                <div class="header">
                    <i class="fa-solid fa-envelope"></i>
                    <h2>Write to Us</h2>
                </div>
                <p>Fill out our form and we will contact you within 24 hours.</p>
            </div>
            <div class="form">
                <div>
                  <BaseInput placeholder="Your Name" v-model="name" />
                  <BaseInput type="email" placeholder="Your Email" v-model="email" />
                </div>
                <textarea name="message" id="message" cols="20" rows="7" placeholder="Your Message"></textarea>
            </div>
            <BaseButton>Send Message</BaseButton>
        </div>
    </div>
</template>

<script>
import BaseButton from '@/layout/shared/BaseButton.vue';
import BaseInput from '@/layout/shared/BaseInput.vue';

export default {
  name: "ContactUs",
  components: {
    BaseButton,
    BaseInput
  }
}
</script>

<style scoped>  
.main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    margin: 20px;
    gap: 40px;
}

.contact-img {
    width: 50%;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.contact-img img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    width: 50%;
    padding: 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
}

.call, .mail {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
}

.call {
    border-bottom: rgb(184, 184, 184) solid 1px;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
}

.header i {
    font-size: 20px;
    color: #fff;
    background-color: #db4444;
    border-radius: 50%;
    padding: 10px;
}

.header h2 {
    font-size: 18px;
    color: #000;
}

.call p, .mail p {
    font-size: 14px;
    color: #000;
    margin-top: 0px;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    width: 90%;
}

.form div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 100%;
    margin-top: 0px;
}

.form textarea {
    width: 100%;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 4px;
    border: none;
}

.form textarea:focus {
    border: 1px solid #ccc;
    outline: none;
}
</style>