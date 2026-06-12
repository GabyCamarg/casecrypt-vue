<template>
  <header class="navbar">
    <div class="logo">🔎 CaseCrypt</div>

    <nav>
      <RouterLink to="/">Início</RouterLink>
      <RouterLink to="/suspeitos">Suspeitos</RouterLink>
      <RouterLink to="/evidencias">Evidências</RouterLink>
      <RouterLink to="/contato">Contato</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  background: #111827;
  color: white;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  gap: 20px;
}

a {
  color: white;
  text-decoration: none;
}
</style>