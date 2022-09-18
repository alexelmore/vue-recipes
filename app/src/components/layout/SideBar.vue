<template>
  <div class="sidebar" :style="{ width: width + 'px' }">
    <div class="sidebar-header">
      <h2 class="sidebar-title">Filter Recipes</h2>
      <BaseButton mode="flat" class="sidebar-cta">
        {{ ctaText }}
      </BaseButton>
    </div>
    <div class="sidebar-items">
      <!-- Below are just placeholder items and will be removed once filter component is ready -->
      <BaseCard>
        <h2 class="filter-title">Meal Type</h2>
        <span class="filter-option">
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Breakfast</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Lunch</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Dinner</label>
          </div>
        </span>
      </BaseCard>
      <BaseCard>
        <h2>Protien Type</h2>
        <span class="filter-option">
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Non Meat</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Red Meat</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Poultry</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">Other</label>
          </div>
        </span>
      </BaseCard>
      <BaseCard>
        <h2>Cook Time</h2>
        <span class="filter-option">
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> 20 Minutes Or Less</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label for="vehicle2"> 30 Minutes Or Less</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3"> More Than 30 Minutes</label>
          </div>
        </span>
      </BaseCard>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    width: {
      type: String,
      default: "300",
    },
    ctaText: {
      type: String,
      default: "Clear All",
    },
  },
};
</script>

<style scoped>
.sidebar-header {
  display: flex;
  justify-content: space-between;
}
.sidebar-items {
  width: 100%;
  text-align: left;
}
.filter-option {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
</style>