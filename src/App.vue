<template lang="en">
  <header>
    <h1>Hannah Scooler</h1>
    <section class="nav-bar">
      <router-link to="/">
        <button class="nav-button">ABOUT ME</button>
      </router-link>
      <router-link to="/resume">
        <button class="nav-button">RESUME</button>
      </router-link>
      <router-link to="/reading">
        <button class="nav-button">READING</button>
      </router-link>
      <router-link to="/contact">
        <button class="nav-button">CONTACT</button>
      </router-link>
    </section>
  </header>
  <body class="main">
    <router-view></router-view>
  </body>
  <br />
  <footer>
    <h3>Last updated July 17th, 2023</h3>
  </footer>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  created() {
    document.documentElement.setAttribute('lang', 'en');
  }
}
</script>

<style>
#app {
  font-family: "Times New Roman";
}
h1 {
  font-size: 80px;
  text-align: center;
  font-weight: normal;
  background-color: #2f7f8a57;
  padding-top: 40px;
  padding-bottom: 40px;
  color: #2f7f8a;
} 
h2 {
  font-size: 40px;
  font-weight: normal;
  display: inline-block;
  width: 50%;
  margin-right: 10%;
}
h3 {
  font-size: 18px;
  text-align: center;
  font-weight: lighter;
}
.nav-button {
  font-size: 40px;
  font-weight: normal;
  background-color: #2f7f8a;
  color: white;
}
button {
  height: 90px;
  width: 25%;
  border: 0px;
  padding: 1px 6px;
  display: inline-block;
}
img {
  height: auto;
  margin-left: 5%;
  width: 30%;
  border-radius: 20px;
}
.main {
  margin-top: 50px;
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  float: center;
}
p {
  width: 80%;
  display: inline-block;
  margin-right: 5%;
  font-size: 20px;
}
footer {
  justify-content: center;
  text-align: center;
}
</style>
