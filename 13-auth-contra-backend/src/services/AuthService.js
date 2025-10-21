import { ref } from 'vue'

class AuthService {

    constructor(){
        this.jwt = ref('')
    }

    getJwt(){
        return this.jwt.value
    }

    async login(email, password){
        try {
            const response = await ('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ email:email, password:password })
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.json()
            this.jwt.value = data.token
            return data
        } catch (error) {
            console.error('Login failed:', error)
        }
    }
}