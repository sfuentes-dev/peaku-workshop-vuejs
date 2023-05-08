<script setup>
import NavBar from './modules/shared/components/NavBar.vue'
import SideBar from './modules/shared/components/SideBar.vue'
import SearchBar from './modules/jobs/components/SearchBar.vue'
import JobsPage from './modules/jobs/pages/JobsPage.vue'
</script>

<template>
  <SideBar />
  <NavBar />
  <SearchBar />
  <JobsPage />
</template>

<style scoped></style>
