import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        name: 'Savin Phuong',
        age: 21,
        email: 'savinphuong@gmail.com'
    }),
    actions: {
        updateName(newName) {
            this.name = newName
        },
        updateAge(newAge) {
            this.age = newAge
        },
        updateEmail(newEmail) {
            this.email = newEmail
        },
    },
})