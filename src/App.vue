<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="clock">{{ now | moment("HH:mm:ss") }}</div>
        <div class="date">{{ now | moment("dddd, MMMM Do YYYY") }}</div>
        <div class="inline-icons">
          <a href="https://facebook.com"><icon name="facebook-square" scale="5"></icon></a>
          <a href="https://youtube.com"><icon name="youtube-play" scale="5"></icon></a>
          <a href="https://reddit.com"><icon name="reddit-alien" scale="5"></icon></a>
          <a href="https://github.com"><icon name="github-alt" scale="5"></icon></a>
          <a href="https://git.boerlage.me"><icon name="gitlab" scale="5"></icon></a>
          <a href="https://news.ycombinator.com"><icon name="hacker-news" scale="5"></icon></a>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

  export default {
    name: 'app',
    created() {
      setInterval(() => {
        this.now = Date.now();
      }, 1000);
    },
    data() {
      return {
        now: Date.now(),
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
    display: inline-flex;
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

  .clock {
    font-size: 7rem;
    color: #828282;
  }

  .date {
    font-size: 2rem;
    color: #828282;
    margin-bottom: 3rem;
  }
</style>
