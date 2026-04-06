<template>
    <div class="main">
            <div class="content">
                <h2>Our Story</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur. Sed at ligula a nisl convallis fermentum. Curabitur ac odio nec nisi efficitur tincidunt. Nulla facilisi. Proin ut ligula a nunc bibendum bibendum. Maecenas in velit sed enim commodo tincidunt. Donec at felis id metus efficitur efficitur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, vitae. Nihil excepturi iusto eligendi, obcaecati praesentium laudantium aliquam cupiditate quisquam.</p>
            </div>
            <img src="../../assets/portrait-two-young-stylish-smiling-blond-women-holding-shopping-bags-women-dressed-summer-hipster-clothes-positive-models-posing-pink-wall.jpg" alt="About Us Image">
    </div>
</template>

<script>
export default {
  name: 'StorySection'
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: row;
    padding: 50px 90px;
    margin: 50px;
    gap: 70px;
}

.content {
    flex: 1;
    text-align: left;
}

.content h2 {
    font-size: 48px;
    margin-bottom: 15px;
}

.content p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 10px;
}

img {
    width: 500px;
    height: auto;
}
</style>