<template>
    <div id = "nav">
        <div class="link-wrapper">
            <ul class="links">
            <div class="nav-links">
                <router-link tag="li" class="link" exact to="/">Список дел </router-link>
                <router-link tag="li" class="link" to="/info">Инфо </router-link>
            </div>   
            <a @click="onLogoutClicked" class="logout link"><li>
                Выйти
            </li>
            </a>
            </ul>
        </div>        
    </div>
</template>

<script>
import { doLogout } from '@/netClient/authService';

export default{
    name: 'NavBar',
    methods:{
        async onLogoutClicked(){
            try {
                await doLogout();
                this.$router.push('/login');
            } catch (error) {
                console.error({error});
            }
        }
    },
};
</script>

<style scoped>

</style>
