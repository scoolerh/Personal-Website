<template lang="en">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">
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
    <h3>Last updated July 19th, 2023</h3>
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
  width: 100%;
  height: 100vh;
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
  margin-top: 2%;
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
.main {
  margin-top: 5%;
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
  display: inline-block;
  margin-right: 5%;
  font-size: 25px;
}
a {
  font-size: 25px;
  color: #2f7f8a;
}
footer {
  justify-content: center;
  text-align: center;
}
/* Smaller screens */
@media (max-width: 768px) {
  p {
    font-size: 5vw;
  }
  a {
    font-size: 5vw;
  }
  h1 {
    font-size: 15vw;
  }
  h2 {
    font-size: 7vw;
  }
  h3 {
    font-size: 4vw;
  }
  .nav-button {
    font-size: 5vw;
  }
}

/* Medium-sized screens */
@media (min-width: 769px) and (max-width: 1024px) {
  p {
    font-size: 4vw;
  }
  a {
    font-size: 4vw;
  }
  h1 {
    font-size: 12vw;
  }
  h2 {
    font-size: 6vw;
  }
  h3 {
    font-size: 1vw;
  }
  .nav-button {
    font-size: 5vw;
  }
}

/* Larger screens */
@media (min-width: 1025px) {
  p {
    font-size: 1.75vw;
  }
  a {
    font-size: 1.75vw;
  }
  h1 {
    font-size: 6vw;
  }
  h2 {
    font-size: 3vw;
  }
  h3 {
    font-size: 1vw;
  }
  .nav-button {
    font-size: 2vw;
  }
}
</style>
