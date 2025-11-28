<template>
  <div class="flex flex-col min-h-screen bg-white font-sans text-coffee-bean">
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

