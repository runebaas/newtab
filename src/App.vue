<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="clock">{{ now | moment("HH:mm:ss") }}</div>
        <div class="date">{{ now | moment("dddd, MMMM Do YYYY") }}</div>
        <div class="links">
          <div class="inline-icons">
            <a href="https://facebook.com"><icon :icon="icons.facebook" size="5x"></icon></a>
            <a href="https://twitter.com"><icon :icon="icons.twitter" size="5x"></icon></a>
            <a href="https://reddit.com"><icon :icon="icons.reddit" size="5x"></icon></a>
            <a href="https://news.ycombinator.com"><icon :icon="icons.hackernews" size="5x"></icon></a>
          </div>
          <div class="inline-icons">
            <a href="https://github.com"><icon :icon="icons.github" size="5x"></icon></a>
            <a href="https://git.boerlage.me"><icon :icon="icons.gitlab" size="5x"></icon></a>
            <a href="https://youtube.com"><icon :icon="icons.youtube" size="5x"></icon></a>
            <a href="https://play.google.com/music/listen"><icon :icon="icons.playMusic" size="5x"></icon></a>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
  import {
    faFacebookSquare,
    faYoutube,
    faRedditAlien,
    faGithubAlt,
    faGitlab,
    faHackerNews,
    faTwitter,
    faGooglePlay,
  } from '@fortawesome/fontawesome-free-brands';

  export default {
    name: 'app',
    created() {
      setInterval(() => {
        this.now = Date.now();
      }, 1000);
    },
    components: {
      icon: FontAwesomeIcon,
    },
    data() {
      return {
        now: Date.now(),
        icons: {
          facebook: faFacebookSquare,
          twitter: faTwitter,
          youtube: faYoutube,
          reddit: faRedditAlien,
          github: faGithubAlt,
          gitlab: faGitlab,
          hackernews: faHackerNews,
          playMusic: faGooglePlay,
        },
      };
    },
  };
</script>

<style lang="scss">
  @import "~bulma";

  html {
    overflow: hidden;
  }

  body {
    height: 100vh;
    background-color: #1f1f1f;
  }

  .inline-icons {
    margin-top: 3rem;
    display: inline-flex;
    justify-content: center;
    svg {
      transition: color 0.3s ease;
      margin-right: 3rem;
      margin-left: 3rem;
      color: #828282;
      &:hover{
        color: #ffffff;
      }
    }
  }

  .links {
    display: grid;
  }

  .clock {
    font-size: 7rem;
    color: #828282;
  }

  .date {
    font-size: 2rem;
    color: #828282;
    /*margin-bottom: 3rem;*/
  }
</style>
