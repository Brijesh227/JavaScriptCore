// delete isSelected from bank
let bank= {
    accountNumber: 123,
    add: "USA",
    isSelected: true
}

const {isSelected: _, {...newObj}} = bank;   // Invalid (throws syntax error)
const {isSelected: _, ...newObj} = bank;     // newObj = { accountNumber: 123, add: "USA" }
const {isSelected: _, newObj} = bank;        // newObj = undefined

const newObj = bank;
delete newObj.isSelected;
