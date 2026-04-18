<template>
    <div class="contact">
        <BreadcrumbHeader class="contact__breadcrumb"/>
        <div class=" contact__wrapper">
            <div class="contact__image-wrapper">
                <img class="contact__image" src="@/assets/images/contact/cyber-monday-shopping-sales.jpg" alt="contact">
            </div>
            <div class="contact__card">
                <div class="contact__section contact__section--call">
                    <div class="contact__header">
                        <i class="fa-solid fa-phone contact__icon"></i>
                        <h2 class="contact__title">Call Us</h2>
                    </div>
                    <p class="contact__text">We are available 24/7, 7 days a week</p>
                    <p class="contact__text">+1 800 123 4567</p>
                </div>
                <div class="contact__section contact__section--mail">
                    <div class="contact__header">
                        <i class="fa-solid fa-envelope contact__icon"></i>
                        <h2 class="contact__title">Write to Us</h2>
                    </div>
                    <p class="contact__text">Fill out our form and we will contact you within 24 hours.</p>
                </div>
                <div class="contact__form">
                    <div class="contact__form-row">
                      <BaseInput placeholder="Your Name" v-model="name" />
                      <BaseInput type="email" placeholder="Your Email" v-model="email" />
                    </div>
                    <textarea class="contact__textarea" name="message" id="message" cols="20" rows="7" placeholder="Your Message"></textarea>
                </div>
                <BaseButton>Send Message</BaseButton>
            </div>  
        </div>             
    </div>
</template>

<script>
import BreadcrumbHeader from '@/components/layout/shared/BreadcrumbHeader.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseInput from '@/components/UI/BaseInput.vue';

export default {
  name: "ContactUs",
  components: {
    BreadcrumbHeader,
    BaseButton,
    BaseInput
  }
}
</script>

<style scoped>  
.contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 20px 50px;
    gap: 20px;
}

.contact__breadcrumb {
    margin-left: 20px;
}

.contact__wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 20px;
    gap: 40px;
}

.contact__image-wrapper {
    width: 50%;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.contact__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.contact__card {
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

.contact__section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
}

.contact__section--call {
    border-bottom: rgb(184, 184, 184) solid 1px;
}

.contact__header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
}

.contact__icon {
    font-size: 20px;
    color: #fff;
    background-color: #db4444;
    border-radius: 50%;
    padding: 10px;
}

.contact__title {
    font-size: 18px;
    color: #000;
}

.contact__text {
    font-size: 14px;
    color: #000;
    margin-top: 0px;
}

.contact__form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    width: 90%;
}

.contact__form-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 100%;
    margin-top: 0px;
}

.contact__textarea {
    width: 100%;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 4px;
    border: none;
}

.contact__textarea:focus {
    border: 1px solid #ccc;
    outline: none;
}
</style>