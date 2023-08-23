<template>
    <div class="pages-index-view">
        <template v-if="isLogin">
            <div class="login-btn">
                <nut-button size="large" type="success" @click="test">{{ $t('test') }}</nut-button>
            </div>
        </template>
        <template v-else>
            <nut-form>
                <nut-form-item :label="$t('username')">
                    <nut-input v-model="username" class="nut-input-text" placeholder="请输入" type="text" />
                </nut-form-item>
                <nut-form-item :label="$t('password')">
                    <nut-input v-model="password" class="nut-input-text" placeholder="请输入" type="password" />
                </nut-form-item>
            </nut-form>
            <div class="login-btn">
                <nut-button size="large" type="primary" @click="login">{{ $t('login') }}</nut-button>
            </div>
        </template>
        <div class="login-btn">
            <nut-button size="large" type="warning" @click="toggleLang">{{ $tr('toggle', 'language') }}</nut-button>
        </div>

        <nut-action-sheet cancel-txt="取消" v-model:visible="isVisible" :menu-items="menuItemsOne" @choose="chooseItem"></nut-action-sheet>
    </div>
</template>

<script src="./index.ts"></script>
