<template>
    <div class="login-container">
        <div class="sidebar">
            <div class="logo">
                <span class="logo-text">CodeStarLabs</span>
            </div>
            <h2 class="slogan">登入</h2>
            <p class="sub-slogan">点亮青春，编程未来——筑梦科技星辰，用代码创造未来</p>
        </div>
        <div class="login-form">
            <div class="return-home">
                <a-button type="text" @click="returnHome">
                    <template #icon>
                        <icon-left />
                    </template>
                    返回主页
                </a-button>
            </div>
            <h1 class="welcome">欢迎回来</h1>
            <p class="welcome-sub">登录您的 CodeStarLabs 账户</p>
            <a-form :model="form" @submit="handleSubmit" layout="vertical" class="form">
                <a-form-item field="username" hide-label>
                    <a-input v-model="form.username" placeholder="用户名" :style="{ width: '100%' }">
                        <template #prefix>
                            <icon-user />
                        </template>
                    </a-input>
                </a-form-item>
                <a-form-item field="password" hide-label>
                    <a-input-password v-model="form.password" placeholder="密码" allow-clear :style="{ width: '100%' }">
                        <template #prefix>
                            <icon-lock />
                        </template>
                    </a-input-password>
                </a-form-item>
                <div class="remember-forgot">
                    <a-checkbox>记住我</a-checkbox>
                    <a-link>忘记密码？</a-link>
                </div>
                <a-form-item>
                    <a-button type="primary" html-type="submit" long>
                        登录
                    </a-button>
                </a-form-item>
            </a-form>
            <div class="additional-options">
                <p>或者使用以下方式登录</p>
                <div class="social-login">
                    <a-button class="social-btn"><icon-github /> GitHub</a-button>
                    <a-button class="social-btn"><icon-google /> Google</a-button>
                </div>
            </div>
            <div class="register-link">
                没有账户？ <a-link @click="goToRegister">立即注册</a-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Message } from '@arco-design/web-vue';
import { useRouter } from 'vue-router';
import { IconUser, IconLock, IconGithub, IconGoogle, IconLeft } from '@arco-design/web-vue/es/icon';

interface FormState {
    username: string;
    password: string;
}

const router = useRouter();

const form = reactive<FormState>({
    username: '',
    password: '',
});

const handleSubmit = () => {
    console.log('Form submitted:', form);
    Message.success('登录成功');
};

const returnHome = () => {
    router.push('/')
};

const goToRegister = () => {
    router.push('/register')
}
</script>

<style scoped>
.register-link {
    margin-top: 20px;
    text-align: center;
}

.login-container {
    display: flex;
    height: 100vh;
    font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    color: #212529;
    background-color: #f8f9fa;
}

.sidebar {
    width: 40%;
    background-color: #007bff;
    color: white;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.logo-text {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 30px;
}

.slogan {
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: 600;
    line-height: 1.2;
}

.sub-slogan {
    font-size: 16px;
    opacity: 0.9;
    line-height: 1.6;
}

.login-form {
    width: 60%;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    position: relative;
}

.return-home {
    position: absolute;
    top: 20px;
    left: 20px;
}

.welcome {
    font-size: 32px;
    margin-bottom: 10px;
    color: #212529;
}

.welcome-sub {
    font-size: 16px;
    color: #6c757d;
    margin-bottom: 30px;
}

.form {
    max-width: 400px;
    width: 100%;
}

.remember-forgot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.additional-options {
    margin-top: 30px;
    text-align: center;
}

.social-login {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
}

.social-btn {
    transition: all 0.3s ease;
}

:deep(.arco-input-wrapper) {
    border: 1px solid #ced4da;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

:deep(.arco-input-wrapper:hover),
:deep(.arco-input-wrapper:focus-within) {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

:deep(.arco-btn-primary) {
    background-color: #007bff;
    border-color: #007bff;
}

:deep(.arco-btn-primary:not(.arco-btn-disabled):hover) {
    background-color: #0056b3;
    border-color: #0056b3;
}

:deep(.arco-btn-text) {
    color: #007bff;
}

:deep(.arco-btn-text:not(.arco-btn-disabled):hover) {
    background-color: rgba(0, 123, 255, 0.1);
}

:deep(.arco-link) {
    color: #007bff;
}

:deep(.arco-checkbox-label) {
    color: #212529;
}

@media (max-width: 768px) {
    .login-container {
        flex-direction: column;
    }

    .sidebar,
    .login-form {
        width: 100%;
        padding: 40px;
    }

    .sidebar {
        height: auto;
    }

    .return-home {
        position: static;
        margin-bottom: 20px;
    }
}
</style>