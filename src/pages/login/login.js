import { mapActions } from 'vuex'
import { USER_SIGNIN } from 'store/user'

export default {
    data() {
        return {
            btn: false, // true 已经提交过， false没有提交过
            form: {
                id: '',
                name: ''
            }
        }
    },
    methods: {
        ...mapActions([USER_SIGNIN]),
        submit() {
            this.btn = true
            if (!this.form.id || !this.form.name) return
            this.USER_SIGNIN(this.form)
            this.$router.replace({ path: '/system' })
        }
    }
}