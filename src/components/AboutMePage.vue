<template>
    <img src="../assets/profile.jpg" alt="Profile Picture">
    <v-card elevation="0">
      <v-card-title>
        <h2>Hi! I'm Hannah.</h2>
      </v-card-title>
      <v-spacer></v-spacer>
      <v-card-text>
        <p>I am currently completing my senior year at Carleton College in Minnesota, although I am a Massachusetts native. I am working toward a 
            major in Computer Science and a minor in Spanish. 
        </p>
        <br /><br />
        <p>My field of interest is User Experience and User Interface Design (UX/UI), especially promoting accessibility both in designs 
            and within the field. I strive to create functional, cohesive, and accessible websites for people of all backgrounds and aims.
        </p>
        <br /><br />
        <p>Outside of work and school, I love to relax with a good book (see the <router-link to="/reading">Reading page</router-link> for more information). I also participate in Carleton's 
            club ultimate frisbee (as a captain) and club lacrosse teams.  
        </p>
      </v-card-text>
    </v-card>
</template>

<style>
p {
    line-height: 1;
    margin-bottom: 10px;
}
</style>