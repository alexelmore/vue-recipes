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
        <label for="alphabetical"> Alphabetical Sort</label>
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
    test() {
      console.log("fired");
    },
  },
};
</script>

<style>
.dropbtn {
  background-color: #3498db;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover,
.dropbtn:focus {
  background-color: #2980b9;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
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
