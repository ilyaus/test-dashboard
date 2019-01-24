<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
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
          <span>Layer Operations</span>
        </h6>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span data-feather="bar-chart-2"></span>
            Stream Layer
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span data-feather="bar-chart-2"></span>
            Volatile Layer
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span data-feather="bar-chart-2"></span>
            Versioned Layer
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span data-feather="bar-chart-2"></span>
            Index Layer
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
