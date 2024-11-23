<template>
    <button @click="nextPage">Next</button>
    <DisneyComponent v-for="character in characters"
    v-bind:key="character.id" :character="character"/>
</template>

<script>
import service from '../services/DisneyService';
import DisneyComponent from './DisneyComponent.vue'

export default {
    components: {
        DisneyComponent
    },
    data() {
        return {
            characters: [],
            page: 1,
            count: 50
        }
    },
    methods: {
        nextPage() {
            this.page++;
            this.getCharacters();
        },
        getCharacters() {
            service.getMoreCharacters(this.page, this.count) // calling async communication
        .then((response) => {
            this.characters = response.data.data;
        })
        }
    },
    created() {
        this.getCharacters();
    }
}

</script>

<style>
/* Base styles */
body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    color: #333;
}

/* Container styling */
#app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
}

/* DisneyComponent styles */
.disney-character {
    display: flex;
    align-items: center;
    background: #fff;
    margin: 10px 0;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.disney-character:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.disney-character img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 15px;
    object-fit: cover;
    border: 2px solid #ddd;
}

/* Character details */
.character-details {
    flex: 1;
}

.character-details h3 {
    margin: 0;
    font-size: 20px;
    color: #444;
}

.character-details p {
    margin: 5px 0;
    color: #777;
}

/* Button styling */
button {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin: 20px auto;
    display: block;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
}

button:active {
    transform: translateY(0);
    background-color: #003f7f;
}

/* Responsive styling */
@media (max-width: 768px) {
    .disney-character {
        flex-direction: column;
        text-align: center;
    }

    .disney-character img {
        margin: 0 0 15px 0;
    }

    button {
        width: 90%;
    }
}

</style>