<template>
  <div class="navigation">
    <slot></slot>
  </div>
</template>

<style>
.navigation {
  position: absolute;
  bottom: 100px;
  z-index: 10;
  display: flex;
  width: 79.2vw;
  justify-content: center;
}

.right-vector {
  margin-left: 58.5px;
  cursor: pointer;
  border: none;
  background-color: #eaeaea;
}

.left-vector {
  margin-right: 58.5px;
  cursor: pointer;
}
</style>
