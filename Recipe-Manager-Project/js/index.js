
        /* Javascript External for recipe and ingredients */


/* Crockpot */
let crockpotOri = {
    oriServ: "6",
    ori1: "2 tbsp. cooking oil",
    ori2: "1 cup onion",
    ori3: "1 cup chopped peppers",
    ori4: "4 tbsp. Chili powder",
    ori5: "1 lb ground beef or chicken",
    ori6: "2 cans Red Beans",
    ori7: "2 cans Kidney Beans",
    ori8: "2 cans Tomato Puree",
    ori9: "2 cans Tomato Sauce",
    ori10: "1 tsp. Hot chili powder (optional)",
    ori11: "1 cup shredded cheese (optional)",
    ori12: "1/2 cup sour cream (optional)"
}

let crockpotHalf = {
    halfServ: "3",
    half1: "1 tbsp. cooking oil",
    half2: "1/2 cup onion",
    half3: "1/2 cup chopped peppers",
    half4: "2 tbsp. Chili powder",
    half5: "1/2 lb ground beef or chicken",
    half6: "1 cans Red Beans",
    half7: "1 cans Kidney Beans",
    half8: "1 cans Tomato Puree",
    half9: "1 cans Tomato Sauce",
    half10: "1/2 tsp. Hot chili powder (optional)",
    half11: "1/2 cup shredded cheese (optional)",
    half12: "1/4 cup sour cream (optional)"
}

let crockpotDouble = {
    doubleServ: "12",
    double1: "4 tbsp. cooking oil",
    double2: "2 cup onion",
    double3: "2 cup chopped peppers",
    double4: "8 tbsp. Chili powder",
    double5: "2 lb ground beef or chicken",
    double6: "4 cans Red Beans",
    double7: "4 cans Kidney Beans",
    double8: "4 cans Tomato Puree",
    double9: "4 cans Tomato Sauce",
    double10: "2 tsp. Hot chili powder (optional)",
    double11: "2 cup shredded cheese (optional)",
    double12: "1 cup sour cream (optional)"
}

function displayCrockpotOri(){
    document.querySelector("#half").value;
    document.querySelector("#servingSize").innerHTML = crockpotOri.oriServ;
    document.querySelector("#ingred1").innerHTML = crockpotOri.ori1;
    document.querySelector("#ingred2").innerHTML = crockpotOri.ori2;
    document.querySelector("#ingred3").innerHTML = crockpotOri.ori3;
    document.querySelector("#ingred4").innerHTML = crockpotOri.ori4;
    document.querySelector("#ingred5").innerHTML = crockpotOri.ori5;
    document.querySelector("#ingred6").innerHTML = crockpotOri.ori6;
    document.querySelector("#ingred7").innerHTML = crockpotOri.ori7;
    document.querySelector("#ingred8").innerHTML = crockpotOri.ori8;
    document.querySelector("#ingred9").innerHTML = crockpotOri.ori9;
    document.querySelector("#ingred10").innerHTML = crockpotOri.ori10;
    document.querySelector("#ingred11").innerHTML = crockpotOri.ori11;
    document.querySelector("#ingred12").innerHTML = crockpotOri.ori12;
}

function displayCrockpotHalf(){
    document.querySelector("#half").value;
    document.querySelector("#servingSize").innerHTML = crockpotHalf.halfServ;
    document.querySelector("#ingred1").innerHTML = crockpotHalf.half1;
    document.querySelector("#ingred2").innerHTML = crockpotHalf.half2;
    document.querySelector("#ingred3").innerHTML = crockpotHalf.half3;
    document.querySelector("#ingred4").innerHTML = crockpotHalf.half4;
    document.querySelector("#ingred5").innerHTML = crockpotHalf.half5;
    document.querySelector("#ingred6").innerHTML = crockpotHalf.half6;
    document.querySelector("#ingred7").innerHTML = crockpotHalf.half7;
    document.querySelector("#ingred8").innerHTML = crockpotHalf.half8;
    document.querySelector("#ingred9").innerHTML = crockpotHalf.half9;
    document.querySelector("#ingred10").innerHTML = crockpotHalf.half10;
    document.querySelector("#ingred11").innerHTML = crockpotHalf.half11;
    document.querySelector("#ingred12").innerHTML = crockpotHalf.half12;
}

function displayCrockpotDouble(){
    document.querySelector("#half").value;
    document.querySelector("#servingSize").innerHTML = crockpotDouble.doubleServ;
    document.querySelector("#ingred1").innerHTML = crockpotDouble.double1;
    document.querySelector("#ingred2").innerHTML = crockpotDouble.double2;
    document.querySelector("#ingred3").innerHTML = crockpotDouble.double3;
    document.querySelector("#ingred4").innerHTML = crockpotDouble.double4;
    document.querySelector("#ingred5").innerHTML = crockpotDouble.double5;
    document.querySelector("#ingred6").innerHTML = crockpotDouble.double6;
    document.querySelector("#ingred7").innerHTML = crockpotDouble.double7;
    document.querySelector("#ingred8").innerHTML = crockpotDouble.double8;
    document.querySelector("#ingred9").innerHTML = crockpotDouble.double9;
    document.querySelector("#ingred10").innerHTML = crockpotDouble.double10;
    document.querySelector("#ingred11").innerHTML = crockpotDouble.double11;
    document.querySelector("#ingred12").innerHTML = crockpotDouble.double12;
}/* Crockpot End */

/* Pasta Alfredo */
let pastaOri = {
    oriServ: "2",
    ori1: "4 ounce pasta linguini",
    ori2: "2 tablespoon unsalted butter",
    ori3: "1 cloves garlic minced",
    ori4: "0.75 cups milk",
    ori5: "0.5 cup heavy cream",
    ori6: "0.25 cup Parmesan cheese shredded",
    ori7: "0.13 teaspoon salt",
    ori8: "0.13 teaspoon pepper",
    ori9: "1 tablespoon fresh parsley"
}

let pastaHalf = {
    halfServ: "1",
    half1: "2 ounce pasta linguini",
    half2: "1 tablespoon unsalted butter",
    half3: "1/2 cloves garlic minced",
    half4: "0.38 cups milk",
    half5: "0.25 cup heavy cream",
    half6: "0.13 cup Parmesan cheese shredded",
    half7: "0.06 teaspoon salt",
    half8: "0.06 teaspoon pepper",
    half9: "0.5 tablespoon fresh parsley"
}

let pastaDouble = {
    doubleServ: "4",
    double1: "8 ounce pasta linguini",
    double2: "4 tablespoon unsalted butter",
    double3: "2 cloves garlic minced",
    double4: "1 1/2 cups milk",
    double5: "1 cup heavy cream",
    double6: "1/2 cup Parmesan cheese shredded",
    double7: "1/4 teaspoon salt",
    double8: "1/4 teaspoon pepper",
    double9: "2 tablespoon fresh parsley"
}

function displayPastaOri(){
    document.querySelector("#half").value;
    document.querySelector("#pastaServingSize").innerHTML = pastaOri.oriServ;
    document.querySelector("#pastaIngred1").innerHTML = pastaOri.ori1;
    document.querySelector("#pastaIngred2").innerHTML = pastaOri.ori2;
    document.querySelector("#pastaIngred3").innerHTML = pastaOri.ori3;
    document.querySelector("#pastaIngred4").innerHTML = pastaOri.ori4;
    document.querySelector("#pastaIngred5").innerHTML = pastaOri.ori5;
    document.querySelector("#pastaIngred6").innerHTML = pastaOri.ori6;
    document.querySelector("#pastaIngred7").innerHTML = pastaOri.ori7;
    document.querySelector("#pastaIngred8").innerHTML = pastaOri.ori8;
    document.querySelector("#pastaIngred9").innerHTML = pastaOri.ori9;
}

function displayPastaHalf(){
    document.querySelector("#pastaServingSize").innerHTML = pastaHalf.halfServ;
    document.querySelector("#pastaIngred1").innerHTML = pastaHalf.half1;
    document.querySelector("#pastaIngred2").innerHTML = pastaHalf.half2;
    document.querySelector("#pastaIngred3").innerHTML = pastaHalf.half3;
    document.querySelector("#pastaIngred4").innerHTML = pastaHalf.half4;
    document.querySelector("#pastaIngred5").innerHTML = pastaHalf.half5;
    document.querySelector("#pastaIngred6").innerHTML = pastaHalf.half6;
    document.querySelector("#pastaIngred7").innerHTML = pastaHalf.half7;
    document.querySelector("#pastaIngred8").innerHTML = pastaHalf.half8;
    document.querySelector("#pastaIngred9").innerHTML = pastaHalf.half9;
}

function displayPastaDouble(){
    document.querySelector("#pastaServingSize").innerHTML = pastaDouble.doubleServ;
    document.querySelector("#pastaIngred1").innerHTML = pastaDouble.double1;
    document.querySelector("#pastaIngred2").innerHTML = pastaDouble.double2;
    document.querySelector("#pastaIngred3").innerHTML = pastaDouble.double3;
    document.querySelector("#pastaIngred4").innerHTML = pastaDouble.double4;
    document.querySelector("#pastaIngred5").innerHTML = pastaDouble.double5;
    document.querySelector("#pastaIngred6").innerHTML = pastaDouble.double6;
    document.querySelector("#pastaIngred7").innerHTML = pastaDouble.double7;
    document.querySelector("#pastaIngred8").innerHTML = pastaDouble.double8;
    document.querySelector("#pastaIngred9").innerHTML = pastaDouble.double9;
}/* Pasta End */

/* Spinach Dip */
let spinachOri = {
    oriServ: "6",
    ori1: "2 (10-ounce) bag fresh baby spinach, roughly chopped",
    ori2: "2 (13-ounce) can quartered artichoke hearts, chopped and drained",
    ori3: "2 (8-ounce) brick low-fat cream cheese, cut into 2-inch cubes",
    ori4: "2 cup light sour cream or plain Greek yogurt",
    ori5: "2 cup shredded Mozzarella cheese",
    ori6: "1 cup grated Parmesan cheese",
    ori7: "2/3 cup finely-chopped white",
    ori8: "8 cloves garlic, minced",
    ori9: "1 teaspoon black pepper",
    ori10: "1/2 teaspoon fine sea salt"
}

let spinachHalf = {
    halfServ: "3",
    half1: "1 bag fresh baby spinach, roughly chopped",
    half2: "1 can quartered artichoke hearts, chopped and drained",
    half3: "1 brick low-fat cream cheese, cut into 2-inch cubes",
    half4: "1 cup light sour cream or plain Greek yogurt",
    half5: "1 cup shredded Mozzarella cheese",
    half6: "1 cup grated Parmesan cheese",
    half7: ".3 cup finely-chopped white",
    half8: "3 cloves garlic, minced",
    half9: "1/2 teaspoon black pepper",
    half10: ".5 teaspoon fine sea salt"
}

let spinachDouble = {
    doubleServ: "12",
    double1: "4 bag fresh baby spinach, roughly chopped",
    double2: "4 can quartered artichoke hearts, chopped and drained",
    double3: "4 brick low-fat cream cheese, cut into 2-inch cubes",
    double4: "4 cup light sour cream or plain Greek yogurt",
    double5: "4 cup shredded Mozzarella cheese",
    double6: "2 cup grated Parmesan cheese",
    double7: "1.3 cup finely-chopped white",
    double8: "10 cloves garlic, minced",
    double9: "2 teaspoon black pepper",
    double10: "1 teaspoon fine sea salt"
}

function displaySpinachOri(){
    document.querySelector("#spinachServingSize").innerHTML = spinachOri.oriServ;
    document.querySelector("#spinachIngred1").innerHTML = spinachOri.ori1;
    document.querySelector("#spinachIngred2").innerHTML = spinachOri.ori2;
    document.querySelector("#spinachIngred3").innerHTML = spinachOri.ori3;
    document.querySelector("#spinachIngred4").innerHTML = spinachOri.ori4;
    document.querySelector("#spinachIngred5").innerHTML = spinachOri.ori5;
    document.querySelector("#spinachIngred6").innerHTML = spinachOri.ori6;
    document.querySelector("#spinachIngred7").innerHTML = spinachOri.ori7;
    document.querySelector("#spinachIngred8").innerHTML = spinachOri.ori8;
    document.querySelector("#spinachIngred9").innerHTML = spinachOri.ori9;
}

function displaySpinachHalf(){
    document.querySelector("#spinachServingSize").innerHTML = spinachHalf.halfServ;
    document.querySelector("#spinachIngred1").innerHTML = spinachHalf.half1;
    document.querySelector("#spinachIngred2").innerHTML = spinachHalf.half2;
    document.querySelector("#spinachIngred3").innerHTML = spinachHalf.half3;
    document.querySelector("#spinachIngred4").innerHTML = spinachHalf.half4;
    document.querySelector("#spinachIngred5").innerHTML = spinachHalf.half5;
    document.querySelector("#spinachIngred6").innerHTML = spinachHalf.half6;
    document.querySelector("#spinachIngred7").innerHTML = spinachHalf.half7;
    document.querySelector("#spinachIngred8").innerHTML = spinachHalf.half8;
    document.querySelector("#spinachIngred9").innerHTML = spinachHalf.half9;
}

function displaySpinachDouble(){
    document.querySelector("#spinachServingSize").innerHTML = spinachDouble.doubleServ;
    document.querySelector("#spinachIngred1").innerHTML = spinachDouble.double1;
    document.querySelector("#spinachIngred2").innerHTML = spinachDouble.double2;
    document.querySelector("#spinachIngred3").innerHTML = spinachDouble.double3;
    document.querySelector("#spinachIngred4").innerHTML = spinachDouble.double4;
    document.querySelector("#spinachIngred5").innerHTML = spinachDouble.double5;
    document.querySelector("#spinachIngred6").innerHTML = spinachDouble.double6;
    document.querySelector("#spinachIngred7").innerHTML = spinachDouble.double7;
    document.querySelector("#spinachIngred8").innerHTML = spinachDouble.double8;
    document.querySelector("#spinachIngred9").innerHTML = spinachDouble.double9;
}/* Spinach End */