<template>
    <h1>{{ character.name }}</h1>
    <img v-bind:src="character.imageUrl" />
</template>

<script>
export default {
    props: ["character"]
}
</script>

<style>
/* General styling for the character component */
h1 {
    font-size: 24px;
    color: #444;
    margin: 10px 0;
    text-align: center;
    font-family: 'Arial', sans-serif;
    letter-spacing: 1px;
}

/* Styling for the image */
img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Hover effect for the image */
img:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Responsive design */
@media (max-width: 768px) {
    h1 {
        font-size: 20px;
    }

    img {
        border-radius: 10px;
    }
}

</style>