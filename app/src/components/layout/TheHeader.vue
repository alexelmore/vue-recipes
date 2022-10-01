<template>
  <header>
    <nav>
      <h1>
        <BaseButton link="true" to="/recipes">My Recipes</BaseButton>
      </h1>
      <ul>
        <li>
          <BaseButton link="true" to="/addRecipe">Add A Recipe</BaseButton>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}
header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}
a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}
h1 {
  margin: 0;
}
h1 a {
  color: white;
  margin: 0;
}
h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: #f391e3;
}
header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  margin: 0 0.5rem;
}
.banner {
  display: flex;
  justify-content: center;
}
.banner h1 {
  width: 80%;
  text-align: center;
}
.banner a {
  border-radius: 10px;
  width: 100%;
  border: 2px solid #f391e3;
  pointer-events: none;
}
</style>