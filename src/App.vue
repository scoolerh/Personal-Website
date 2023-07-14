<template lang="en">
  <header class="banner">
    <h1>Hannah Scooler</h1>
  </header>
  <section class="nav-bar">
    <button class="nav-button">ABOUT ME</button>
    <button class="nav-button">RESUME</button>
    <button class="nav-button">READING</button>
    <button class="nav-button">CONTACT</button>
  </section>
  <body class="main">
    <img src="./assets/profile.jpg" alt="Profile Picture">
    <v-card elevation="0">
      <v-card-title>
        <h2>Hi! I'm Hannah.</h2>
      </v-card-title>
      <v-spacer></v-spacer>
      <v-card-text>
        <p>I am currently completing my senior year at Carleton College in Minnesota, although I am a Massachusetts native.
          More text will go here when I feel narcissistic and alive enough to write about myself.
        </p>
        <br /><br />
        <p>In this paragraph I will probably talk about my career goals/personal statement. 
          eg ux/ui design and accessibility as well as making computer science a more accessible and 
          open field, particularly for gender and racial minorities because i'm tired of white men
        </p>
        <br /><br />
        <p>I'll probably wrap up here by talking about my hobbies (aka frisbee and reading)
          and go into enough depth that the text lines up perfectly with the height of the image
        </p>
      </v-card-text>
    </v-card>
  </body>
  <br />
  <footer>
    Copyright
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
  background-color: white;
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
  border-radius: 20px;
}
p {
  width: 80%;
  display: inline-block;
  margin-right: 5%;
  font-size: 20px;
}
</style>
