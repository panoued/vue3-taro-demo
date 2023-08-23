<template>
    <div class="pages-test-view">
        <h1>id:&nbsp;{{ route.params.id }}</h1>
        <h2>id:&nbsp;{{ route.params.id }}</h2>
        <h3>id:&nbsp;{{ route.params.id }}</h3>
        <nut-button size="large" type="success" @click="$back()">{{ $t('back') }}</nut-button>
    </div>
</template>

<script src="./_id.ts"></script>
