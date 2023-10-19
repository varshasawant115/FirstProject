import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  ngOnInit(): void{}
  registerform=new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    lastname:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobile: new FormControl('',[Validators.required,Validators.pattern("[0-9].*"),Validators.minLength(10),Validators.maxLength(10),]),
    CustPremium:new FormControl('',[Validators.required]),
    pwd:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]),
    ismarried: new FormControl('',[Validators.required]),
   dept:new FormControl('',[Validators.required]),
   // rpwd:new FormControl(''),
  });

  registerSubmitted(){
    console.log(this.registerform);
  }
  get FirstName():FormControl{
    return this.registerform.get('firstname') as FormControl;
  }

  get LastName():FormControl{
    return this.registerform.get('lastname') as FormControl;
  }
  get Email():FormControl{
    return this.registerform.get('email') as FormControl;
  }
  get Mobile():FormControl{
    return this.registerform.get('mobile') as FormControl;
  }
  get CustPremium():FormControl{
    return this.registerform.get('CustPremium') as FormControl;
  }
  get PWD():FormControl{
    return this.registerform.get('pwd') as FormControl;
  }
    get Ismarried():FormControl{
    return this.registerform.get('ismarried') as FormControl;
    }
  
  get Dept():FormControl{
   return this.registerform.get('dept') as FormControl;
    }

}
