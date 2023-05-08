<template lang="">
  <header
    class="bg-[#f8f9fa] h-[78px] px-3 flex items-center justify-between shadow z-20 relative"
  >
    <img
      src="https://peaku.co/img/logo-blue.png"
      alt="Peak U Logo"
      class="w-16 h-16"
    />

    <nav class="flex items-center gap-6">
      <ul class="flex justify-center items-center gap-6">
        <li
          v-for="(item, index) in items"
          :key="`${index + 1} - ${item}`"
          class="cursor-pointer text-lg text-gray-500 hover:text-black transition-colors ease-in-out duration-300"
        >
          <a href="#" class="pointer-events-none">{{ item }}</a>
        </li>
      </ul>

      <ul class="flex justify-center items-center gap-6">
        <li
          class="flex items-center justify-between gap-1 text-gray-500 hover:text-black transition-colors ease-in-out duration-300 cursor-pointer"
          v-for="(item, index) in dropdown"
          :key="`${index + 1} - ${item}`"
        >
          <a href="#" class="pointer-events-none text-lg">{{ item }}</a>
          <i class="bi bi-caret-down-fill text-[11px]"></i>
        </li>
      </ul>

      <div
        class="flex items-center gap-1 px-2 py-1 border border-[#dee2e6] rounded-sm curs cursor-pointer text-gray-500 hover:text-black transition-colors ease-in-out duration-300"
      >
        <i class="bi bi-globe text-lg"></i>
        <span class="text-lg">English</span>
      </div>

      <button
        class="px-3 py-[6px] hover:rounded hover:bg-gray-300 transition-all ease-in-out duration-300"
      >
        <i class="bi bi-bell text-2xl"></i>
      </button>

      <div
        class="flex justify-center items-center gap-2 hover:bg-gray-300 p-1 rounded cursor-pointer"
      >
        <img
          src="../../../assets/man.png"
          alt="Avatar Profile Picture"
          class="w-9 h-9"
        />

        <div>
          <span class="text-[10px] text-gray-500">{{ this.name }}</span>
          <div class="flex items-center gap-1">
            <i class="bi bi-gem text-gray-500 text-xs"></i>
            <span class="text-[10px] text-gray-500">{{ this.score }}</span>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      name: 'Sebastian',
      score: '3000',

      items: ['Jobs', 'Bootcamp', 'About Us'],

      dropdown: ['For professionals', 'For business'],
    }
  },
}
</script>

<style scoped></style>

<!-- 70 -->
