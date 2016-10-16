import { Injectable,EventEmitter} from "@angular/core";

@Injectable()
export class GlobalService {
   /*onMainEvent: EventEmitter<any> = new EventEmitter();
    disableFlag= "test";*/

    navbarEnabled:boolean = true;
    onnavbarEnabledChange:EventEmitter<any> = new EventEmitter();

    enableNavBar(newVal:boolean){
        this.navbarEnabled = newVal;
        this.onnavbarEnabledChange.emit(this.navbarEnabled);
    }

    /*change(newVal:string){
        this.disableFlag = newVal;
        this.onMainEvent.emit(this.disableFlag);
    }*/

    
}