<template>
  <div class="navbar-wrapper">
    <nav class="navbar">
      <router-link class="navbar-logo" to="/">Galleries<span class="navbar-logo-app">APP</span></router-link>
      <div class="navbar-links">
        <router-link class="navbar-router-link" to="/">Home</router-link>
        <router-link class="navbar-router-link" to="/about">About</router-link>
        <router-link class="navbar-router-link" to="/">Create new</router-link>
      </div>
      <p>profile</p>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .navbar-wrapper {
    background-color:  #3399ff;
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    border-bottom: 5px solid #a6a6a6;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center; 
    height: 100%;
    width: 90%;
    margin: auto;
  }
  .navbar-logo {
    font-size: 40px;
    color: #fff;
    text-decoration: none;
  }
  .navbar-logo-app {
    color: #ff9900;
  }
  .navbar-router-link {
    text-decoration: none;
    padding-right: 50px;
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
    font-size: 18px;
  }
  .navbar-router-link:hover{
    color: #ff9900;
  }
  @media (max-width: 850px) {
        .navbar {
          flex-direction: column;
          justify-content: space-around;
        }
        .navbar-wrapper {
          height: 250px;
          
        }
        .navbar-links {
          display: flex;
          flex-direction: column;
        }
    }
</style>