<template>
  <div
    class="bg-[#3a8ced] py-4 flex items-center justify-center gap-96 sticky top-0 z-[1]"
  >
    <div class="flex items-center justify-center relative">
      <div
        class="px-4 py-2 bg-gray-50 text-[#495057] rounded-l absolute left-0"
      >
        <i class="bi bi-search text-xl"></i>
      </div>

      <input
        type="text"
        placeholder="Search by role, salary, location or company"
        class="pl-16 pr-10 py-2 w-[580px] border border-gray-400 rounded text-lg outline-none focus:outline focus:outline-offset-3 focus:outline-3 focus:outline-[#495057] placeholder:text-[#495057]"
      />
    </div>

    <div class="flex items-center justify-center gap-1">
      <button
        v-for="filter in filters"
        :key="filter"
        class="text-white border rounded-full px-3 py-1 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
      >
        {{ filter }} <i class="bi bi-caret-down-fill"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: ['Area', 'Role', 'Salary', 'Location'],
    }
  },
}
</script>
