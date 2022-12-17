<template>
  <div id="root">
    <Search/>
    <List/>
  </div>
</template>

<script>
import Search from "@/components/Search";
import List from "@/components/List";

export default {
  name: "App",
  components: {
    List,
    Search
  }
}
</script>