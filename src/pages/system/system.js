import { mapActions } from 'vuex'
import { USER_SIGNOUT } from 'store/user'

export default {
    methods: {
        ...mapActions([USER_SIGNOUT]),
        submit() {
            this.USER_SIGNOUT()
            this.$router.replace({ path: '/login' })
        }
    }
}