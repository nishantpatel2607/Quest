import {FormControl} from '@angular/forms';



export class EmailValidator{
    static EmailIsValid(control:FormControl){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( re.test(control.value) == false)
            return{EmailIsValid:true};
        return null;
    }
} 


