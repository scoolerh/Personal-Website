<template>
  <div class="container">
    <img src="../assets/profile.jpg" alt="Profile Picture">
    <v-card elevation="0">
      <v-card-title>
        <h2>Hi! I'm Hannah.</h2>
      </v-card-title>
      <v-spacer></v-spacer>
      <v-card-text>
        <p>I recently completed my Bachelor of Arts in Computer Science at Carleton College in Minnesota, with a minor in Spanish. 
          Within Computer Science, my field of interest is User Experience and User Interface Design (UX/UI), especially promoting 
          accessibility both in my sites and in the field in general. I strive to create functional, cohesive, and accessible websites 
          for people of all backgrounds and aims.
        </p>
        <br /><br />
        <p>Outside of work and school, I love to relax with a good book (see the <router-link to="/reading">Reading page</router-link> for more information).
          I also enjoy playing Ultimate Frisbee and spending time with my adorable nieces and nephew. I am currently located in Tucson, AZ, which is definitely
          a big change from Minnesota! 
        </p>
      </v-card-text>
    </v-card>    
  </div>
</template>

<style>
p {
  line-height: 1;
  margin-bottom: 10px;
}
.container img {
  height: auto;
  border-radius: 20px;
  width: 40%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (min-width: 1024px) {
  .container {
    flex-direction: row;
  }
  .container img {
    margin-right: 2%;
    width: 30%;
  }
}
</style>