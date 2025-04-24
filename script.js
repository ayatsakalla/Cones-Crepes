import { ref, computed } from 'vue'

const cards = ref([
    { id: 1, title: "Le Mexicain", type: "Breakfast Crêpe" },
    { id: 2, title: "Allison's Parfait", type: "Breakfast Crêpe" },
    { id: 3, title: "Cookie Butter", type: "Sweet Crêpe" },
    { id: 4, title: "Crêpe Suzette", type: "Classic Crêpe" },
    { id: 5, title: "Nutella Heaven", type: "Sweet Crêpe" },
    { id: 6, title: "Savory Delight", type: "Lunch Crêpe" },
])

const currentIndex = ref(0)

const visibleCards = computed(() => {
    let result = []
    for (let i = 0; i < 3; i++) {
        result.push(cards.value[(currentIndex.value + i) % cards.value.length])
    }
    return result
})

function slide(direction) {
    const slideDistance = 300;  // Each card width
    const cardTrack = document.querySelector('.cc-card-track');

    if (direction === 'right') {
        currentIndex.value = (currentIndex.value + 1) % cards.value.length;
        cardTrack.style.transform = `translateX(-${(currentIndex.value) * slideDistance}px)`;
    } else {
        currentIndex.value = (currentIndex.value - 1 + cards.value.length) % cards.value.length;
        cardTrack.style.transform = `translateX(-${(currentIndex.value) * slideDistance}px)`;
    }
}
