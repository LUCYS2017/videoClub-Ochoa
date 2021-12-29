import { AbstractControl } from "@angular/forms";

export class Validations{
    static isdiferent(control:AbstractControl, control2:AbstractControl){
        const value1= control.value;
        const value2 = control2.value;
        if(value1!=value2){
            return {isdiferent:true};
        }
        return null;
    }
}