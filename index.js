let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count

    // Bump animation
    countEl.classList.remove("bump")
    void countEl.offsetWidth // reflow to restart animation
    countEl.classList.add("bump")
    setTimeout(() => countEl.classList.remove("bump"), 200)
}

function save() {
    if (count === 0) return
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}