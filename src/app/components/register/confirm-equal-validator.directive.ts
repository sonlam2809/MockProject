import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive, Input } from "@angular/core";

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true,
    }]
})
export class ConfirmEqualValidatorDirective implements Validator{
    @Input() appConfirmEqualValidator: string;
    validate(control: AbstractControl): {[key: string]: any} | null {
        //console.log("Vao ham validate");
        const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        //console.log("controlToCompare "+controlToCompare);
        //console.log("--------------" + this.appConfirmEqualValidator);

        if(controlToCompare && controlToCompare.value !== control.value){
            {
                //console.log("Kiem tra dieu kien dung");
                return {'notEqual': true};
            }
            
        }
        return null;
    } 
}
