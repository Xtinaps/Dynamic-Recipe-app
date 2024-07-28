import React from 'react'

const RecipeNav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">RECIPEZ APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Add Recipe</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/View">View Recipe</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Search">Search Recipe</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default RecipeNav