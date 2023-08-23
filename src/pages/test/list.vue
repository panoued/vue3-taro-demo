<template>
    <div class="pages-test-list">
        <img class="avatar" :src="profile.profilePicturePath" />
        <nut-form>
            <nut-form-item v-for="(v, k) in profile" :key="k" :label="k">
                <span>{{ v }}</span>
            </nut-form-item>
        </nut-form>
    </div>
</template>

<script src="./list.ts"></script>
