import React from 'react'

const Dropdown = () => {
  return (
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Categorias
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Eletrônicos</a></li>
    <li><a className="dropdown-item" href="#"></a>Joalheria</li>
    <li><a className="dropdown-item" href="#">Moda masculina</a></li>
  </ul>
</div>
  )
}

export default Dropdown