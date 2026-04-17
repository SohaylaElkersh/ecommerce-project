<template>
    <div class="story">
            <div class="story__content">
                <h2 class="story__title">Our Story</h2>
                <p class="story__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur. Sed at ligula a nisl convallis fermentum. Curabitur ac odio nec nisi efficitur tincidunt. Nulla facilisi. Proin ut ligula a nunc bibendum bibendum. Maecenas in velit sed enim commodo tincidunt. Donec at felis id metus efficitur efficitur.</p>
                <p class="story__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, vitae. Nihil excepturi iusto eligendi, obcaecati praesentium laudantium aliquam cupiditate quisquam.</p>
            </div>
            <img class="story__image" src="../../assets/about/portrait-two-young-stylish-smiling-blond-women-holding-shopping-bags-women-dressed-summer-hipster-clothes-positive-models-posing-pink-wall.jpg" alt="About Us Image">
    </div>
</template>

<script>
export default {
  name: 'StorySection'
}
</script>

<style scoped>
.story {
    display: flex;
    flex-direction: row;
    padding: 50px 90px;
    margin: 50px;
    gap: 70px;
}

.story__content {
    flex: 1;
    text-align: left;
}

.story__title {
    font-size: 48px;
    margin-bottom: 15px;
}

.story__text {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 10px;
}

.story__image {
    width: 500px;
    height: auto;
}
</style>