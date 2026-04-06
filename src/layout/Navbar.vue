<template>
  <header class="navbar">
    <div class="container navbar__content">
      
      <div class="navbar__logo">
        Exclusive
      </div>

      <nav class="navbar__links">
        <router-link to="/">Home</router-link>
        <router-link to="/explore">Explore</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/about">About</router-link>
      </nav>

      <div class="navbar__actions">
        <div class="search-box">
          <input type="text" placeholder="What are you looking for?"/>
            <div class="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
        </div>
        <div class="cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
           <circle cx="9" cy="21" r="1"></circle>
           <circle cx="20" cy="21" r="1"></circle>
           <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: "AppNavbar"
}
</script>

<style scoped>
.navbar {
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
  margin-bottom: 50px;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

.navbar__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.navbar__logo {
  font-weight: bold;
  font-size: 23px;
}

.navbar__links a {
  display: inline-block;
  margin: 0 30px;
  text-decoration: none;
  color: #333;
  transition: transform 0.5s ease, color 0.5s ease;
}

.navbar__links a:hover {
  color: #000;
  text-decoration: underline;
  transform: scale(1.1);
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-box {
  position: relative;
  margin-right: 70px;
}

.search-box input {
  padding: 10px 60px 10px 12px;
  border: 1px solid #ffffff;
  background-color: #f6f6f6;
  color: #888;
  font-size: 14px;
  outline: none;
  border-radius: 4px;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #000;
  cursor: pointer;
}

.cart {
  cursor: pointer;
}
</style>