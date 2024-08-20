<template>
    <div class="error-container">
        <div class="error-content">
            <h1 class="error-title">4<span class="zero">0</span>4</h1>
            <a-typography-text class="error-message">
                哎呀！看来您迷路了
            </a-typography-text>
            <a-typography-paragraph class="error-description">
                我们找不到您要访问的页面。它可能已被移动、删除或者可能从未存在过。
            </a-typography-paragraph>
            <a-button class="home-button" type="primary" size="large" @click="goHome">
                返回首页
            </a-button>
        </div>
        <div class="astronaut">
            <img src="https://assets.codepen.io/1538474/astronaut.svg" alt="迷路的宇航员" class="astronaut-image">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'NotFound',
    setup() {
        const router = useRouter()

        const goHome = () => {
            router.push('/')
        }

        return {
            goHome
        }
    }
})
</script>

<style scoped>
.error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
    overflow: hidden;
    position: relative;
}

.error-content {
    text-align: center;
    color: #fff;
    z-index: 1;
}

.error-title {
    font-size: 150px;
    margin: 0;
    font-weight: 900;
    letter-spacing: 20px;
    background: url('https://assets.codepen.io/1538474/star.svg') center no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
}

.zero {
    animation: rotate 5s linear infinite;
    display: inline-block;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.error-message {
    font-size: 24px;
    margin-bottom: 20px;
    display: block;
}

.error-description {
    font-size: 18px;
    max-width: 600px;
    margin: 0 auto 40px;
}

:deep(.home-button) {
    background: #fff;
    color: #8BC6EC;
    border: none;
    padding: 15px 30px;
    font-size: 18px;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
}

:deep(.home-button:hover) {
    background: #9599E2;
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.astronaut {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: float 6s ease-in-out infinite;
}

.astronaut-image {
    width: 100%;
    max-width: 300px;
    height: auto;
}

@keyframes float {
    0% {
        transform: translate(-50%, -50%);
    }

    50% {
        transform: translate(-50%, -60%);
    }

    100% {
        transform: translate(-50%, -50%);
    }
}

@media (max-width: 768px) {
    .error-title {
        font-size: 100px;
        letter-spacing: 10px;
    }

    .error-message {
        font-size: 20px;
    }

    .error-description {
        font-size: 16px;
        padding: 0 20px;
    }

    .astronaut-image {
        max-width: 200px;
    }
}
</style>