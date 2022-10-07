import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Project } from "@/interfaces/IProject";

export const useProjectStore = defineStore('project', () => {
    state: () => ({
        projectList: [] as Project[]
    })

    getters: {

    }

    actions: {
        
    }
})