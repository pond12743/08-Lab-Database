<template>
  <div id="app">
    <div id="nav" class="bg-image" 
     style="background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgYHBwoSCAcGBhYPBgcHDRsICQgWFBEWFhUREx8YKCggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NFisZFRkrKystNzcrKystKysrKysrKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJIBWgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAwQC/8QAFRABAQAAAAAAAAAAAAAAAAAAABL/xAAaAQEBAQEAAwAAAAAAAAAAAAAAAQMEAgYH/8QAFhEBAQEAAAAAAAAAAAAAAAAAABIR/9oADAMBAAIRAxEAPwDTJK0kvc6fN5RklaSSklGSVpJKWUZJWkkohGSVpJKSUZJWkkpZRklaSSiUZJWkkolGSVpJKJRklaSSklGSVpJKJRklaSSllGSVpJKJRklaSSiUZJWkkpJRklaSSllGSVpJKJRklaSSiUZJWkkpJRklaSSiUZJWkkpZRklaSSiFpJWkljTolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolaSVZJY66JSklWSSiUpJVkkolKSVZJKJSklWSSiUpJVkk0lKSVZJNJSklWSTSUpJVkk0lKSVZJKJSklWSSiUpJVkkolKSVZJKJSklWSSiUpJVkk0lKSVZJKJSklWSSiUpJVkkolKSVZJKJSklWSSiUpJVkk0lKSVZJKJWklaSWNOmUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiVpJWkllTolGSVpJKJRklaSUolGSVpJKJRklaSVolGSVpJKJRklaSSiUZJWklKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJWiUZJWklKJRklaSVolGSVpJSiUZJWkkolGSVpJWiUZJWkkolGSVpJSiUZJWkkolaSVZJY06JSklWSSiUpJVkkolKSVZJKJSklWSSiUpJVkkolKSVZJKJSklWSSiUpJVkkolKSVZJKJSklWSSiUpJVkkolKSVZJKJSklWSSiUpJVkkolKSVZJKJSklWSSiUpJVkkolKSVZJKJSklWSSiUpJVkkolKSVZJKJWklaSWVOmUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiVpJWkljTolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolaSVpJY06ZRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJRklaSSiUZJWkkolGSVpJKJdgPBoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=');
            height: 10vh">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
