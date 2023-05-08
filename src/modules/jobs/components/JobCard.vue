<script>
export default {
  data() {
    return {}
  },

  props: {
    imgSrc: {
      type: String,
      required: true,
      default: 'https://peaku.co/img/company.svg',
    },

    title: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    salary: {
      type: String,
      required: true,
    },

    vacancies: {
      type: Number,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    skills: {
      type: Array,
      required: true,
    },

    benefits: {
      type: Array,
    },
  },
}
</script>

<template>
  <div
    class="py-6 flex items-center gap-24 border border-gray-300 p-4 ml-1 mr-4 mt-3 mb-4 rounded hover:shadow-2xl transition-all duration-200 ease-in-out"
  >
    <img :src="imgSrc" alt="Company Logo" class="w-16 h-16" />
    <div class="w-full">
      <div class="flex items-center gap-4 mb-2">
        <a href="#" class="flex items-center gap-3">
          <h2
            class="font-semibold text-xl text-[#343a40] hover:text-black transition-colors duration-300 ease-in-out"
          >
            {{ title }}
          </h2>
          <div
            class="flex items-center gap-1"
            v-for="skill in skills"
            :key="skill"
          >
            <span
              class="border border-black rounded-full px-2.5 text-sm font-normal"
              >{{ skill }}</span
            >
          </div>
        </a>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2 w-64">
          <i class="bi bi-buildings"></i>
          <span>{{ company.toLocaleUpperCase() }}</span>
        </div>
        <div class="flex items-center gap-2 w-64">
          <i class="bi bi-geo-alt"></i>
          <span class="text-sm">{{ location }}</span>
        </div>
        <div class="flex items-center gap-2 w-64">
          <i class="bi bi-cash"></i>
          <span class="text-sm">{{ salary }}</span>
        </div>
        <div class="flex items-center gap-2 w-64">
          <i class="bi bi-people"></i>
          <span class="text-sm">{{
            vacancies === 1 ? `${vacancies} Job` : `${vacancies} Jobs`
          }}</span>
        </div>
        <div class="flex items-center gap-2 w-64">
          <i class="bi bi-calendar3"></i>
          <span class="text-sm">{{ date }}</span>
        </div>

        <div class="flex items-center gap-1 w-64 z-0">
          <div
            v-for="benefit in benefits"
            :key="benefit.tooltip"
            class="px-2.5 border border-black rounded-full text-center cursor-pointer relative group group-hover:opacity-100"
          >
            <i :class="benefit.iconClass" class="relative">
              <span
                class="absolute text-sm -top-10 -left-10 bg-[#7a838a] py-1.5 px-2 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out not-italic whitespace-nowrap"
                >{{ benefit.tooltip }}</span
              >
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
