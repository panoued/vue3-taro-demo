<template>
    <router-view />
</template>

<script>
import { Component, Vue, toNative } from "vue-facing-decorator";

@Component
class App extends Vue {
    mounted() {
        const ids = ["test-project-loading-style", "test-project-loading"];
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) {
                el.remove();
            }
        });
    }
}

export default toNative(App);
</script>