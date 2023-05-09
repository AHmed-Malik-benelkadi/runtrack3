function tri(numbers,order)
{
    if (order == "asc") // si l'ordre est ascendant  alors on tri les nombres dans l'ordre croissant
    {
        numbers.sort(function(a, b){return a-b}); // on utilise la fonction sort() pour trier les nombres  dans l'ordre croissant

    }
    else if (order == "desc")
    {
        numbers.sort(function(a, b){return b-a});
    }
    return numbers;

}
console.log(tri([4, 3, 2, 1], "asc"));
console.log(tri([4, 3, 2, 1], "desc"));