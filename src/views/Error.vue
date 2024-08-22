<template>
    <div class="error-container" v-motion-fade>
        <div class="error-content">
            <h1 class="error-title" v-motion="titleMotion">
                <span v-motion="numberMotion">4</span>
                <span class="zero" v-motion="zeroMotion">0</span>
                <span v-motion="numberMotion">4</span>
            </h1>
            <a-typography-text class="error-message" v-motion="messageMotion">
                哎呀！看来您迷路了
            </a-typography-text>
            <a-typography-paragraph class="error-description" v-motion="descriptionMotion">
                我们找不到您要访问的页面。它可能已被移动、删除或者可能从未存在过。
            </a-typography-paragraph>
            <a-button class="home-button" type="primary" size="large" @click="goHome" v-motion="buttonMotion">
                返回首页
            </a-button>
        </div>
        <div class="astronaut" v-motion="astronautMotion">
            <img src="https://assets.codepen.io/1538474/astronaut.svg" alt="迷路的宇航员" class="astronaut-image" height="400" width="400">
        </div>
        <div class="stars" v-motion="starsMotion"></div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
    router.push('/')
}

const titleMotion = {
    initial: { opacity: 0, y: -50 },
    enter: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 100 } },
}

const numberMotion = {
    initial: { opacity: 0, scale: 0.5 },
    enter: { opacity: 1, scale: 1, transition: { type: 'spring', damping: 12, stiffness: 150, delay: 300 } },
}

const zeroMotion = {
    initial: { opacity: 0, scale: 0.5, rotate: -180 },
    enter: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', damping: 10, stiffness: 100, delay: 500 } },
}

const messageMotion = {
    initial: { opacity: 0, x: -50 },
    enter: { opacity: 1, x: 0, transition: { type: 'spring', damping: 15, stiffness: 100, delay: 800 } },
}

const descriptionMotion = {
    initial: { opacity: 0, y: 30 },
    enter: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 100, delay: 1000 } },
}

const buttonMotion = {
    initial: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1, transition: { type: 'spring', damping: 12, stiffness: 150, delay: 1200 } },
}

const astronautMotion = {
    initial: { opacity: 0, scale: 0.8, y: 50 },
    enter: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 8, stiffness: 80, delay: 1400 } },
}

const starsMotion = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 1500, delay: 500 } },
}
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
    display: inline-block;
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
}

.astronaut-image {
    width: 100%;
    max-width: 300px;
    height: auto;
}

.stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-image:
        radial-gradient(2px 2px at 20px 30px, #eee, rgba(0, 0, 0, 0)),
        radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
        radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0, 0, 0, 0)),
        radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0)),
        radial-gradient(2px 2px at 130px 80px, #fff, rgba(0, 0, 0, 0)),
        radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0, 0, 0, 0));
    background-repeat: repeat;
    background-size: 200px 200px;
    animation: twinkle 5s infinite;
}

@keyframes twinkle {
    0% {
        opacity: 0.7;
    }

    50% {
        opacity: 0.3;
    }

    100% {
        opacity: 0.7;
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