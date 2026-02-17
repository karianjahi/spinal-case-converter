// This function is basically a showcase of how positive lookahead regex works
// We want to split a word using regex just before each capital letter (except the first one) -- positive lookahead
const spinalCase = (aString) => {
    // we need to split before each capital letter (except the first one)
    const regex = /(?=[A-Z])/; // means match a position right before a capital letter
    const splits = aString.split(regex); // split at the current position 
    let allList = [];
    let finalString = [];
    for (let aSplit of splits) {
        allList.push(aSplit.split(/[\s|_]/).join("-"));
    }
    allList = allList.join("-").split("-");
    for (let anItem of allList) {
        if (anItem.length !== 0) finalString.push(anItem);
    }
    return finalString.join("-").toLowerCase();
    


};

console.log(spinalCase("ProductLandingPeterMuraiGitiriJeshi page"));
console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things MustNotBeDebated from InsideThisHall"));