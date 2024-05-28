function countWaysToRunUpStairs(n) {
    if (n === 0) { // Si on est déja au sommet alors pas besoin de sauter
        return 1; // Une seule façon de rester sur place cad ne plus sauter on est arrivé en haut des escaliers
    } else if (n < 0) { // Si n est negatif alors on a dépassé le bas des marches d'escalier
        return 0; // Aucune façon de monter avec un saut négatif donc condition pas valide
    } else { // si n est positif alors alors on peut atteindre n en saute depuis les marches n-1, n-2 ou n-3
        return countWaysToRunUpStairs(n - 1) + countWaysToRunUpStairs(n - 2) + countWaysToRunUpStairs(n - 3);
    }
}

// Exemple 
let steps = 4;
console.log(`Nombre de façons de monter ${steps} marches:`, countWaysToRunUpStairs(steps));


// Le programme est par contre pas optimisé pour des valeurs de n assez grande comme par exemple n<3O