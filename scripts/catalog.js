export const catalog = (allPlantsArr) => {
    // target the main html element
    const mainElement = document.querySelector(".plants")
    
    for (const plant of allPlantsArr) {
        console.log(plant)
        mainElement.innerHTML += `<section class="plant column">${plant.type}</section>`
    }
}