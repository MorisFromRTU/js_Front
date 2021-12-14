import http from '@/netClient/config';

export async function doRegistration(email, password){
    try {
        const response = await http.post('/auth/registration',{
            email,
            password});
        return response.data;
    } catch (error) {
        console.error({error})
        throw error;
    
    }
    }
    export async function doLogin(email, password){
        try {
            const response = await http.post('/auth/authorization',{
                email,
                password
            });
    
            const{ token } = response.data;
            localStorage.token = token;
            
            return token;
        } catch (error) {
            console.error({error})
            throw error;
        
        }
    }
    
    export async function doLogout(){
        try {
            const response = await http.post('/users/logout',{ },
        );
            localStorage.removeItem('token')
            return response.data;
        } catch (error) {
            console.error({error})
            throw error;
        
        }
    }