import { Schema,model } from 'mongoose';
import { friend, parent, stName, student } from './student.type';

const nameSchema=new Schema<stName>({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true}
})

const parentSchema=new Schema<parent>({
    father:{type:String,required:true},
    mother:{type:String,required:true},
    phone:{type:String,required:true}

})

const friendSchema=new Schema<friend>({
    name:String,
    roll:Number,
    gender:{
        type:String,
        enum:["male","female"]
    }
})

const studentSchema=new Schema<student>({
    name:nameSchema,
    parent:parentSchema,
    friend:[friendSchema],
    gender:["male","female"],
    isRegular:Boolean
    
})

// let's create a model for this schema.

export const Student=model<student>("Student",studentSchema)