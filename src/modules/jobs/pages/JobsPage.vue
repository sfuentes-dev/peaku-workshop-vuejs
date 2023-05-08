<template>
  <main class="ml-28 pb-1">
    <div v-for="job in jobs" :key="job.title">
      <JobCard
        :title="job.title"
        :img-src="job.img"
        :company="job.company"
        :location="job.location"
        :salary="job.salary"
        :vacancies="job.vacancies"
        :date="job.time"
        :skills="job.skills"
        :benefits="job.benefits"
      />
    </div>
  </main>
</template>

<script>
import JobCard from '../components/JobCard.vue'
import jobs from '../../../data/jobData.js'

export default {
  data() {
    return {
      jobs,
    }
  },

  components: {
    JobCard,
  },
}
</script>
<style lang=""></style>
