<template>
  <aside
    class="w-24 bg-white h-screen fixed left-0 top-0 border shadow-sm flex flex-col items-center gap-3 pt-24 z-10"
  >
    <div
      v-for="item in menu"
      :key="item.name"
      class="flex flex-col items-center justify-center w-[70px] py-1.5 rounded hover:bg-[#6fcaff88] cursor-pointer transition-colors ease-in-out duration-300"
    >
      <i class="text-xl" :class="`${item.class}`"></i>
      <span class="text-[11px] text-center font-semibold">{{ item.name }}</span>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: 'Jobs',
          class: 'bi bi-briefcase',
        },
        {
          name: 'Applications',
          class: 'bi bi-file-earmark-check',
        },
        {
          name: 'Courses and challenges',
          class: 'bi bi-controller',
        },
        {
          name: 'Question',
          class: 'bi bi-chat-text',
        },
        {
          name: 'Bootcamp',
          class: 'bi bi-braces',
        },
        {
          name: 'Rewards',
          class: 'bi bi-gem',
        },
        {
          name: 'Your CV',
          class: 'bi bi-file-earmark-person',
        },
      ],
    }
  },
}
</script>
