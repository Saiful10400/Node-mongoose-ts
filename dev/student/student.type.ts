export type stName={
    firstName:string,
    lastName:string
}

export type parent={
    father:string,
    mother:string,
    phone:string
}
export type friend={
    name:string,
    roll:number,
    gender:"male"|"female"
}
export type student={
    name:stName,
    roll:number,
    parent:parent,
    friend:Array<friend>,
    gender: "male"|"female",
    isRegular:boolean
}