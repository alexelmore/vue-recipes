<template>
  <div class="dropdown">
    <button @click="myFunction" class="dropbtn">Sort Recipes</button>
    <div id="myDropdown" class="dropdown-content" @click.stop>
      <div>
        <input
          type="radio"
          id="alphabetical"
          name="alphabetical"
          value="alphabetical"
          v-model="sortType"
          @change="$emit('sortType', this.sortType)"
        />
        <label for="alphabetical"> Alphabetical</label>
      </div>
      <div>
        <input
          type="radio"
          id="smallestSize"
          name="smallestSize"
          value="smallestSize"
          v-model="sortType"
          @change="$emit('sortType', this.sortType)"
        />
        <label for="smallestSize"> Serving Size: Smallest To Largest</label>
      </div>

      <div>
        <input
          type="radio"
          id="largestSize"
          name="largestSize"
          value="largestSize"
          v-model="sortType"
          @change="$emit('sortType', this.sortType)"
        />
        <label for="largestSize"> Serving Size: Largest To Smallest</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeSort",
  data() {
    return {
      sortType: "",
    };
  },
  methods: {
    myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    },
  },
};
</script>

<style>
.dropbtn {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-family: "Berkshire Swash", cursive;
  font-size: 1.5rem;
  background-color: #005a00;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  width: 100%;
  border: 1px solid black;
}

.dropbtn:hover {
  background-color: #b1ffb1;
  color: black;
  border: 2px solid black;
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
}

.dropdown-content {
  display: none;
  background-color: #b1ffb1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 11;
  padding: 1rem;
  width: 90%;
  margin: auto;
  position: absolute;
  border-radius: 30px;
  left: 28px;
  border: 2px solid black;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}
</style>
