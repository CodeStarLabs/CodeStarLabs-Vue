<template>
    <div class="register-container">
        <div class="sidebar">
            <div class="logo">
                <span class="logo-text">CodeStarLabs</span>
            </div>
            <h2 class="slogan">注册</h2>
            <p class="sub-slogan">加入我们，开启您的编程之旅</p>
        </div>
        <div class="register-form">
            <div class="return-home">
                <a-button type="text" @click="returnHome">
                    <template #icon>
                        <icon-left />
                    </template>
                    返回主页
                </a-button>
            </div>
            <h1 class="welcome">创建账户</h1>
            <p class="welcome-sub">填写以下信息以注册 CodeStarLabs 账户</p>
            <a-form :model="form" @submit="handleSubmit" layout="vertical" class="form">
                <a-form-item field="username" label="用户名">
                    <a-input v-model="form.username" placeholder="请输入用户名">
                        <template #prefix>
                            <icon-user />
                        </template>
                    </a-input>
                </a-form-item>
                <a-form-item field="email" label="电子邮箱">
                    <a-input v-model="form.email" placeholder="请输入电子邮箱">
                        <template #prefix>
                            <icon-email />
                        </template>
                    </a-input>
                </a-form-item>
                <a-form-item field="emailVerification">
                    <a-space>
                        <a-input v-model="form.verificationCode" placeholder="请输入验证码" style="width: 200px;">
                            <template #prefix>
                                <icon-safe />
                            </template>
                        </a-input>
                        <a-button type="outline" @click="sendVerificationCode" :disabled="isCodeSent">
                            {{ isCodeSent ? `重新发送 (${countdown}s)` : '发送验证码' }}
                        </a-button>
                    </a-space>
                </a-form-item>
                <a-form-item field="password" label="密码">
                    <a-input-password v-model="form.password" placeholder="请输入密码" allow-clear>
                        <template #prefix>
                            <icon-lock />
                        </template>
                    </a-input-password>
                </a-form-item>
                <a-form-item field="confirmPassword" label="确认密码">
                    <a-input-password v-model="form.confirmPassword" placeholder="请再次输入密码" allow-clear>
                        <template #prefix>
                            <icon-check />
                        </template>
                    </a-input-password>
                </a-form-item>
                <a-form-item>
                    <a-checkbox v-model="form.agreeTerms">我同意 CodeStarLabs 的服务条款和隐私政策</a-checkbox>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" long>
                        注册
                    </a-button>
                </a-form-item>
            </a-form>
            <div class="login-link">
                已有账户？ <a-link @click="goToLogin">立即登录</a-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Message } from '@arco-design/web-vue';
import { useRouter } from 'vue-router';
import { IconUser, IconLock, IconEmail, IconCheck, IconLeft, IconSafe } from '@arco-design/web-vue/es/icon';

const router = useRouter();

interface FormState {
    username: string;
    email: string;
    verificationCode: string;
    password: string;
    confirmPassword: string;
    agreeTerms: boolean;
}

const form = reactive<FormState>({
    username: '',
    email: '',
    verificationCode: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
});

const isCodeSent = ref(false);
const countdown = ref(60);

const handleSubmit = () => {
    console.log('Form submitted:', form);
    Message.success('注册成功');
};

const returnHome = () => {
    router.push('/')
};

const goToLogin = () => {
    router.push('/login')
};

const sendVerificationCode = () => {
    if (form.email) {
        // 这里添加发送验证码的逻辑
        console.log('Sending verification code to:', form.email);
        Message.success('验证码已发送，请查收邮箱');
        isCodeSent.value = true;
        startCountdown();
    } else {
        Message.error('请先输入邮箱地址');
    }
};

const startCountdown = () => {
    const timer = setInterval(() => {
        countdown.value--;
        if (countdown.value === 0) {
            clearInterval(timer);
            isCodeSent.value = false;
            countdown.value = 60;
        }
    }, 1000);
};
</script>

<style scoped>
.register-container {
    display: flex;
    height: 120vh;
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

.register-form {
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

.login-link {
    margin-top: 20px;
    text-align: center;
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
    .register-container {
        flex-direction: column;
    }

    .sidebar,
    .register-form {
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