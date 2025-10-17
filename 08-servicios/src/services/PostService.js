import {ref} from 'vue';

class PostService {
    posts 

    constructor() {
        this.posts = ref([])
    }

    getAllPosts() {
        return this.posts
    }

    async fetchAll() {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await response.json()
            this.psts.value = await json
        }catch(e){
            console.error("Error fetching posts:", e)
        }
    }
}

export default new PostService();