class entry
{
    entryName="";
    
    rollList =[];

    setEntryName = (eName) =>
    {
        this.entryName = eName;
    };

    setRollList = (rList) =>
    {
        this.rollList = rList;
    }

    getEntryName()
    {
        return this.entryName;
    }

    getRollList()
    {
        return this.rollList;
    }
}

class rollDetails
{
    diceType="";    
    rollValue ="";

    modifierName = "";
    modifierValue=0;

    setDiceType(dType)
    {
        this.diceType = dType
    }

    setRollValue(rValue)
    {
        this.rollValue = rValue;
    }

    setModifierName(mName)
    {
        this.modifierName = mName;
    }

    setModifierValue(mValue)
    {
        this.modifierValue = mValue;
    }

    getDiceType()
    {
        return this.diceType;
    }

    getRollValue()
    {
        return this.rollValue;
    }

    getModifierName()
    {
        return this.modifierName;
    }

    getModifierValue()
    {
        return this.modifierValue;
    }
}

let entryList= [];
let rollList = document.querySelector(".rollListDiv");

let numRolls = 0;
let numRollsElement = document.querySelector("#numRolls");

//I'm going to use this function to stop repeating the code in the rolls later.
// function DiceRollDetails()
// {

// }

function roll()
{
    let diceType = document.getElementById("diceType_Auto").value;
    let numDice = parseInt(document.getElementById("diceQuantity_Auto").value);
    
    let modifierName = document.getElementById("modifierName").value;
    let modifierAmt = parseInt(document.getElementById("modifierAmt").value) || 0;

    if(Number.isNaN(numDice))
    {
        alert("Please enter the number of dice");
        return;
    }

    //Converts the diceType to an array of numerical ranges depending on the
    //dice selected.
    switch (diceType)
    {
        case "d4":
            diceType = [1,4];
        break;

        case "d6":
            diceType = [1,6];
        break;

        case "d8":
            diceType = [1,8];
        break;

        case "d10":
            diceType = [1,10];
        break;

        case "d12":
            diceType = [1,12];
        break;

        case "d20":
            diceType = [1,20];
        break;

        default:
            alert("Invalid Dice Type");
        break;
    }

    //Everything above works.
    //Problem: Roll # - isn't updating. It keeps sticking at 1 for each entry and the counter at the top-right.

    //Fixed: Entry "Roll #" tracks rolls correctly
    //Fixed: numRolls responsible for tracking the rolls at the top-right is now updating properly.


    for(let i = 0; i<numDice; i++)
    {
        numRolls +=1;
        numRollsElement.innerHTML = `${numRolls} Rolls`;

        let diceRoll = Math.floor(Math.random() * diceType[1]) + diceType[0]; //Works
        console.log(`dice roll:  ${diceRoll}`);

        let diceRollTotal = diceRoll + modifierAmt;
        console.log(`Total: ${diceRollTotal}`);
        
        let rollShort = `<span>Roll ${numRolls} (Short):</span><br> (d${diceType[1]}) ${diceRoll} + ${modifierAmt} = ${diceRollTotal} `;
        console.log(rollShort);

        let rollDetailed = `<span>Roll ${numRolls} (Detailed):</span><br>
        (d${diceType[1]}) ${diceRoll} + ${modifierName} (${modifierAmt}) = ${diceRollTotal}`;

        console.log(rollDetailed);

        rollList.insertAdjacentHTML("beforeend", `
            <div class="roll">
                <div class="rollDesc">
                    <p id="rollShort">${rollShort}</p>
                    <p id="rollDetailed">${rollDetailed}</p>
                </div>
            </div>
        `);

        // <div class="rollEditBtns">
        //     <input type="button" id="deleteRoll" onclick="" value="Delete">

        //     <input type="button" id="editRoll" onclick="" value="Edit">
        // </div>

        
    }


}

function calculate()
{

    let diceType = document.getElementById("diceType_Man").value;
    let numDice = document.getElementById("diceQuantity_Man").value;
    
    let modifierName = document.getElementById("modifierName_Man").value;

    let modifierAmt = parseInt(document.getElementById("modifierAmt_Man").value) || 0;

    let diceRollResult = parseInt(document.getElementById("diceResult").value);

    let diceRollTotal = diceRollResult + modifierAmt;
    // console.log(`Total: ${diceRollTotal}`);

    if (Number.isNaN(diceRollResult))
    {
        alert("Dice Roll Result needs a number");
        return;
    }

    switch (diceType)
    {
        case "d4":
            diceType = [1,4];
        break;

        case "d6":
            diceType = [1,6];
        break;

        case "d8":
            diceType = [1,8];
        break;

        case "d10":
            diceType = [1,10];
        break;

        case "d12":
            diceType = [1,12];
        break;

        case "d20":
            diceType = [1,20];
        break;

        default:
            alert("Invalid Dice Type");
        break;
    }

    numRolls +=1;
    numRollsElement.innerHTML = `${numRolls} Rolls`;

    let rollShort = `<span>Roll ${numRolls} (Short):</span><br> (d${diceType[1]}) ${diceRollResult} + ${modifierAmt} = ${diceRollTotal} `;
    // console.log(rollShort);

    let rollDetailed = `<span>Roll ${numRolls} (Detailed):</span><br>
    (d${diceType[1]}) ${diceRollResult} + ${modifierName} (${modifierAmt}) = ${diceRollTotal}`;

    rollList.insertAdjacentHTML("beforeend", `
        <div class="roll">
            <div class="rollDesc">
                <p id="rollShort">${rollShort}</p>
                <p id="rollDetailed">${rollDetailed}</p>
            </div>
        </div>
    `);

    
        // <div class="rollEditBtns">
        //     <input type="button" id="deleteRoll" onclick="" value="Delete">

        //     <input type="button" id="editRoll" onclick="" value="Edit">
        // </div>
}