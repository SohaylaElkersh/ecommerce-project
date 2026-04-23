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

<script setup>
import BreadcrumbHeader from '@/components/navigation/BreadcrumbHeader.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseInput from '@/components/UI/BaseInput.vue';
</script>

<style lang="scss">  
@import "@/assets/styles/pages/ContactUs.scss";
</style>