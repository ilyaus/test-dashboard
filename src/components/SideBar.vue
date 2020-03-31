<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar fixed">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            <span data-feather="home"></span>
            Dashboard
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>Test Areas</span>
        </h6>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="menuClick('item-1')">
            <span data-feather="bar-chart-2"></span>
            Item - 1
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="menuClick('item-2')">
            <span data-feather="bar-chart-2"></span>
            Item - 2
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="menuClick('item-3')">
            <span data-feather="bar-chart-2"></span>
            Item - 3
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @mouseup="menuClick('item-4')">
            <span data-feather="bar-chart-2"></span>
            Item - 4
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    menuClick (chartType) {
      console.log(chartType)
      this.$emit('updateTitle', chartType)
    }
  }
}
</script>
