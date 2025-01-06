interface Coordinate {
    x: number
    y: number
}

type NumberPair = Array<Array<string>>;

function parseCoordinate(x: string): Coordinate
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(x: Coordinate): Coordinate; 
function parseCoordinate(x: unknown, y?: unknown): Coordinate{
    let cd: Coordinate = {
        x: 0,
        y: 0
    };
    if(typeof x === 'string') {
        // const arr = x.split(",");
        // let first,sec,res=[];
        // for(const val of arr) {
        //     res.push(val.split(":"));
        // }
        // function findKey(carr: NumberPair, ele: string){
        //     for(let i=0;i<carr.length;++i){
        //         if(carr[i][0] === ele){
        //             return Number.parseInt(carr[i][1])
        //         }
        //     }
        //     return 0;
        // }
        // first = findKey(res,'x');
        // sec = findKey(res,'y');
        // cd = {
        //     x: first,
        //     y: sec
        // }

        x.split(',').forEach((val) => {
            const [key, value] = val.split(":");
            cd[key as 'x'| 'y'] =  parseInt(value);
        })
    } else if(typeof x === 'number') {
        cd = {
            x,
            y: y as number
        }
    } else if(typeof x === 'object') {
        cd = { ...x as Coordinate}
    }
    return cd;
}

console.log(parseCoordinate(10,20));
console.log(parseCoordinate({ x: 52, y: 35}));
console.log(parseCoordinate("x:12,z:13"));
