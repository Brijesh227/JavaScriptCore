const categories = [
    {
        code: 1,
        parent: null,
        label: "Women"
    },
    {
        code: 2,
        parent: 1,
        label: "Boots"
    },
    {
        code: 3,
        parent: 2,
        label: "Sandals"
    },
    {
        code: 4,
        parent: null,
        label: "Men"
    }
];
 // Create breadcrumb
 // 1. Women > Boots > Sandal
 // 2. Men

 function breadcrumbs() {
    const res = {};
     for(let item of categories){
         if(item.parent){
         }
     }
 }

 breadcrumbs();